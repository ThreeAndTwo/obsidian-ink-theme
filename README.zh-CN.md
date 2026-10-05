# ink

[ThreeAndTwo](https://github.com/ThreeAndTwo) 制作的 Obsidian 主题。浅色暖纸、深色暖灰，配合淡点阵和常规系统字体，适合中文、英文与混排笔记。

[English](README.md) · [MIT License](LICENSE) · [更新记录](CHANGELOG.md)

## 安装 ink

**[下载 ink 0.0.1 主题包](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/download/0.0.1/ink-0.0.1.zip)** · [发布页与单独文件](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/tag/0.0.1) · [详细安装说明](docs/install.md)

要求 Obsidian **1.8.0 或更高版本**；部分新图形语法和 Bases 功能取决于实际 Obsidian 版本。

1. 下载并解压 `ink-0.0.1.zip`，得到 `ink` 文件夹，里面只有 `manifest.json` 与 `theme.css`。
2. 将该文件夹放入笔记库的 `.obsidian/themes/`。最终路径必须是 `.obsidian/themes/ink/manifest.json` 与 `.obsidian/themes/ink/theme.css`。
3. 在 Obsidian「设置 → 外观 → 主题」中选择 **ink**，再选择浅色或深色。
4. 覆盖旧版后，重新选择主题或重启 Obsidian。

安装不需要克隆源码、运行构建命令或安装社区插件。另附可选的 [测试笔记库](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/download/0.0.1/ink-tests-0.0.1.zip)。

**社区主题目录状态：** ink 尚未上架。审核通过前，请按上述步骤从 GitHub Release 手动安装；公开仓库和发布安装包不会自动使主题出现在 Obsidian 的社区主题搜索中。

## 笔记内容：dark / light

### Dark 深色阅读

![真实 Obsidian 深色英文笔记正文与点阵](docs/screenshots/dark-reading.png)

*ThreeAndTwo 在开发阶段提供的原始实机图，展示真实笔记内容；已安装主题的具体版本未确认，不作为 0.0.1 的验收图。*

### Light 浅色内容：早期截图

![真实 Obsidian 早期浅色混排笔记，包含列表、链接和行内代码](docs/screenshots/light-content-earlier.png)

*这是早期开发阶段的实机图，未验证为 0.0.1。图中的赭红行内代码与发布版的中性样式不同；新版浅色阅读图仍待实机拍摄。*

[完整图册与来源说明](docs/gallery.md)。设置窗口只作为附加说明，已退出主题主展示。图片未重绘，未用生成设计稿替代实机效果。

## 设计与设置

阅读列默认居中，宽度 680px。正文使用系统无衬线，页面主标题采用 Georgia / 宋体，代码采用等宽字体，无外部字体下载。

链接保留赭红；粗体采用墨色字重；高亮使用淡金底；行内代码使用中性底、墨色与细边界。作者给代码添加的粗体、高亮也有效。

当前编辑行采用铺满内容宽度的淡虚线，避免和引用样式混淆。打印时移除点阵和编辑提示。

可选的 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 提供行宽、行距、点阵、当前行、语义图标与对比度设置；主题不依赖该插件。Obsidian 的字体设置仍可使用。

| 笔记 `cssclasses` | 用途 |
| --- | --- |
| `paper-cjk` | 中文 18px / 1.75 |
| `paper-data` | 无衬线数据排版 |
| `paper-wide` | 1040px 阅读列 |
| `paper-full-width` | 使用 pane 可用宽度 |
| `paper-original-diagrams` | 保留 Mermaid 原始表现 |

## 测试场景

[示例库说明](examples/ink-test-vault/README.md)。包括 24 个编号场景、34 个 Markdown，以及流程/时序/状态/ER 图、图表、思维导图、Roadmap、Todo、宽表、公式、Canvas、Bases 和可编辑绘图。

已有库只复制 `examples/ink-test-vault/ink测试场景/`，保留文件夹名，然后打开 `ink-00 开始与验收清单.md`。独立测试直接下载并解压 [ink-tests-0.0.1.zip](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/download/0.0.1/ink-tests-0.0.1.zip)，在 Obsidian 中将解压后的文件夹作为笔记库打开。

测试内容为样例数据；Tasks、Dataview、Excalidraw 和 Mindmap NextGen 相关场景需要各自插件，仓库不捆绑社区插件。

## 开发与验证

Node.js 20 或更高版本即可构建，无需 `npm install`。打包另需 Python 3 标准库；CI 使用 Node.js 24。

```sh
npm run check
npm run build
npm run package
```

修改 `src/` 后重建根目录 `theme.css`，源码和生成文件一起提交。打包结果位于 `dist/`，主题安装包严格只有 `manifest.json`、`theme.css`，另附独立测试包和 SHA-256。

源码、默认配色和包检查不能等同于实机视觉验收；0.0.1 尚待完整实机检查。Tasks 原文日期、系统原生菜单、逻辑行折行提示与第三方图形的边界见 [英文说明](README.md#known-boundaries) 和 [验证说明](docs/verification.md)。

## License

[MIT](LICENSE) © 2026 ThreeAndTwo。主题 CSS 内也包含许可声明。Obsidian 和各社区插件由其所有者单独分发。
