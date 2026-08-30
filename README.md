# The Rare Fin — Aquarium Shop Website

Next.js 14 (App Router) + Tailwind CSS. Built mobile-first.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm run start
```

## Where to edit
- `app/layout.tsx` — fonts, page metadata (title/description for SEO)
- `app/page.tsx` — order of sections on the homepage
- `components/*.tsx` — each section (Hero, SpecimenGrid, ShopInfo, Services, Testimonials, Footer, StickyCTA)
- `tailwind.config.ts` — the color palette (vitrine/ivory/brass/coral/sage) and fonts
- `app/globals.css` — the `.specimen-tag` card style and other custom effects

## Before you launch
- Replace placeholder gradients (the colored blocks) with real photos — drop images in `public/` and swap the `<div className="bg-gradient-to-br ...">` blocks for `<Image>` from `next/image`
- Replace phone number placeholders (`+9198XXXXXXXX`) in `StickyCTA.tsx` and `Footer.tsx`
- Replace owner name, address, and hours in `ShopInfo.tsx` and `Footer.tsx`
- Swap the `[ Google Map embed ]` placeholder in `ShopInfo.tsx` with a real embedded map iframe
- Update fish/plant catalog data in `SpecimenGrid.tsx` (the `specimens` array)
