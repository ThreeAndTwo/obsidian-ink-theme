# ink

A warm paper-inspired Obsidian theme by [ThreeAndTwo](https://github.com/ThreeAndTwo), available under the [MIT License](LICENSE).

[中文说明](README.zh-CN.md) · [Release 0.0.3](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/tag/0.0.3)

## Install

**[Download ink-0.0.3.zip](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/download/0.0.3/ink-0.0.3.zip)**

Requires Obsidian **1.8.0 or later**.

1. Download and extract the theme ZIP. Its `ink` folder contains only `manifest.json` and `theme.css`.
2. Put that folder in your vault's `.obsidian/themes/` directory. The final paths must be `.obsidian/themes/ink/manifest.json` and `.obsidian/themes/ink/theme.css`.
3. In Obsidian, open **Settings → Appearance → Themes**, select **ink**, and choose light or dark mode.
4. When updating an existing installation, replace those two files and reselect the theme or restart Obsidian.

No build command, Node.js or community plugin is needed to install the theme. You can also download `manifest.json` and `theme.css` individually from the release. GitHub's automatic “Source code” downloads are repository snapshots; use the named theme ZIP for installation.

`.obsidian` is hidden. In macOS Finder, press **Command + Shift + .** to show hidden files; on Windows, enable hidden items in File Explorer. Install into the vault folder, not the application's installation folder. If ink does not appear, check for an extra folder level such as `ink/ink/`.

ink has not been listed in Obsidian's community theme browser. Manual installation from this release is available. In-app search and installation require [community-directory submission and approval](https://docs.obsidian.md/themes/app-themes/submit-theme).

## Note content

These are original screenshots supplied by ThreeAndTwo during development. Their exact installed theme versions were not confirmed; they are not verified 0.0.3 acceptance screenshots. No generated mockups are used.

### Dark

![Original dark Obsidian note with English paragraphs, headings and the dotted background](screenshots/dark.png)

### Light — earlier development capture

![Original earlier light Obsidian note with mixed text, a list and links](screenshots/light.png)

The light image shows an earlier terracotta inline-code style. The release uses neutral inline code. Fresh paired light/dark captures for 0.0.3 are still pending.

## Features

- Warm light and dark palettes with a subtle optional dot grid.
- Centered reading, readable system body fonts and serif page titles; no external font downloads.
- Distinct links, bold text, highlights and neutral inline code.
- A full-width dotted baseline for the current logical editing line.
- Markdown, tasks, tables, callouts, diagrams, Canvas and Bases styles.
- Monochrome Tasks metadata and query actions, readable dates and distinct priority levels; task data stays unchanged.
- Optional [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) customization; the theme works without the plugin.

The readable CSS source is `theme.css`. This repository contains the theme distribution, documentation and screenshots; development fixtures and internal verification tools are not needed for installation.

## Boundaries and feedback

OS-native menus, user fonts/colors and third-party plugins can affect the result. Task dates and emoji remain in the note. The 17 supported task symbols also change when used inside a task description; ordinary paragraphs and unrelated emoji keep their fonts. Raw editing views lack the plugin's metadata spans, so component badges and priority colors apply to Reading/query results. Diagram and Bases features depend on the installed Obsidian version. A complete current-version real-app visual pass remains pending.

Report problems in [Issues](https://github.com/ThreeAndTwo/obsidian-ink-theme/issues) with the Obsidian/ink versions, view, light/dark mode and a real screenshot.

## License

[MIT](LICENSE) © 2026 ThreeAndTwo. The distributable `theme.css` also contains the license notice.
