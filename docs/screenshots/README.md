# Real screenshot policy

The public gallery accepts original captures of the actual Obsidian application supplied by the author or captured in the app with its normal controls. All images must have a documented source and known version boundaries.

Do not add AI-generated images, design mockups, reconstructed application previews or altered layouts to the product gallery. If a real scene has not been captured, leave it pending. Do not infer an installed theme version from a filename or package version.

Current images:

- `dark-settings.png`: newly supplied original screenshot; Obsidian 1.13.7 is visible and ink is selected. The theme version is not shown.
- `dark-reading.png`: earlier supplied original screenshot, captured before 1.3.8; exact application/theme versions were not confirmed.

The files are unmodified copies, with source names, dimensions and SHA-256 in [gallery-assets.json](../gallery-assets.json). `npm run check` checks the declared asset set and file hashes; it cannot prove screenshot authenticity or inspect a running application.

See [the gallery](../gallery.md). Light-mode and other-layout captures remain pending. Capture the sample notes and include the actual version, view, font overrides and relevant plugins.

For a community-directory submission, prepare an approved current real screenshot following [Obsidian's submission guide](https://docs.obsidian.md/themes/app-themes/submit-theme).
