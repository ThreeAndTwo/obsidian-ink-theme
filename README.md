# ink

A warm paper-inspired Obsidian theme by [ThreeAndTwo](https://github.com/ThreeAndTwo). Quiet dotted backgrounds, readable system fonts, and distinct styles for the things that matter in a note.

[中文说明](README.zh-CN.md) · [MIT License](LICENSE) · [Changelog](CHANGELOG.md)

![Real Obsidian dark settings screenshot with ink selected and the appearance dropdown open](docs/screenshots/dark-settings.png)

*Original screenshot supplied by the author. Obsidian 1.13.7 is visible in the window title and ink is selected. The exact installed theme version is not shown.*

## Design

- Warm paper in light mode and warm charcoal in dark mode, with a subtle optional dot grid.
- Centered 680px reading column, system sans-serif body text and serif page titles. No font downloads.
- Terracotta links, bold ink text, muted gold highlights and neutral inline-code badges.
- A thin dotted baseline identifies the current editing line without a quotation-style rail.
- Styles for Markdown, properties, tasks, tables, callouts, Mermaid diagrams, Canvas and Bases.
- Responsive spacing, reduced-motion rules and a print layout without the paper pattern.

## Real screenshots

[View the screenshot gallery](docs/gallery.md) for the actual dark settings window and an earlier English reading capture. Images are retained exactly as supplied, with their version boundaries noted. Light-mode and other layout screenshots will be added after real captures are available.

## Install

Requires Obsidian **1.8.0 or later**. Newer diagram syntax and Bases also depend on the installed Obsidian version.

1. Download `manifest.json` and `theme.css` from this repository, or use a theme ZIP from [Releases](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases) when available.
2. Create `<vault>/.obsidian/themes/ink/` and place **only those two files** inside it.
3. Open **Settings → Appearance → Themes** and select **ink**.
4. Choose light or dark mode. When replacing an older ink installation, reload Obsidian or reselect the theme.

Community-directory availability is separate from publishing this repository. Manual installation works without a directory listing.

## Customize

Obsidian's font settings remain available. [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) is optional; the theme works without it. It exposes reading width, line height, contrast, dots, navigation icons and the current-line indicator.

Use a note's `cssclasses` property for these presets:

| Class | Effect |
| --- | --- |
| `paper-cjk` | Chinese reading defaults: 18px / 1.75 |
| `paper-data` | Sans-serif data presentation |
| `paper-wide` | 1040px reading column |
| `paper-full-width` | Use the available pane width |
| `paper-original-diagrams` | Preserve Mermaid's original styling |

## Try the examples

[The example vault](examples/ink-test-vault/README.md) includes 24 numbered scenarios and 34 Markdown files, plus Mermaid, Canvas, Bases and editable Excalidraw examples. All note data is sample content.

Copy only `examples/ink-test-vault/ink测试场景/` into an existing vault, keeping that folder name. Start with `ink-00 开始与验收清单.md`. For a separate test vault with the theme included, run `npm run package` and extract `dist/ink-tests-1.3.8.zip`.

Tasks, Dataview, Excalidraw and Mindmap NextGen examples require their respective optional plugins. Community plugins are not bundled.

## Develop

The build uses Node.js 20 or later and no npm dependencies. Packaging additionally needs Python 3 with its standard library. Node.js 24 is configured for CI.

```sh
npm run check
npm run build
npm run package
```

Edit the seven CSS modules in `src/`, then rebuild the root `theme.css`. Commit the source and generated CSS together. `check` verifies that the generated file matches its source, along with metadata, license, example-file references and distributable paths. `package` creates the two-file theme ZIP, a test-vault ZIP and SHA-256 checksums in `dist/`.

See [Contributing](CONTRIBUTING.md), [verification notes](docs/verification.md) and the [release checklist](docs/releasing.md).

## Known boundaries

- CSS cannot replace operating-system-rendered menus. Obsidian's native-menu setting controls which menu renderer is used.
- Completed task dates and emoji are retained. Tasks component styling applies to rendered components; raw Markdown dates in Live Preview and Source mode remain editable text.
- The editing baseline follows a logical Markdown line, including its wrapped content, rather than an individual visual row.
- Embedded images, author-specified diagram `!important` declarations and third-party plugin changes can require separate adjustments.
- Automated source and package checks do not establish visual or interaction correctness. Version 1.3.8 still needs a complete real-app visual pass.

## License

[MIT](LICENSE) © 2026 ThreeAndTwo. The distributable `theme.css` also carries the license notice. Obsidian and optional plugins are distributed separately by their respective owners.
