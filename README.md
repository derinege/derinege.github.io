# derinege.github.io

Personal site of Derin Ege Evren: DWH consultant at Komtaş, AI & ML engineer.
Plain HTML, CSS and JavaScript. No framework, no build step.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Home page. The sidebar and the About text are static HTML. |
| `js/content.js` | **All list content**: experience, projects, writing, skills, education. Edit this first. |
| `js/app.js` | Renders `content.js` into the page, project filters, scroll-spy nav, reveal animation. |
| `js/theme.js` | Light/dark toggle shared by every page. |
| `css/styles.css` | All styles, including the article pages. |
| `writing/*.html` | One page per piece of writing. |
| `assets/` | PDFs, favicon. |

## Editing content

- **Add or hide a project**: edit `projects` in `js/content.js`. Entries with `published: false` stay hidden; flip to `true` to show them. Fields: `title`, `category` (`data`, `ml`, `apps`, `hardware`, `games`), `year`, `repo`, `url`, `metric`, `description`, `tags`, `featured`.
- **Add a piece of writing**: add an entry to `writing` in `js/content.js` and create a page under `writing/` (copy an existing one).
- **Change the sidebar or About text**: edit `index.html` directly.

## Run locally

```bash
python3 -m http.server 8765
```

Then open <http://localhost:8765>.

## Deploy

The site is static, so GitHub Pages serves it as-is from the repository root
(`Settings → Pages → Deploy from branch → main / root`). The `.nojekyll` file
keeps GitHub from running Jekyll on it.
