# Phase 6 — Links & Social Metadata

## LinkedIn

| Location | Value |
|----------|-------|
| `_config.yml` → `author.linkedin` | `coreyanderson311` |
| Sidebar URL | `https://www.linkedin.com/in/coreyanderson311/` |
| `_pages/about.md` | Button links to same profile |
| `social.links` | `https://www.linkedin.com/in/coreyanderson311/` |

## Notion (portfolio external links)

| File | Title | URL |
|------|-------|-----|
| `_portfolio/investigating-cleo.md` | Investigating Cleo - A Detailed Analysis | `https://cleoinvestigation.notion.site/?pvs=4` |
| `_portfolio/benfords-law.md` | Benford's Law | `https://coreyanderson311.notion.site/Benford-s-Law-1567d56ac50c411bbd2eaf76d2439c89?pvs=4` |

Both use the `link` front-matter field so titles on `/data-science/` point directly to Notion.

## Social metadata (`_config.yml`)

| Setting | Value |
|---------|--------|
| `teaser` | `img/labpic.jpg` |
| `og_image` | `img/labpic.jpg` |
| `og_description` | Site description (YAML anchor `*description`) |
| `social.type` | `Person` |
| `social.name` | `Corey Anderson` |
| `social.links` | LinkedIn + GitHub only |
| `author.avatar` | `img/labpic.jpg` (migrated lab photo) |
| `author.github` | `EvilScientist311` |

## Home page SEO

| Field | File |
|-------|------|
| `description` | `_pages/about.md` — matches old site welcome text |

## Intentionally unset (no placeholders)

- Twitter/X, Facebook, Bluesky, ORCID, Google Scholar, email, and other author/social fields remain blank so icons do not appear.
