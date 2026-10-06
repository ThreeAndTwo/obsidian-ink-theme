# ink

[ThreeAndTwo](https://github.com/ThreeAndTwo) 制作的 Obsidian 主题。浅色暖纸、深色暖灰，配合淡点阵和常规系统字体。使用 [MIT License](LICENSE)。

[English](README.md) · [0.0.2 发布页](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/tag/0.0.2)

## 安装

**[下载 ink-0.0.2.zip](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/download/0.0.2/ink-0.0.2.zip)**

要求 Obsidian **1.8.0 或更高版本**。

1. 下载并解压主题包，得到 `ink` 文件夹，里面只有 `manifest.json` 与 `theme.css`。
2. 将 `ink` 放入笔记库的 `.obsidian/themes/`。最终路径必须是 `.obsidian/themes/ink/manifest.json` 与 `.obsidian/themes/ink/theme.css`。
3. 在 Obsidian「设置 → 外观 → 主题」中选择 **ink**，再选择浅色或深色。
4. 更新已有安装时，覆盖这两个文件，然后重新选择主题或重启 Obsidian。

安装不需要构建命令、Node.js 或社区插件。发布页也提供两个主题文件的单独下载。GitHub 自动生成的 “Source code” 是仓库快照；安装请选择上方的主题 ZIP。

`.obsidian` 是隐藏目录。macOS Finder 中可按 **Command + Shift + .** 显示；Windows 文件资源管理器中开启显示隐藏项目。安装位置是笔记库，不是应用安装目录。主题未出现时，检查是否多套了一层 `ink/ink/`。

ink 尚未上架 Obsidian 社区主题搜索，当前可通过发布包手动安装。在应用内搜索并直接安装，需要[提交社区目录并通过审核](https://docs.obsidian.md/themes/app-themes/submit-theme)。

Obsidian 社区目录读取本仓库的 manifest，并从版本号相同的 GitHub Release 安装 `manifest.json` 与 `theme.css`。社区安装与手动下载使用同一版本、同一份文件。

## 笔记内容

以下均为 ThreeAndTwo 在开发阶段提供的原始实机截图。已安装主题版本未确认，不作为 0.0.2 的验收图；未使用生成设计稿。

### Dark 深色

![真实深色 Obsidian 英文笔记正文、标题与点阵](screenshots/dark.png)

### Light 浅色：早期开发截图

![真实浅色 Obsidian 混排笔记、列表与链接](screenshots/light.png)

浅色图中的赭红行内代码属于早期设计，发布版采用中性样式。0.0.2 的新版成对 light/dark 实机截图仍待补拍。

## 样式

- 浅色暖纸、深色暖灰，支持可选淡点阵。
- 阅读列居中，正文采用常规系统字体，页面标题使用衬线；无外部字体下载。
- 链接、粗体、高亮、行内代码分别使用适合的强调样式。
- 当前逻辑编辑行以铺满内容宽度的淡虚线标识。
- 包含 Markdown、Todo、表格、引用块、图形、Canvas 和 Bases 的样式。
- Tasks 日期、优先级和查询按钮采用单色符号，优先级分别强调，原始笔记数据保留。
- 可选 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 调整；主题本身不依赖该插件。

完整、可读的 CSS 源码就是 `theme.css`。本仓库只提供主题分发、使用说明和截图；开发测试库与内部验收工具不属于安装内容。

## 使用边界与反馈

系统原生菜单、自定义字体/颜色和第三方插件会影响实际表现。Todo 的日期和 emoji 保留在笔记中。17 种任务符号用在任务描述里时也会显示为单色；普通段落与其他 emoji 的字体保持原样。原始编辑行没有插件的元数据元素，因此日期徽标与优先级配色用于阅读视图和查询结果。图形和 Bases 功能取决于实际 Obsidian 版本。当前版本尚未完成全面实机视觉验收。

遇到问题请在 [Issues](https://github.com/ThreeAndTwo/obsidian-ink-theme/issues) 提供 Obsidian/ink 版本、视图、浅色/深色模式和真实截图。

## License

[MIT](LICENSE) © 2026 ThreeAndTwo。主题 CSS 内也包含许可声明。
