# PM Notes

A personal knowledge base for PM learning — built with Next.js. Notes live as `.md` files organized in topic folders. The app reads the folder structure and renders them as a clean, distraction-free reading experience.

## How it works

```
PM notes/
├── notes/                  ← your content lives here
│   ├── lenny-lectures/
│   │   └── finding-pmf.md
│   ├── shreyas-doshi/
│   │   └── influence.md
│   └── product-strategy/
│       └── frameworks.md
└── src/                    ← Next.js app (don't touch)
```

- Each **folder** = a topic
- Each **`.md` file** = a note
- Folder and file names (kebab-case) auto-convert to display titles
- Add frontmatter `title:` to override the auto-title

## Adding a note

1. Create a folder inside `notes/` if the topic doesn't exist
2. Create a `.md` file inside it
3. Refresh the browser — it appears automatically

**Example note:**

```markdown
---
title: Finding Product Market Fit
---

# Finding Product Market Fit

Your notes here...
```

## Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- [Next.js 16](https://nextjs.org) — App Router
- [Tailwind CSS v4](https://tailwindcss.com)
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) — prose styling
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) — markdown rendering
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — frontmatter parsing
