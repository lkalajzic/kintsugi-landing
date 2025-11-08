# Kintsugi Landing Page

Landing page for kintsugiclass.com

## Setup

1. Install dependencies:
```bash
bun install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Set up Stripe:
   - Go to Stripe Dashboard
   - Create a new Product: "Kintsugi Course" - $47
   - Create a Payment Link for this product
   - Copy the Payment Link URL
   - Add it to `.env.local` as `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`

4. Run dev server:
```bash
bun run dev
```

5. Open http://localhost:3001 (or whatever port is shown)

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variable: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
4. Connect custom domain: kintsugiclass.com
5. Deploy!

## Todo

- [ ] Replace image placeholders with actual images
- [ ] Test Stripe checkout flow
- [ ] Add countdown timer (optional)
- [ ] Add analytics (optional)
