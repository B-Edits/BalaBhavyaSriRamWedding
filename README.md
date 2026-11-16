# Bala Bhavya & Sri Ram Wedding Invitation

This is a premium wedding invitation website built with Next.js App Router, Framer Motion, and modern CSS.

## Quick start

```bash
npm install
npm run dev
```

## Update personal details

Edit the content in `data/weddingData.js` to change:

- bride and groom names
- wedding date and venue
- family placeholders
- all event details
- gallery and local image paths

## Add your own photos

Replace the placeholder SVG files in `public/images/` with your own images.

Suggested files to replace:

- `public/images/placeholder-couple.svg`
- `public/images/placeholder-family.svg`
- `public/images/placeholder-gallery-*.svg`
- event-specific placeholder files

## Add a music track

Place your audio file at:

`public/audio/wedding-music.mp3`

If the file is missing, the player falls back gracefully and displays a message instead of breaking the page.

## Deployment

This project is ready for Vercel deployment. Make sure your Vercel project uses the root directory of this repository and runs `npm install && npm run build`.

## Notes

- All event details are intentionally kept as editable placeholders.
- Local SVG placeholders are included so the site can be previewed before personal assets are added.
- Do not replace placeholder text with invented personal information.
