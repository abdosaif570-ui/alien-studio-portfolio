# Alien Studio Portfolio

A clean, dark, agency-style portfolio website for Alien Studio.

## Open it
Double-click `index.html`, or open the folder in VS Code and use Live Server.

## Where to edit
- `index.html` → text, sections, contact details.
- `styles.css` → colors, typography, layout.
- `script.js` → all portfolio video links and project names.
- `assets/images/` → logo and studio photos.

## Adding real videos
The current 41 portfolio items use the Facebook share links supplied for the project. They open in a new tab because Facebook share URLs are not reliable native video sources for a standalone HTML `<video>` player.

For videos you own, upload MP4 files to:
`assets/videos/`

Then you can change an item in `script.js` to point to a local file, e.g.:
`assets/videos/project-01.mp4`

For a production site with many videos, use a video CDN/object storage rather than putting dozens of large MP4s directly into the web hosting package.

## Replace these placeholders before publishing
- `hello@alienstudio.eg`
- Instagram URL
- Any client names that need official logos
- Project titles
- Exact address / phone / WhatsApp

## Suggested next upgrade
Connect the portfolio to a CMS or simple JSON data source so new projects can be added without editing the HTML.
