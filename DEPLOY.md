# Deployment Guide

## Deploy to Vercel (10 minutes)

### 1. Initialize Git & Push to GitHub

```bash
cd /Users/luka/Documents/coding/kintsugi-course/landing
git init
git add .
git commit -m "Initial commit - Kintsugi landing page"

# Create repo on GitHub first, then:
git remote add origin https://github.com/your-username/kintsugi-landing.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repo
4. Configure:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `bun run build` (or leave default)
   - **Output Directory:** `.next` (default)

5. Add Environment Variable:
   - Key: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
   - Value: Your Stripe Payment Link URL

6. Click "Deploy"

### 3. Connect Custom Domain

1. Go to Project Settings → Domains
2. Add domain: `kintsugiclass.com`
3. Vercel will give you DNS records to add
4. Go to your domain registrar (where you bought kintsugiclass.com)
5. Add the DNS records Vercel provides:
   - Type: `A` → Value: `76.76.21.21`
   - Type: `CNAME` → Value: `cname.vercel-dns.com`
6. Wait 5-60 minutes for DNS propagation
7. Done!

### 4. Test Live Site

1. Visit https://kintsugiclass.com
2. Click through the page
3. Test the Stripe checkout button
4. Use test card if in Stripe test mode: `4242 4242 4242 4242`

### 5. Switch to Live Mode (When Ready)

1. In Stripe: Toggle from Test Mode → Live Mode
2. Create a new Payment Link in Live Mode
3. Update Vercel environment variable with new live Payment Link
4. Redeploy (or just restart)

## Quick Redeploy

After making changes:
```bash
git add .
git commit -m "Update copy"
git push
```

Vercel auto-deploys on push. Takes ~2 minutes.

## Troubleshooting

**"Page not loading"**
- Check Vercel deployment logs
- Make sure build succeeded

**"Stripe button doesn't work"**
- Check environment variable is set in Vercel
- Make sure it starts with `https://buy.stripe.com/`

**"Domain not working"**
- DNS can take up to 24 hours (usually 5-60 min)
- Check DNS settings in your registrar
- Use `dig kintsugiclass.com` to check DNS propagation

## Current Status

- ✅ Local dev server running at http://localhost:3001
- ⏳ Needs: Stripe Payment Link in `.env.local`
- ⏳ Needs: GitHub repo created
- ⏳ Needs: Vercel deployment
- ⏳ Needs: Domain connected
