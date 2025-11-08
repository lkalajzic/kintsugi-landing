# Next Steps - Kintsugi Landing Page

## ✅ What's Done

1. **Full landing page built** - All copy from sales_page_copy.md implemented
2. **Next.js + Tailwind setup** - App Router, custom color palette, fonts
3. **Stripe integration** - Ready for Payment Links
4. **Design aesthetic** - Japanese minimalism + Etsy refined vibe
5. **Kanji elements** - Background watermarks (金, 侘寂)
6. **Responsive** - Mobile-first design
7. **Dev server running** - http://localhost:3001

## 🚀 To Launch (Estimated: 1-2 hours)

### 1. Set Up Stripe (15 min)
- [ ] Go to Stripe Dashboard
- [ ] Create product: "Kintsugi Course" - $47
- [ ] Create Payment Link
- [ ] Copy Payment Link URL
- [ ] Add to `.env.local`
- [ ] Test with test card: 4242 4242 4242 4242

**Guide:** See `STRIPE_SETUP.md`

### 2. Get Images (30-60 min)
- [ ] Generate hero image (kintsugi bowl with gold)
- [ ] Generate Master Yuki portrait
- [ ] Get 2-3 process/detail shots
- [ ] Replace placeholder divs with actual images

**Prompts:** See `IMAGE_PROMPTS.md`

**Quick option:** Use Unsplash/Pexels for now, replace with AI images later

### 3. Deploy to Vercel (15 min)
- [ ] Create GitHub repo
- [ ] Push code
- [ ] Import to Vercel
- [ ] Add Stripe env variable
- [ ] Connect kintsugiclass.com domain
- [ ] Test live site

**Guide:** See `DEPLOY.md`

### 4. Optional Polish (30 min)
- [ ] Add countdown timer (if you want scarcity)
- [ ] Add Google Analytics
- [ ] Add Meta Pixel (for retargeting later)
- [ ] Test on mobile

## 💡 Validation Phase Strategy

**You're ready to validate demand NOW - even with placeholder images.**

1. **Soft launch to test:**
   - Share link with friends: "Does this make you want to buy?"
   - Post in relevant communities (crafts, hobbies)
   - Run $20 FB/IG ad test

2. **When people buy during validation:**
   - Stripe sends receipt
   - You log their email
   - You email them: "Course ready by [date] or full refund"
   - You refund if they request

3. **If 10+ people buy at $47:**
   - Demand validated ✅
   - Find real Japanese kintsugi expert for JV
   - Build actual course
   - Deliver to early buyers

## 🎯 Saturday Speedrun Goals

**Minimum to go live:**
- ✅ Landing page (DONE)
- ⏳ Stripe connected (15 min)
- ⏳ 1-2 decent images (30 min)
- ⏳ Deployed to kintsugiclass.com (15 min)

**Total: ~1 hour to live**

**Then:**
- Polish images over next few days
- Drive traffic
- See if anyone converts

## 📁 File Structure

```
landing/
├── app/
│   ├── components/
│   │   ├── StripeButton.tsx
│   │   └── StripeButtonAlt.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (main landing page)
├── public/ (add images here)
├── .env.local (create this - add Stripe link)
├── .env.local.example
├── tailwind.config.js
├── package.json
├── README.md
├── STRIPE_SETUP.md
├── DEPLOY.md
├── IMAGE_PROMPTS.md
└── NEXT_STEPS.md (this file)
```

## 🐛 Known Issues / TODO

- [ ] Image placeholders need replacing
- [ ] Stripe Payment Link needs adding
- [ ] Domain needs connecting
- [ ] Test checkout flow end-to-end
- [ ] Mobile test on real device

## 📞 Support

Dev server running: http://localhost:3001

If stuck:
- Check `README.md` for basic setup
- Check `STRIPE_SETUP.md` for payment issues
- Check `DEPLOY.md` for deployment issues

**You're 95% done. Just need: Stripe link + images + deploy = LIVE** 🚀
