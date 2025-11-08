# Stripe Setup Guide

## Quick Setup (5 minutes)

### 1. Create Stripe Product

1. Go to https://dashboard.stripe.com/products
2. Click "Add product"
3. Fill in:
   - **Name:** Kintsugi Course - The Art of Golden Repair
   - **Description:** Learn how to repair broken ceramics with gold from a 30-year Kyoto master
   - **Price:** $47 USD (one-time payment)
   - **Image:** Upload a kintsugi image (optional but recommended)
4. Click "Save product"

### 2. Create Payment Link

1. On the product page, scroll down to "Payment links"
2. Click "Create payment link"
3. Configure:
   - **Collect customer information:** Email address (required)
   - **After payment:** Show a confirmation page (you'll email them manually during validation)
   - **Optional:** Add custom thank you message
4. Click "Create link"
5. Copy the Payment Link URL (looks like: `https://buy.stripe.com/test_xxxxxxxxxxxxx`)

### 3. Add to Environment Variables

**For Local Development:**
1. Copy `.env.local.example` to `.env.local`
2. Paste your Payment Link:
```
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/test_xxxxxxxxxxxxx
```

**For Vercel Deployment:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` = your payment link
3. Redeploy

### 4. Test It

1. Run `bun run dev`
2. Open http://localhost:3001
3. Click "Begin Your Practice - $47"
4. Should redirect to Stripe checkout
5. Use test card: `4242 4242 4242 4242` (any future date, any CVC)

## Validation Phase Workflow

During validation (before building the actual course):

1. **When someone purchases:**
   - Stripe sends them a receipt automatically
   - You get a notification in Stripe Dashboard
   - You get an email notification (configure in Stripe settings)

2. **What you do:**
   - Log their email in a spreadsheet
   - Send them a personal email:
     ```
     Subject: Your Kintsugi Course Access

     Hi [Name],

     Thank you for joining as a founding student!

     The course is in final production and will be ready by [date].
     You'll receive access details via email.

     If you'd prefer a refund instead, just reply to this email -
     no questions asked.

     Looking forward to teaching you!

     - Emiko & Master Yuki Tanaka
     ```

3. **To refund (if needed):**
   - Go to Stripe Dashboard → Payments
   - Find the transaction
   - Click "Refund" → Full refund
   - Done (they get refunded in 5-10 days)

## After Validation (When You Build the Real Course)

1. Replace Payment Link with one that includes:
   - Webhook to automatically deliver course access
   - Integration with course platform (Teachable, Kajabi, etc.)
   - Automated email sequence

But for NOW - just use the simple Payment Link. You'll manually handle everything during validation.

## Test Mode vs Live Mode

- Stripe starts in **Test Mode** (uses test cards)
- Toggle to **Live Mode** when you're ready to accept real money
- Payment Links work in both modes
- Just make sure you're using the right mode's Payment Link

## Support

If anything breaks, Stripe has great docs: https://stripe.com/docs/payments/payment-links
