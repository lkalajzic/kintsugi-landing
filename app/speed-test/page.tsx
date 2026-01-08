'use client'

import { useState } from 'react'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

export default function SpeedTest() {
  const [results, setResults] = useState<string[]>([])
  const [testing, setTesting] = useState<string | null>(null)

  const addResult = (msg: string) => {
    setResults(prev => [...prev, msg])
  }

  // Test 1: Current implementation (AWAITED fetch)
  const testCurrent = async () => {
    setTesting('current')
    const start = performance.now()
    addResult(`[Current] Starting...`)

    try {
      const response = await fetch('/api/track-checkout', { method: 'POST' })
      const data = await response.json()

      const afterFetch = performance.now()
      addResult(`[Current] Fetch completed: ${(afterFetch - start).toFixed(0)}ms`)

      if (window.fbq && data.eventId) {
        window.fbq('track', 'InitiateCheckout', {
          value: 37.5,
          currency: 'EUR',
        }, { eventID: data.eventId })
      }
    } catch (error) {
      addResult(`[Current] Error: ${error}`)
    }

    const end = performance.now()
    addResult(`[Current] Total before redirect: ${(end - start).toFixed(0)}ms`)
    setTesting(null)

    // Don't actually redirect in test
    // window.location.href = 'https://buy.stripe.com/...'
  }

  // Test 2: No tracking (direct redirect baseline)
  const testNoTracking = () => {
    setTesting('none')
    const start = performance.now()
    addResult(`[No Tracking] Starting...`)

    // Simulate what happens with no tracking
    const end = performance.now()
    addResult(`[No Tracking] Total before redirect: ${(end - start).toFixed(0)}ms`)
    setTesting(null)

    // This would be instant:
    // window.location.href = 'https://buy.stripe.com/...'
  }

  // Test 3: sendBeacon implementation (NEW)
  const testSendBeacon = () => {
    setTesting('beacon')
    const start = performance.now()
    addResult(`[sendBeacon] Starting...`)

    // Generate eventId client-side
    const eventId = crypto.randomUUID()

    // Fire pixel immediately
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 37.5,
        currency: 'EUR',
      }, { eventID: eventId })
    }
    const afterPixel = performance.now()
    addResult(`[sendBeacon] Pixel fired: ${(afterPixel - start).toFixed(0)}ms`)

    // Use sendBeacon (non-blocking, guaranteed delivery)
    const payload = JSON.stringify({ eventId })
    navigator.sendBeacon('/api/track-checkout', payload)

    const afterBeacon = performance.now()
    addResult(`[sendBeacon] Beacon queued: ${(afterBeacon - start).toFixed(0)}ms`)

    const end = performance.now()
    addResult(`[sendBeacon] Total before redirect: ${(end - start).toFixed(0)}ms`)
    setTesting(null)

    // This would redirect immediately:
    // window.location.href = 'https://buy.stripe.com/...'
  }

  // Test 4: Fire-and-forget fetch (Option 2 for comparison)
  const testFireForget = () => {
    setTesting('fireforget')
    const start = performance.now()
    addResult(`[Fire & Forget] Starting...`)

    const eventId = crypto.randomUUID()

    // Fire pixel immediately
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 37.5,
        currency: 'EUR',
      }, { eventID: eventId })
    }

    // Fire fetch but DON'T await
    fetch('/api/track-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId })
    }).catch(console.error)

    const end = performance.now()
    addResult(`[Fire & Forget] Total before redirect: ${(end - start).toFixed(0)}ms`)
    setTesting(null)
  }

  // Real redirect test
  const testRealRedirect = async (type: 'current' | 'beacon') => {
    const start = performance.now()

    if (type === 'current') {
      // Current slow implementation
      const response = await fetch('/api/track-checkout', { method: 'POST' })
      const data = await response.json()
      if (window.fbq && data.eventId) {
        window.fbq('track', 'InitiateCheckout', { value: 37.5, currency: 'EUR' }, { eventID: data.eventId })
      }
    } else {
      // New fast implementation
      const eventId = crypto.randomUUID()
      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', { value: 37.5, currency: 'EUR' }, { eventID: eventId })
      }
      navigator.sendBeacon('/api/track-checkout', JSON.stringify({ eventId }))
    }

    // Store timing in sessionStorage so we can see it
    sessionStorage.setItem('redirectTime', `${(performance.now() - start).toFixed(0)}ms`)

    // Actually redirect to a test URL (won't work but shows the timing)
    window.location.href = `https://example.com/?timing=${(performance.now() - start).toFixed(0)}ms&type=${type}`
  }

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Button Speed Test</h1>

        <p className="text-gray-600">
          Tests measure time from click until redirect would happen.
          No actual redirect occurs (except "Real Redirect" buttons).
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={testCurrent}
            disabled={testing !== null}
            className="bg-red-500 text-white p-4 rounded-lg disabled:opacity-50"
          >
            {testing === 'current' ? 'Testing...' : 'Test CURRENT (await fetch)'}
          </button>

          <button
            onClick={testNoTracking}
            disabled={testing !== null}
            className="bg-gray-500 text-white p-4 rounded-lg disabled:opacity-50"
          >
            {testing === 'none' ? 'Testing...' : 'Test NO TRACKING (baseline)'}
          </button>

          <button
            onClick={testSendBeacon}
            disabled={testing !== null}
            className="bg-green-500 text-white p-4 rounded-lg disabled:opacity-50"
          >
            {testing === 'beacon' ? 'Testing...' : 'Test sendBeacon (NEW)'}
          </button>

          <button
            onClick={testFireForget}
            disabled={testing !== null}
            className="bg-blue-500 text-white p-4 rounded-lg disabled:opacity-50"
          >
            {testing === 'fireforget' ? 'Testing...' : 'Test Fire & Forget fetch'}
          </button>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 mb-4">Real redirect tests (will navigate away):</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => testRealRedirect('current')}
              className="bg-red-700 text-white p-4 rounded-lg"
            >
              REAL: Current (slow)
            </button>
            <button
              onClick={() => testRealRedirect('beacon')}
              className="bg-green-700 text-white p-4 rounded-lg"
            >
              REAL: sendBeacon (fast)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Results</h2>
            <button
              onClick={() => setResults([])}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          </div>
          <div className="font-mono text-sm space-y-1 max-h-96 overflow-y-auto">
            {results.length === 0 ? (
              <p className="text-gray-400">Click a button to test...</p>
            ) : (
              results.map((r, i) => (
                <div key={i} className={r.includes('Total') ? 'font-bold text-lg' : ''}>
                  {r}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
          <strong>Expected results:</strong>
          <ul className="list-disc ml-4 mt-2 space-y-1">
            <li><strong>Current (await):</strong> 1000-3000ms+ (waits for server)</li>
            <li><strong>No tracking:</strong> ~0ms (baseline)</li>
            <li><strong>sendBeacon:</strong> ~1-5ms (queues instantly)</li>
            <li><strong>Fire & forget:</strong> ~1-5ms (starts fetch, doesn't wait)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
