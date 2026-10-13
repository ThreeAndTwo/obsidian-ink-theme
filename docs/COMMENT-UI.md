# INK comment presentation

The approved v4 comment design now lives in `theme.css`. The theme uses the
same paper surfaces, neutral headings, compact type and quiet selection states
for the comment renderer and native margin callouts. Light mode has a small
neutral shadow; dark mode has no outer shadow. These tokens do not change the
page background, heading palette or bold emphasis color.

## Available without a plugin

Native `[!margin]` and `[!sidenote]` callouts use the updated visual hierarchy.
With `paper-margin`, Reading view pairs an ordinary paragraph and its following
callout in two columns. Live Preview retains native source order and puts
rendered callout blocks in the reserved right column. Small panes return to
source order. The native fold and edit controls remain available.

See [the native margin-note guide](MARGIN-NOTES.zh-CN.md) and
[example Markdown](examples/页边批注.md). The theme does not migrate authored
callouts into hidden comments or attach them to individual words.

## Renderer stylesheet contract

`11a-comment-ui.css` owns the `.ic-*` component presentation; the distributed
`theme.css` includes it. These classes are reserved for an explicit comment
renderer and never target native editor lines or table widgets.

| Element or state | Purpose |
| --- | --- |
| `.ic-shell > .ic-page` | Dedicated comment layout and local width container |
| `.ic-doc`, `.ic-rail`, `.ic-card` | Reading column, right rail and explanation |
| `.ic-shell.ic-minimal` | Centered single reading column with no reserved rail |
| `.ic-anchor` | Wrapping, selectable inline text associated with a comment |
| `.ic-marker` | Small gutter control |
| `.ic-active` | Selection feedback on the associated anchor, marker and card |
| `.ic-drawer` | Shared detail/list surface; `[hidden]` fully removes it |
| `.ic-shell.ic-pane-open` | Suppresses duplicate visible rail content |
| `.ic-settings-panel`, `.ic-toast` | Matching paper surfaces |

Floating surfaces use native layer variables with fallbacks. Comment controls
reset native button height and elevation. Card headings use interface type,
not section-heading fonts. Titles and bilingual metadata can wrap; inline
anchors remain ordinary inline content rather than atomic buttons.

The renderer must supply anchor and marker coordinates, rail height and card
collision handling. It must also update `aria-expanded`, `aria-controls`,
keyboard activation, focus restoration and hidden-region `inert` state.
Do not add these classes to CodeMirror source lines to substitute editor
geometry. A stylesheet cannot provide selection tracking, source mapping,
storage, undo integration or creation/editing of comments.

Theme tokens are `--pi-comment-surface`, `--pi-comment-border`,
`--pi-comment-shadow`, `--pi-comment-radius`, `--pi-comment-font-size`,
`--pi-comment-leading` and `--pi-comment-rail-width`. `--ic-*` aliases keep
the approved renderer markup compatible with this source of styling.

## Verification and current limits

The independent preview embeds the exact distributed Theme CSS. Its JavaScript
only operates on in-memory sample comments; it is not an installed Obsidian
integration. Changing the theme alone does not create the word-linked comment
interaction shown in that preview.

Checks cover light/dark palettes, long titles, small panes, selectable anchors,
button resets, disclosure/edit/navigation state, print, reduced motion and
forced colors. Existing paper, palette, content and graph source modules are
unchanged by this correction. Verification uses CSS parsing, native-shaped DOM
and numerical fixtures; browser pixels and an Obsidian runtime were not tested.
