# Phase 7 — Cleanup & Verification Report

## 1. Demo content removed (54 items)

### Collections
| Removed | Count |
|---------|------:|
| `_publications/` demo papers | 5 |
| `_talks/` | 4 |
| `_teaching/` | 2 |
| `_posts/` | 5 |
| `_drafts/post-draft.md` | 1 |
| `_portfolio/portfolio-1.md`, `portfolio-2.html` | 2 |

### Demo downloads (`files/`)
- `bibtex1.bib`, `paper1.pdf`, `paper2.pdf`, `paper3.pdf`, `slides1.pdf`, `slides2.pdf`, `slides3.pdf`

### Demo comments
- `_data/comments/welcome-to-jekyll/`
- `_data/comments/layout-comments/`
- `_data/comments/markup-syntax-highlighting/`

## 2. Unused assets removed (27 files + themes dir)

| File | Reason |
|------|--------|
| `images/500x300.png` | Demo portfolio placeholder only |
| `images/bio-photo.jpg`, `bio-photo-2.jpg` | Template stock photos |
| `images/editing-talk.png` | Template guide screenshot |
| `images/profile.png` | Replaced by `images/img/labpic.jpg` in config |
| `images/themes/*` (14 PNGs) | Theme picker demo screenshots |
| `images/img/programming.avif` | Never referenced on old or new site |
| `images/img/work.svg` | Never referenced on old or new site |
| `images/svg/contact.svg` | Unused |
| `images/svg/lightning-fill.svg` | Unused |
| `images/svg/mortarboard.svg` | Unused |
| `images/svg/python.svg` | Unused |
| `images/svg/rocket-takeoff.svg` | Old-site header icon; not used on new site |

## 3. Link verification

| Check | Result |
|-------|--------|
| Publication `paperurl` → file on disk | 30/30 OK |
| Portfolio `paperurl` / Notion `link` | 4/4 OK |
| Nav landing page source files | 11/11 present |
| Hero `overlay_image` paths | All OK |

**External links (verified in source):**
- LinkedIn: `https://www.linkedin.com/in/coreyanderson311/`
- Notion Cleo: `https://cleoinvestigation.notion.site/?pvs=4`
- Notion Benford: `https://coreyanderson311.notion.site/Benford-s-Law-1567d56ac50c411bbd2eaf76d2439c89?pvs=4`

## 4. Collection verification

| Collection | Count | Expected |
|------------|------:|---------:|
| `publications` | 30 | 30 |
| `portfolio` | 4 | 4 |
| `talks` | 0 | 0 |
| `teaching` | 0 | 0 |
| `posts` | 0 | 0 |

**Publication categories:**
- `quantum-mechanics`: 5
- `optics`: 2
- `mechanics`: 4
- `electromagnetism`: 2
- `relativity`: 3
- `mathematics`: 7
- `lab-reports`: 7

**Portfolio tags:**
- `data-science`: 2
- `electrical-engineering`: 2

## 5. Build verification

```
bundle exec jekyll build
→ done in 1.917 seconds (exit 0)
```

**Built pages confirmed:**
- `/` (index.html)
- `/derivations/`, `/derivations/quantum-mechanics/`
- `/lab-reports/`, `/data-science/`, `/electrical-engineering/`
- `/publication/nuclear-magnetic-resonance/`
- 30 publication detail pages, 4 portfolio detail pages

## Uncertain items (kept intentionally)

| Item | Why kept |
|------|----------|
| `_pages/talks.html`, `teaching.html`, `cv.md`, `markdown.md`, `publications.html`, `portfolio.html`, `year-archive.html`, etc. | Template archive pages; not in nav but may still be reachable via sitemap/direct URL |
| `_pages/talkmap.html`, `talkmap/` | Talk map feature; empty without talks |
| `_data/cv.json` | Demo JSON CV; referenced by `/cv-json/` page |
| `markdown_generator/` | Bulk-import tooling; not served at runtime |
| `images/favicon.ico` | Duplicate of SVG/PNG favicon set; may be used by older browsers |
| `PHASE*.md` manifests | Migration documentation |

## Not deleted (out of scope)

- EvilScientist Website source repo (read-only per prior phases)
- Empty `_talks/`, `_teaching/`, `_posts/`, `_drafts/` directories (harmless)
