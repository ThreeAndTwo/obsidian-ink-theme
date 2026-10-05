# Verification

The repository contains the ink 1.3.8 source and compiled theme. The compiled CSS is byte-for-byte identical to the 1.3.8 distributable prepared before open-source packaging. Opening this repository does not change the theme's design or defaults.

## Checks performed for 1.3.8

- 135 file, variable, structure and default-palette checks passed during theme development.
- Both supplied example-vault theme copies matched the main distributable.
- The 24 numbered scenes, 34 Markdown files, 94 wiki links, 8 anchor targets, sample database, Canvas and Excalidraw data passed file/data checks.
- Compared with 1.3.7, changes were limited to three inline-code color tokens, author-applied emphasis on code, and the version identifier.
- Theme ZIP entries and SHA-256 were verified. These are source/data checks, not rendered-image measurements.

Default inline-code text/background contrast was calculated as 11.90:1 in light mode and 12.18:1 in dark mode. Highlighted code was 10.34:1 and 5.73:1 respectively. These are arithmetic over the CSS defaults; user color overrides, font rendering and subjective comfort were not measured.

## Repository checks

`npm run check` verifies metadata/version consistency, the MIT notice, reproducible CSS output, safe release paths, documentation image references, and wiki links in the sample notes. `npm run package` additionally checks the two-file theme archive and matching theme files inside the test-vault archive. GitHub Actions uses the same commands.

The public repository does not bundle extracted Obsidian application code, third-party plugins or the private development harness. Its portable checks are a smaller set and should not be confused with the historical 135 checks.

## What remains unverified

A complete real Obsidian visual/interaction pass for 1.3.8 has not been completed. There are no newly captured 1.3.8 screenshots. The gallery contains user-provided original settings and reading screenshots. The exact installed ink version in either capture has not been verified. The reading screenshot predates 1.3.8.

Previous diagram grammar, layout arithmetic and plugin source checks remain historical evidence for unchanged code. They do not establish the current installed plugin DOM, glyph appearance or runtime correctness.

Tasks component styles cannot separately lay out completion metadata in raw Markdown Live Preview/Source lines. Completion dates and emoji are retained. Actual emoji appearance depends on Unicode and system font support.

## References

- [Obsidian theme submission and release requirements](https://docs.obsidian.md/themes/app-themes/submit-theme)
- [Tasks component styling and view boundaries](https://publish.obsidian.md/tasks/Advanced/Styling)
- [Tasks date syntax](https://github.com/obsidian-tasks-group/obsidian-tasks/blob/main/docs/Getting%20Started/Dates.md)
- [MDN: font-variant-emoji](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [GitHub checkout v6](https://github.com/actions/checkout/blob/v6/README.md)
- [GitHub setup-node v6](https://github.com/actions/setup-node/blob/v6/README.md)

## Screenshot correction — 2026-10-05

Removed all 13 generated design mockups from the public repository, README and gallery after the author reported the mismatch with the installed theme. The gallery now contains only two original user-provided real Obsidian screenshots: the newly supplied dark settings window and the earlier dark English reading note.

Image source filenames and SHA-256 are recorded in `gallery-assets.json`. The originals are not cropped, recolored, reconstructed or generated. The settings screenshot shows Obsidian 1.13.7 and ink selected; it does not show the installed theme version. Light mode and the other layouts remain pending real captures.

The gallery correction changes documentation and screenshot checks only. The theme CSS and manifest are unchanged. Previous gallery/source packages containing generated mockups are superseded by the real-screenshot package.
