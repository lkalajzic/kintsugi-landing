# Upsell Funnel Implementation Plan

**Date:** November 19, 2025
**Status:** Planning phase - drafting before building

## Context: What We Covered Today

### 1. Payment Failure Analysis ✅ HANDLED
- Analyzed 38 Stripe transactions (27 successful, 11 failed)
- 29% failure rate due to: bank declines (5), Stripe risk blocks (3), insufficient funds (1), retries (2)
- **Actions taken:**
  - Added PayPal + Google Pay payment options
  - Sent recovery emails to 3 failed customers (Linda, Patricia H, Patricia Huffines)
  - Expected impact: 71% → 78-80% success rate
- Full analysis saved in: `payment-failure-analysis.md`

### 2. Black Friday Fork Plan ✅ DOCUMENTED
- Will create separate Black Friday page in 3-5 days
- Replace "founding students" → "Black Friday Special" messaging
- Keep $47 price, test seasonal messaging
- Don't touch current funnel (33% CR, profitable)
- Plan saved in: `black-friday-plan.md`

### 3. JV Partner Hunt Strategy ✅ PLANNED
- Need: Japanese female kintsugi expert to record videos + be face of brand
- Offer: $2,500 flat fee for 3-5 hours of instruction + photoshoot
- Sourcing: Instagram (#kintsugi #金継ぎ), YouTube, Etsy Japan
- Timeline: Find partner after validating upsell demand
- Full strategy saved in: `/Users/luka/Documents/Obsidian Vault/claude_projects/projects/active/client-acquisition-2025/hobby_courses_sprint/kintsugi_jv_partner_hunt.md`

### 4. Upsell Testing Strategy (CURRENT TASK)
**Goal:** Test demand for video course + physical kit BEFORE building them

**Current Product:**
- $47 "digital guide" (90 pages, 1 image currently - will add images from video later)
- Sold 28 so far (27 successful + 1 refund = 26 active)
- 2 refunds total (7.4% refund rate) - people expected video/live class

**Proposed Upsell Structure:**
- **Video Course:** $97 (reserve spot, 30-day delivery)
- **Physical Kit:** $57 (dropship from China, 10-14 day shipping)
- **Bundle:** $127 (both, save $27)

**Why This Order:**
- Sell before we build (validate demand with real purchases)
- Use pre-order revenue to fund JV partner ($2,500) and kit inventory
- Only build if 25%+ take video upsell OR 20%+ take kit

---

## Technical Implementation Plan

### Current Funnel (DON'T TOUCH)
```
Main LP → Stripe checkout → /thank-you
                              ↓
                         FB Pixel Purchase event
```

**Tracking on thank-you page:**
```javascript
if (page url contains "thank-you") {
  fbq('track', 'Purchase', {
    value: 38.07,
    currency: 'EUR',
    content_name: 'Kintsugi Class',
    content_type: 'product'
  });
}
```

### New Test Funnel (SEPARATE)
```
Test LP → Stripe checkout → /upsell (NEW)
                              ↓
                         Upsell page (video + kit offers)
                              ↓
                         /complete (NEW final thank you)
                              ↓
                         FB Pixel Purchase event (different tracking)
```

---

## Route Naming (Customer-Facing)

**Problem:** Need URLs that don't look "test-y" or weird to customers

**Options:**

### Option 1: Feature-based (RECOMMENDED)
- `/upsell` → Upsell offers page
- `/complete` → Final thank you page after upsells

**Pros:**
- Natural-sounding
- Implies progression ("you're completing your order")
- Not weird if customer sees it

**Cons:**
- None really

### Option 2: Benefit-based
- `/upgrade` → Upsell offers page
- `/confirmed` → Final thank you page

**Pros:**
- "Upgrade" sounds premium
- Clear what's happening

**Cons:**
- Slightly more salesy

### Option 3: Journey-based
- `/next-step` → Upsell offers page
- `/welcome` → Final thank you page

**Pros:**
- Softer language
- "Welcome" feels friendly

**Cons:**
- Less clear what's happening

**RECOMMENDATION: Option 1**
- `/upsell` for offers page
- `/complete` for final thank you

---

## Tracking Setup

### Current (Main Funnel)
`/thank-you` → FB Purchase event (€38.07)

### New Test Funnel

**Page 1: `/upsell`**
- No purchase tracking (they already bought PDF)
- Maybe add ViewContent event for upsell page view

**Page 2: `/complete`**
- Track based on what they bought:

```javascript
// Base purchase (PDF only - if they skip upsells)
if (skipped_upsells) {
  fbq('track', 'Purchase', {
    value: 38.07,
    currency: 'EUR',
    content_name: 'Kintsugi Class - Digital Guide',
    content_type: 'product'
  });
}

// If they bought video ($97)
if (bought_video) {
  fbq('track', 'Purchase', {
    value: 38.07 + 78.74, // €115.81 total
    currency: 'EUR',
    content_name: 'Kintsugi Class - Digital Guide + Video Course',
    content_type: 'product'
  });
}

// If they bought kit ($57)
if (bought_kit) {
  fbq('track', 'Purchase', {
    value: 38.07 + 46.27, // €84.34 total
    currency: 'EUR',
    content_name: 'Kintsugi Class - Digital Guide + Starter Kit',
    content_type: 'product'
  });
}

// If they bought bundle ($127)
if (bought_bundle) {
  fbq('track', 'Purchase', {
    value: 38.07 + 103.09, // €141.16 total
    currency: 'EUR',
    content_name: 'Kintsugi Class - Complete Package',
    content_type: 'product'
  });
}
```

**Note:** Will need to pass purchase data via URL params or session storage

---

## Upsell Page Structure (Ogilvy/Hopkins Principles)

**Key principles from current LP:**
1. Specific claims (not vague benefits)
2. Proof/social validation (testimonials)
3. Paint the picture (what changes for them)
4. Overcome objections (FAQs)
5. Guarantee removes risk
6. Clear, singular CTA

**Adapted for upsell:**
1. **Headline:** Acknowledge what they just bought, offer upgrade
2. **Problem:** Reading vs. watching (some prefer video)
3. **Solution:** Video course + kit (complete package)
4. **Proof:** Student testimonials preferring video format
5. **Offer:** Bundle (pre-selected) vs. individual options
6. **Guarantee:** Same 30-day money-back
7. **Urgency:** Reserve spot (video in production) + limited kits

---

## Kit Contents (Cleaned Up)

**Raw from AliExpress:** (Too wordy, weird grammar, unnecessary info)

**Cleaned for upsell page:**

### What's Included in Your Starter Kit:
- **Kintsugi adhesive** (50ml) - Professional-grade ceramic bonding formula
- **Gold powder** (5g) - Creates authentic golden repair lines
- **Silver powder** (5g) - Alternative finish option
- **Precision tools** - Mixing cup, stirring rod, application scraper
- **Safety gloves** - Protect your hands during application
- **Step-by-step instructions** - Detailed guide included

**Value if purchased separately:** ~$85
**Your price today:** $57

---

## Pricing Breakdown

### Individual Prices:
- PDF (already purchased): $47
- Video Course: $97
- Starter Kit: $57
- **If bought separately:** $201 total

### Bundle Offer:
- PDF (already purchased): $47
- Video + Kit together: $127
- **Total today:** $174
- **You save:** $27

### Conversion Math:
EUR pricing (for tracking):
- PDF: €38.07
- Video: €78.74
- Kit: €46.27
- Bundle: €103.09

---

## Success Metrics (What We're Testing)

### Video Course:
- **25%+ take video** = Strong demand → Find JV partner, build it
- **15-24% take video** = Medium demand → Maybe lower price or improve copy
- **<15% take video** = Weak demand → Skip, focus on PDF + kit only

### Starter Kit:
- **20%+ take kit** = Strong demand → Order 30-50 to fulfill, then scale
- **10-19% take kit** = Medium demand → Test pricing
- **<10% take kit** = Weak demand → Skip physical product

### Bundle:
- **If 30%+ take bundle** = Bundle psychology working, keep it
- **If <10% take bundle** = Bundle too expensive, separate offers work better

---

## Next Steps (In Order)

1. ✅ Document today's context (this file)
2. 🔄 Draft upsell page copy
3. ⏳ Review copy with Luka
4. ⏳ Build `/upsell` route (separate from main)
5. ⏳ Build `/complete` thank you page
6. ⏳ Set up Stripe payment links for video/kit/bundle
7. ⏳ Implement tracking on `/complete`
8. ⏳ Test funnel end-to-end
9. ⏳ Launch to small % of traffic
10. ⏳ Measure results after 20-30 purchases

---

## Current Status Summary

**What's working:**
- Main funnel: 33% checkout CR, 71% payment success, profitable
- 28 students enrolled (27 successful payments)
- €38.07 per sale (~$47 USD converted)

**What's being tested:**
- PayPal + Google Pay (just added today, expect 5-10% improvement in payment success)
- Recovery emails sent to 3 failed customers

**What's next:**
- Test upsell demand (video + kit)
- Find JV partner if video validates
- Source kits if physical product validates
- Scale what works, kill what doesn't

**Risk mitigation:**
- Separate test funnel (don't mess with what works)
- Sell before building (validate with real money)
- 30-day refunds (manage expectations, low risk for customers)
- Honest positioning ("reserve spot" for video, "pre-order" for kit)

---

## Files Created Today

1. `/Users/luka/Documents/coding/kintsugi-course/landing/payment-failure-analysis.md`
2. `/Users/luka/Documents/coding/kintsugi-course/landing/black-friday-plan.md`
3. `/Users/luka/Documents/Obsidian Vault/claude_projects/projects/active/client-acquisition-2025/hobby_courses_sprint/kintsugi_jv_partner_hunt.md`
4. `/Users/luka/Documents/coding/kintsugi-course/landing/upsell-funnel-plan.md` (this file)

---

**Status:** Ready to draft upsell page copy ✅
