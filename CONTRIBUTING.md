# Contributing

Use a small reproducible note when reporting a problem. Include the Obsidian and ink versions, operating system, light/dark mode, view type and relevant plugins or CSS snippets. Add a real-app screenshot when the problem is visual.

## Making changes

Edit `src/`, then run `npm run build` and `npm run check`. Include the generated root `theme.css` in the change. The build has no npm dependencies; packaging uses Python 3's standard library.

Keep changes scoped to the affected component. Preserve native keyboard focus, text selection, hidden Markdown delimiters and plugin state. Diagram selectors should stay inside `.mermaid`; they must not recolor ordinary SVG or image attachments.

## Manual checks

Use `examples/ink-test-vault/ink测试场景/` to check the affected scene in light and dark mode, Reading view, Live Preview and Source mode where applicable. Check a narrow pane as well as a normal window. Include the theme version and the actual view in screenshot captions.

For task changes, verify completion state and retained dates. For settings changes, check keyboard controls, reset, inherited values and disabled values. For layout changes, check wrapping and scrolling. Keep author-applied bold/highlight and user font settings working.

Automated checks verify source, package and sample-data contracts. Do not describe them as browser or Obsidian visual tests. Record any untested modes in the pull request.

Contributions are distributed under this repository's [MIT License](LICENSE).
