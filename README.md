# Praveen Prashath K K | Portfolio

A personal portfolio built with React, TypeScript, Vite and Tailwind CSS v4.
Dark and light themes, a live LeetCode tracker, and an interactive Projects, Skills and Journey experience.

## Run locally

```bash
npm install
npm run dev        # development server
npm run build      # type-check and production build into dist/
npm run preview    # preview the production build
npm run lint
```

## Make it yours

| What | Where |
| --- | --- |
| **Profile picture** | Put a square photo (400×400 or larger) in `public/images/` named `profile.jpg` (`.jpeg`, `.png` and `.webp` also work). Until then a placeholder icon is shown. |
| **"Currently learning" chip** | `CURRENTLY_LEARNING` at the top of `src/components/Hero.tsx` |
| **LeetCode username** | `USERNAME` at the top of `src/components/LeetCodeTracker.tsx`. Stats load live from public APIs; if they are unreachable the last saved result, then the built-in snapshot, is shown. |
| **Projects** | The `projects` array in `src/components/Projects.tsx`. Add `url` and `repo` to a project to show its Live / Source buttons. Screenshots live in `public/images/`. |
| **Skills / Journey content** | The data blocks at the top of `src/components/Skills.tsx` and `Journey.tsx` |
| **Email, social links** | `EMAIL_B64` in `src/components/Contact.tsx` (stored base64-encoded; to change it, run `btoa('you@example.com')` in the browser console). Social links are in `src/components/siteLinks.ts`. |
| **Colours and light theme** | `src/index.css` (theme tokens and the light palette) |
| **Fonts** | Space Grotesk (headings), Inter (body), JetBrains Mono (labels). Bundled via `@fontsource`, so there are no external requests. |

## Deploy to GitHub Pages

1. Push this project to a GitHub repository (branch `main`).
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and publishes the site using `.github/workflows/deploy.yml`.

The build uses a relative base path (`base: './'`), so it works on a user site or a project sub-path.
