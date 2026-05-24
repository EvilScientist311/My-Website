# Phase 4 Landing Pages Manifest

## Pages created or updated

| File | URL | Layout | Hero image | Collection |
|------|-----|--------|------------|------------|
| `_pages/about.md` | `/` | single (default) | `img/labpic.jpg` overlay | — |
| `_pages/derivations.html` | `/derivations/` | archive | excerpt only | topic cards (links) |
| `_pages/derivations/quantum-mechanics.html` | `/derivations/quantum-mechanics/` | archive | `img/qm.jpg` | `publications` → `quantum-mechanics` |
| `_pages/derivations/optics.html` | `/derivations/optics/` | archive | `img/optics.jpg` | `publications` → `optics` |
| `_pages/derivations/mechanics.html` | `/derivations/mechanics/` | archive | `img/mechanics.jpg` | `publications` → `mechanics` |
| `_pages/derivations/electromagnetism.html` | `/derivations/electromagnetism/` | archive | `img/em.jpg` | `publications` → `electromagnetism` |
| `_pages/derivations/relativity.html` | `/derivations/relativity/` | archive | `img/relativity.jpg` | `publications` → `relativity` |
| `_pages/derivations/mathematics.html` | `/derivations/mathematics/` | archive | `img/maths.jpg` | `publications` → `mathematics` |
| `_pages/lab-reports.html` | `/lab-reports/` | archive | `img/quantumcomputer.webp` | `publications` → `lab-reports` |
| `_pages/data-science.html` | `/data-science/` | archive | `img/datascience.avif` | `portfolio` → `data-science` tag |
| `_pages/electrical-engineering.html` | `/electrical-engineering/` | archive | none | `portfolio` → `electrical-engineering` tag |

## Includes created

| File | Purpose |
|------|---------|
| `_includes/publications-by-category.html` | Lists `site.publications` filtered by `category` |
| `_includes/portfolio-by-tag.html` | Lists `site.portfolio` filtered by `tags` |

## Portfolio items created (collection wiring)

| File | Tag |
|------|-----|
| `_portfolio/investigating-cleo.md` | `data-science` |
| `_portfolio/benfords-law.md` | `data-science` |
| `_portfolio/load-growth-pv-hosting.md` | `electrical-engineering` |
| `_portfolio/solar-pv-mppt-converter.md` | `electrical-engineering` |

## Notes

- No `redirect_from` entries added.
- Demo template pages and collections were not removed.
- Hero images use Academic Pages `header.overlay_image` + `overlay_filter: 0.5` (paths relative to `/images/`).
