# Sushan Sapkota

Personal portfolio for Sushan Sapkota, a mechanical engineering student at Howard University. The copy, dates, coursework, projects, and work history come from his resume. Nothing here is invented beyond layout and short labels that restate those facts.

## Run locally

```bash
npm install
npm run dev
```

Open [http://sushansapkota.com](http://sushansapkota.com) when that domain points here.

Publishing through GitHub Pages: push `main` to GitHub. The workflow in `.github/workflows/pages.yml` builds the site and deploys it. A repository named `yourname.github.io` is served at `https://yourname.github.io`. Any other repository is served at `https://yourname.github.io/repository-name`. After the domain is registered, set `sushansapkota.com` as the custom domain in the repository Pages settings and add GitHub’s A records at the registrar.

No API keys or database are required.

## Update the content

- Resume text lives in `src/lib/content.ts`.
- The Download Resume button serves `public/Sushan-Sapkota-Resume.pdf`. Replace that file to publish a new PDF. The button downloads it as `Sushan-Sapkota-Resume.pdf`.
- The portrait is `public/sushan-sapkota.jpg`. Replace that file to change the headshot. If the file is missing, the hero shows a placeholder that names this path.

## Stack

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide.
