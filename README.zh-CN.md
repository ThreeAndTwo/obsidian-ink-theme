# ink

[ThreeAndTwo](https://github.com/ThreeAndTwo) 制作的 Obsidian 主题。浅色暖纸、深色暖灰，配合淡点阵和常规系统字体，适合中文、英文与混排笔记。

[English](README.md) · [MIT License](LICENSE) · [更新记录](CHANGELOG.md)

![真实 Obsidian 深色设置截图，ink 已选中并展开外观下拉菜单](docs/screenshots/dark-settings.png)

*作者提供的原始实机截图。窗口标题可见 Obsidian 1.13.7，主题选择为 ink；截图未显示已安装主题的具体版本。*

## 真实截图

[查看实机图册](docs/gallery.md)：包括刚提供的深色设置窗口与早期英文阅读截图。图片保持原样，并注明可确认的版本信息。浅色及其他布局待实际拍摄后补充。

## 安装

要求 Obsidian **1.8.0 或更高版本**；部分新图形语法和 Bases 功能也取决于实际 Obsidian 版本。

1. 下载本仓库根目录的 `manifest.json` 与 `theme.css`，或使用 [Releases](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases) 中已发布的主题包。
2. 在笔记库内建立 `.obsidian/themes/ink/`，只放这两个文件。
3. 在「设置 → 外观 → 主题」选择 **ink**，再选择浅色或深色。
4. 覆盖旧版后，重新选择主题或重启 Obsidian。

仓库公开与进入 Obsidian 社区主题目录是两个步骤；手动安装不依赖社区目录。

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

已有库只复制 `examples/ink-test-vault/ink测试场景/`，保留文件夹名，然后打开 `ink-00 开始与验收清单.md`。独立库可以运行 `npm run package`，解压 `dist/ink-tests-1.3.8.zip` 后在 Obsidian 打开。

测试内容为样例数据；Tasks、Dataview、Excalidraw 和 Mindmap NextGen 相关场景需要各自插件，仓库不捆绑社区插件。

## 开发与验证

Node.js 20 或更高版本即可构建，无需 `npm install`。打包另需 Python 3 标准库；CI 使用 Node.js 24。

```sh
npm run check
npm run build
npm run package
```

修改 `src/` 后重建根目录 `theme.css`，源码和生成文件一起提交。打包结果位于 `dist/`，主题安装包严格只有 `manifest.json`、`theme.css`，另附独立测试包和 SHA-256。

源码、默认配色和包检查不能等同于实机视觉验收；1.3.8 尚待完整实机检查。Tasks 原文日期、系统原生菜单、逻辑行折行提示与第三方图形的边界见 [英文说明](README.md#known-boundaries) 和 [验证说明](docs/verification.md)。

## License

[MIT](LICENSE) © 2026 ThreeAndTwo。主题 CSS 内也包含许可声明。Obsidian 和各社区插件由其所有者单独分发。
