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
 * 1. Send to server which validates (payment link ID + payment_status=paid) and fires CAPI
 * 2. Only fire vanilla pixel if server confirms it's a paid Kintsugi purchase
 * 3. Both use the same eventID for Meta deduplication
 * 4. Vanilla pixel uses real net-after-fees value from server (no hardcoded estimate)
 *
 * This prevents: cross-attribution from non-Kintsugi purchases, false events
 * from failed/unpaid payments, and value mismatches between pixel and CAPI.
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

    // Validate with server first, then fire pixel only for confirmed Kintsugi purchases
    const trackPurchase = async () => {
      try {
        console.log('[PurchaseTracker] Validating purchase and sending CAPI...')
        const response = await fetch('/api/send-purchase', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        })

        const result = await response.json()

        if (result.skipped) {
          // Not a Kintsugi purchase, or payment not completed — don't fire pixel
          console.log('[PurchaseTracker] Skipped (non-Kintsugi or unpaid)')
          sessionStorage.setItem(storageKey, 'skipped')
        } else if (result.success) {
          // Confirmed paid Kintsugi purchase — fire vanilla pixel with real net value for dedup
          if (window.fbq) {
            window.fbq('track', 'Purchase', {
              value: result.value,
              currency: result.currency,
              content_name: 'Kintsugi Class',
              content_type: 'product',
            }, { eventID: sessionId })
            console.log(`[PurchaseTracker] Pixel + CAPI fired (value: ${result.value} ${result.currency})`)
          }
          sessionStorage.setItem(storageKey, 'true')
        } else {
          console.error('[PurchaseTracker] CAPI failed:', result.error)
          // CAPI failed but was validated as paid Kintsugi — fire pixel as fallback
          // Only fire if server returned value/currency (won't exist for 400/404/500 errors)
          if (window.fbq && result.value != null && result.currency) {
            window.fbq('track', 'Purchase', {
              value: result.value,
              currency: result.currency,
              content_name: 'Kintsugi Class',
              content_type: 'product',
            }, { eventID: sessionId })
            console.log(`[PurchaseTracker] Pixel fired as fallback (value: ${result.value} ${result.currency})`)
          }
          sessionStorage.setItem(storageKey, 'pixel-only')
        }
      } catch (error) {
        console.error('[PurchaseTracker] Error:', error)
        // Network error — can't validate, so DON'T fire pixel to avoid false attribution
        // The CAPI from webhook will still catch it server-side
        sessionStorage.setItem(storageKey, 'error')
      }
    }

    trackPurchase()
  }, [sessionId])

  // This component doesn't render anything
  return null
}
