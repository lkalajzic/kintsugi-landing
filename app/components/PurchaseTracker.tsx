'use client'

import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

/**
 * Client component that tracks Purchase events via Pixel + CAPI
 * Called on thank-you page after successful checkout
 *
 * Flow:
 * 1. Fire vanilla pixel IMMEDIATELY (guarantees Meta gets the event)
 * 2. Then fire CAPI with accurate Stripe net value (same eventID for dedup)
 * Meta will deduplicate and prefer CAPI data (better match quality)
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

    // Mark as tracked IMMEDIATELY to prevent re-fires on refresh or remount
    // (CAPI fetch takes 2-5s; without this, a refresh mid-flight causes duplicates)
    sessionStorage.setItem(storageKey, 'pending')

    // 1. Fire vanilla pixel FIRST (unconditionally)
    // This guarantees Meta gets the purchase signal even if CAPI fails
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 38,  // Estimated EUR net (CAPI will have accurate value)
        currency: 'EUR',
        content_name: 'Kintsugi Class',
        content_type: 'product',
      }, { eventID: sessionId })
      console.log('[PurchaseTracker] Vanilla pixel fired with eventID:', sessionId)
    }

    // 2. Then fire CAPI with accurate Stripe net value (same eventID for dedup)
    const sendCAPIEvent = async () => {
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
          sessionStorage.setItem(storageKey, 'true')
        } else if (result.skipped) {
          console.log('[PurchaseTracker] CAPI skipped (non-Kintsugi)')
          sessionStorage.setItem(storageKey, 'skipped')
        } else {
          console.error('[PurchaseTracker] CAPI failed:', result.error)
          sessionStorage.setItem(storageKey, 'pixel-only')
        }
      } catch (error) {
        console.error('[PurchaseTracker] CAPI error:', error)
        sessionStorage.setItem(storageKey, 'pixel-only')
      }
    }

    sendCAPIEvent()
  }, [sessionId])

  // This component doesn't render anything
  return null
}
