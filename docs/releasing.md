# Releasing ink

1. Update `manifest.json`, `package.json`, the source version comment in `src/01-foundations.css`, `CHANGELOG.md`, and version references in the example start note and README files.
2. Run `npm run build`, `npm run check` and `npm run package`.
3. Test the changed scenes in real Obsidian and record the app/theme versions, view, OS and relevant plugins. Update the gallery with approved real-app screenshots.
4. Commit the source and root `theme.css` together.
5. Create a GitHub release whose tag is the exact manifest version, such as `1.3.8` (no `v` prefix). Upload root `manifest.json` and `theme.css` as separate release assets. The two ZIP files and `SHA256SUMS` in `dist/` can be offered as additional downloads.
6. A community-directory listing is a separate submission through the Obsidian Community directory. It needs a published GitHub repository/release and an approved screenshot; it is not created by a local build.

These steps follow [Obsidian's official theme submission guide](https://docs.obsidian.md/themes/app-themes/submit-theme). This repository's CI checks builds and packages; it does not automatically publish releases or submit the theme.
