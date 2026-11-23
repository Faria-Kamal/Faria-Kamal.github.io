# Faria Kamal — AI & Data Science Portfolio

A small, static portfolio built with plain HTML, CSS and a little JavaScript. No framework,
no package manager and no build step: every file can be served directly by GitHub Pages.

**Live site:** https://Faria-Kamal.github.io/

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home — About, Toolkit, Work, Experience, Education, Now, Contact |
| `hotel-booking-cancellation.html` | Case study 01: hotel cancellation prediction (completed coursework) |
| `online-retail-customer-analysis.html` | Case study 02: retail loyalty analysis (in progress) |
| `portfolio-website.html` | Case study 03: this site — design, mobile testing and Git workflow |

`assets/css/style.css` holds all styling, with colours and type defined as CSS variables at the
top. `assets/js/config.js` holds the approved contact details in one place. `assets/js/main.js`
handles the contents panel, contact-link rendering, the progress rail and scroll reveal.

## Run locally

Open `index.html` in a browser, or serve the folder if you have Python available:

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

## Design notes

- Sober, low-contrast palette: cool grey-green paper, slate ink and a muted sage accent.
- Serif body and display type; small monospace labels for chapter numbers and metadata.
- The normal top navigation is hidden. Navigation lives in a fixed bottom-left "+" button that
  opens a contents / scene selector with three summary tiles and seven chapter tiles.
- The story layer is deliberately quiet: a "FADE IN" title page, chapters 01–07, scene marks and
  running orders on each case study, slow reveals, and a 3px hairline progress rail.
- The "Now" section uses honest placeholders rather than invented watching/reading titles.
- Work-in-progress analysis is labelled as such. No metrics, projects or outcomes are invented.

## Mobile and accessibility

Two breakpoints: at 900px the multi-column layouts collapse to one column, and at 600px type
scales down, project cards lose their index numbers, the contents panel becomes a single column,
and the progress rail is hidden. Links are large enough to tap, images are constrained with
`max-width: 100%`, and a skip link gives keyboard users a direct route to the main content.

Every page was opened in Chromium with no console errors and scored **100 Accessibility** and
**100 Best Practices** in Lighthouse. Motion respects the visitor's reduced-motion setting.

## Publishing workflow

This repository was built one page at a time. Each meaningful change is a commit with a short
message, pushed to GitHub so the history stays readable:

1. `Add home page and shared assets`
2. `Add hotel cancellation case study`
3. `Add online retail analysis case study`
4. `Add portfolio website case study`
5. `Document the published portfolio`

GitHub Pages then serves the `main` branch from the repository root.

## Principles

- Every claim on the site traces to a CV, report, results file or repository.
- Evidence and limitations are shown alongside results.
- Contact details appear only after explicit approval.
- Free hosting, no build pipeline, no paid domain required.
