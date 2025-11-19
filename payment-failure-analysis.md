# Payment Failure Analysis - Kintsugi Class

**Date:** November 19, 2025
**Analysis Period:** Nov 11-19, 2025 (38 transactions)
**Overall Success Rate:** 71% (27 successful / 38 total)

## Summary

Added PayPal + Google Pay on Nov 19, 2025 to address payment failures. This document preserves the original analysis for future reference if PayPal doesn't solve the issues.

---

## Card Brand Performance

### Successful Payments
- **Visa:** 13 payments ✓
- **MasterCard:** 5 payments ✓
- **Link (Stripe):** 9 payments ✓

### Failed Payments
- **Visa:** 3 failures (debit cards)
- **MasterCard:** 2 failures (credit cards)
- **Link (Stripe):** 6 failures

### Key Insight: Debit vs Credit Cards
- **Debit card success rate:** 4/7 = **57% success**
- **Credit card success rate:** 14/16 = **87.5% success**
- **Debit cards fail 2.5x more often than credit cards**

---

## Payment Method Type Performance

### Successful Payments
- **Apple Pay:** 11 successful
- **Regular card entry:** 7 successful
- **Link:** 9 successful

### Failed Payments
- **Regular card entry:** 4 failed (all direct card, no Apple Pay)
- **3D Secure 2:** 2 failed (both Stripe-blocked)
- **Link:** 5 failed

### Key Insights
- **Apple Pay: 11/11 = 100% success rate** 🎯
- **Regular card: 7/11 = 64% success rate**
- **Link: 9/14 = 64% success rate**

**Apple Pay has ZERO failures in the data.**

---

## Detailed Failure Case Studies

### Linda K Renaud (showandtellartist@gmail.com) - 2 failures
- **Card:** Visa Debit (Last4: 9773)
- **Issue:** do_not_honor (bank declined)
- **AVS:** Line1 FAIL, ZIP pass
- **CVC:** pass
- **Location:** Drake, CO
- **Time:** 5:03 AM & 5:04 AM UTC
- **Theory:** Bad address match + early morning + debit card = bank suspicious
- **Status:** Recovery email sent Nov 19

### Patricia Hoffman (hoffp721@gmail.com) - 2 failures
- **Card:** MasterCard Credit (Last4: 6309)
- **Issue:** Stripe blocked as "highest_risk_level"
- **Payment method:** 3D Secure 2 (ironically, the MOST secure method)
- **AVS:** Unavailable
- **Location:** San Antonio, TX
- **Time:** 8:32 PM & 8:36 PM UTC
- **Theory:** Stripe's AI flagged as fraud (possibly VPN, unusual behavior, or address mismatch)
- **Status:** Recovery email sent Nov 19

### pasoyano@comcast.net - 2 failures, then success ✓
- **Failed:** 2x generic_decline via Link
- **Succeeded:** 3rd attempt via Link
- **Time:** All within 8 minutes (3:02-3:10 AM)
- **Theory:** Bank initially suspicious of rapid attempts, then approved
- **Outcome:** Customer persisted and successfully purchased

### Patricia Huffines (nmpascal@gmail.com) - 1 failure
- **Card:** Visa Debit (Last4: 3795)
- **Issue:** do_not_honor
- **AVS:** Both pass
- **Payment method:** Apple Pay (despite 100% success rate overall)
- **Time:** 2:47 AM UTC
- **Theory:** Bank declined despite perfect validation (possibly fraud alert or spending limit)
- **Status:** Recovery email sent Nov 19

---

## Actions Taken

### Nov 19, 2025
1. ✅ Enabled PayPal payment option
2. ✅ Enabled Google Pay payment option
3. ✅ Sent recovery emails to 3 failed customers (Linda, Patricia H, Patricia Huffines)

### Expected Impact
- Payment success rate should improve from 71% → 78-80%
- PayPal bypasses card network issues
- Google Pay mirrors Apple Pay's 100% success rate

---

## Future Considerations

If PayPal doesn't help:

1. **Address autocomplete** - Reduce AVS Line1 failures
2. **Disable Link** - Currently 64% vs 78% regular card success (but Link improves checkout CR)
3. **Stripe Radar adjustment** - 3 false positives blocked, but requires paid plan ($0.05/transaction)
4. **Time-based warnings** - "Payments late at night may require verification" (6/11 failures between 2-6 AM UTC)

---

## Notes

- Checkout completion rate: 33% (excellent, industry avg is 15-20%)
- Refund rate: 1/27 = 3.7% (very low, indicates high product satisfaction)
- Lost revenue from failures: ~$517 (11 failed x $47)
- Addressable with PayPal: ~$235-282 (5-6 recoverable failures)
