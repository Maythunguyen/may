# May Thu Nguyen — Portfolio

A complete black-and-orange portfolio built with Next.js App Router, TypeScript, Poppins, Motion, GSAP, and Three.js. Source delivery only: nothing has been deployed.

## Start locally

Use Node.js 20.9+ (Node 22 or 24 recommended).

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck
npm run build
npm start
```

## Add your hero image

1. Put your photo in `public/hero.jpg` (a large landscape crop works best).
2. In `lib/content.ts`, change `profile.heroImage` to `/hero.jpg`.
3. Set `profile.heroImageAlt` to a short description.
4. Adjust `.hero-image img { object-position: center 35%; }` in `app/globals.css` to position your face. There is a mobile override in the same file.

The hero is an ordinary image, not a Three.js canvas. It has a dark overlay and grayscale treatment for legible type. Remove `filter: grayscale(1)` to keep your image in colour. A dark abstract SVG placeholder is included so the project works before you add your photo.

## Make it yours

- `lib/content.ts`: projects, experience, testimonials, contact details, social links, and hero image.
- `components/portfolio.tsx`: section order, about copy, education, principles, mobile navigation, project dialogs, and testimonial controls.
- `components/scene.tsx`: small Three.js sculpture in the About section.
- `app/globals.css`: colour tokens, layouts, typography, breakpoints, and hover states.
- `app/layout.tsx`: page metadata and self-hosted Poppins weights.
- `public/`: images. The portrait and project thumbnails were retrieved from your existing portfolio. Replace as needed.

Poppins is bundled with `@fontsource/poppins`; no Google Fonts request or font API key is required. The image placeholder is decorative and therefore has empty alternative text until replaced.

## Motion ownership

- **GSAP + ScrollTrigger**: hero text entrance, image parallax, one-time section reveals, and scroll-linked typography strip. Animations are scoped and reverted on cleanup.
- **Motion for React**: mobile menu and testimonial transitions.
- **Three.js**: pointer-responsive orange torus-knot sculpture below the About section. Loaded dynamically, capped at a 1.5 device pixel ratio and approximately 30 FPS, paused when off screen or when the tab is hidden. GPU objects are disposed on unmount. A CSS fallback remains if WebGL is unavailable.

The page respects the operating system's reduced-motion preference. The hero's Pause Motion control stops GSAP and Three.js motion and removes interface transitions. No scroll hijacking, continuous testimonial autoplay, custom cursor, or splash-screen delay.

## Interactions

- Project images and titles open native accessible dialogs (Escape closes; focus returns to the opener).
- Live and source links point to the URLs in your supplied portfolio content.
- Experience rows expand with native `details`/`summary` controls.
- Testimonials use previous/next controls.
- Email opens the visitor's email application. Copy Email uses the clipboard with a mailto fallback.
- The mobile menu supports Escape and traps keyboard focus while open.

No backend, database, API keys, or contact-form service is required. The site doesn't send or store messages.

## Deploy on Vercel yourself

1. Push this directory to a Git repository.
2. In Vercel, import the repository and select **Next.js** as the framework.
3. Keep the default build command (`npm run build`) and default output directory.
4. No environment variables are needed.
5. Deploy and connect your domain if desired.

Alternatively, run `npx vercel` from this directory and follow its account/project prompts, then `npx vercel --prod` when ready.

## Content notes

The supplied personal projects, roles, and testimonial text are retained. BrainWave and iPhone May explicitly credit their JavaScript Mastery inspiration. No employment dates or unsupported performance metrics were invented. Review public descriptions and links before publishing; external live sites may change independently.

## Reference documentation

- https://nextjs.org/docs
- https://motion.dev/docs/react
- https://gsap.com/docs/v3/
- https://threejs.org/docs/

## Verification

`npm run build` and `npm run typecheck` passed during preparation. Browser-based visual and interaction QA was unavailable because the preview environment passed Vite-only flags to the Next.js dev server. Check desktop/mobile layouts and interactions locally before publishing.
