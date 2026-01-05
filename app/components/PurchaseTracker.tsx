'use client'

import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

/**
 * Client component that tracks Purchase events via CAPI + Pixel
 * Called on thank-you page after successful checkout
 */
export default function PurchaseTracker() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const hasSentRef = useRef(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    // Need session_id to track
    if (!sessionId) {
      console.log('[PurchaseTracker] No session_id in URL, skipping tracking')
      return
    }

    // Prevent duplicate sends (React StrictMode, revisits)
    const storageKey = `purchase_tracked_${sessionId}`
    if (sessionStorage.getItem(storageKey) || hasSentRef.current) {
      console.log('[PurchaseTracker] Already tracked this purchase')
      return
    }

    hasSentRef.current = true

    // Send purchase event to CAPI and fire pixel
    const sendPurchaseEvent = async () => {
      try {
        console.log('[PurchaseTracker] Sending Purchase CAPI event...')
        const response = await fetch('/api/send-purchase', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        })

        const result = await response.json()

        if (result.success) {
          console.log(`[PurchaseTracker] CAPI sent (value: ${result.value} ${result.currency})`)

          // Fire client-side pixel with same eventID for deduplication
          if (window.fbq) {
            window.fbq('track', 'Purchase', {
              value: result.value,
              currency: result.currency.toUpperCase(),
              content_name: 'Kintsugi Class',
              content_type: 'product',
            }, { eventID: sessionId })
            console.log('[PurchaseTracker] Pixel fired with eventID:', sessionId)
          }

          sessionStorage.setItem(storageKey, 'true')
        } else if (result.skipped) {
          console.log('[PurchaseTracker] Purchase skipped (non-Kintsugi)')
          sessionStorage.setItem(storageKey, 'skipped')
        } else {
          console.error('[PurchaseTracker] Failed:', result.error)
        }
      } catch (error) {
        console.error('[PurchaseTracker] Error:', error)
      }
    }

    sendPurchaseEvent()
  }, [sessionId])

  // This component doesn't render anything
  return null
}
