# Verification

The first public release is **0.0.1**. Earlier development identifiers are not public releases and are not included in the release history. Resetting the version changes its metadata and version comment, not the theme's appearance.

## Automated checks

`npm run check` checks theme and package versions, author metadata, the MIT notice, reproducible compiled CSS, release paths, documentation/image references, three original screenshot hashes, and example-vault data. The vault includes 24 numbered scenarios, 34 Markdown files, 94 wiki links and Canvas file/edge references.

`npm run package` checks the theme archive contains exactly `ink/manifest.json` and `ink/theme.css`. It also checks the example-vault ZIP contains matching theme files. The package has no local workspace state or bundled community plugins. These checks inspect files and data; they do not render Obsidian.

The compiled CSS is rebuilt from seven source modules. The version reset preserves the previous CSS declarations and changes only the version comment.

## Real screenshot boundaries

The gallery contains three unmodified originals supplied by ThreeAndTwo: dark reading, earlier light note content and supplementary dark settings. Source filenames, dimensions and SHA-256 are in [gallery-assets.json](gallery-assets.json). Generated mockups were removed from product presentation.

The reading images were supplied during development; their installed theme versions were not independently confirmed. The light image shows earlier terracotta inline code, while the release uses a neutral code treatment. The settings title shows Obsidian 1.13.7 and ink selected, but it does not show the installed theme version.

There are **no verified 0.0.1 runtime captures**. A complete visual/interaction pass and fresh paired light/dark screenshots remain pending. The native computer-use tool reported that permission was not granted. Original screenshots and code/package checks are not a substitute for a current real-app pass.

## Runtime boundaries

Tasks component styles cannot separately lay out completion metadata in raw Markdown Live Preview/Source lines. Completion dates and emoji remain in the note. OS-native menus, user font/color overrides and third-party plugin DOM changes can affect the actual result.

## Installation and publication

The installation package contains two files, with the MIT notice embedded in theme.css. The optional test-vault package includes the theme and sample notes. See [installation instructions](install.md).

A public GitHub repository and a matching-version Release make manual downloads available. Availability in Obsidian's in-app community browser requires a separate directory submission and approval. Do not claim directory publication from a successful build or GitHub release.

## References

- [Obsidian theme submission and release requirements](https://docs.obsidian.md/themes/app-themes/submit-theme)
- [Tasks component styling and view boundaries](https://publish.obsidian.md/tasks/Advanced/Styling)
- [GitHub checkout](https://github.com/actions/checkout)
- [GitHub setup-node](https://github.com/actions/setup-node)
