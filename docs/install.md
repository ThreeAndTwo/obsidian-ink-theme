# Install ink / 安装 ink

[English README](../README.md) · [中文说明](../README.zh-CN.md)

## Download / 下载

Use **[ink-0.0.1.zip](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/download/0.0.1/ink-0.0.1.zip)** from [Release 0.0.1](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/tag/0.0.1). GitHub's automatically generated “Source code” ZIP is for development and is not the theme installation package.

使用发布页中的 **ink-0.0.1.zip** 安装主题。“Source code” 是开发源码，不是主题安装包。

| Download | Purpose / 用途 |
| --- | --- |
| `ink-0.0.1.zip` | Theme installation folder / 主题安装文件夹 |
| `manifest.json` + `theme.css` | Individual theme files / 单独下载主题文件 |
| `ink-tests-0.0.1.zip` | Optional sample vault with the theme already included / 可选独立测试库，已包含主题 |
| `SHA256SUMS` | Integrity checksums / 文件完整性校验 |

## Install into your vault / 安装到笔记库

1. Extract the theme ZIP. Its `ink` folder contains exactly `manifest.json` and `theme.css`.
2. Locate the folder of the vault you want to theme. Open its `.obsidian` configuration folder and create `themes` if it is missing.
3. Put the extracted `ink` folder inside `themes`.
4. Open Obsidian **Settings → Appearance → Themes**, select **ink**, and select light or dark mode.

1. 解压主题包，得到 `ink` 文件夹，里面只有两个主题文件。
2. 找到要安装主题的笔记库文件夹，打开 `.obsidian` 设置目录；如果没有 `themes`，新建一个。
3. 把 `ink` 文件夹放入 `themes`。
4. 在 Obsidian「设置 → 外观 → 主题」选择 **ink**，再选择浅色或深色。

Final paths / 最终路径：

```text
your-vault/
└── .obsidian/
    └── themes/
        └── ink/
            ├── manifest.json
            └── theme.css
```

`.obsidian` is a hidden folder. macOS Finder can show hidden files with **Command + Shift + .**; on Windows, enable hidden items in File Explorer. Use the vault folder, not the application's installation folder. If ink does not appear, check for an accidental extra folder level such as `ink/ink/`, then reopen Obsidian.

`.obsidian` 是隐藏目录。macOS Finder 中可按 **Command + Shift + .** 显示；Windows 文件资源管理器中开启显示隐藏项目。应安装到笔记库，不是应用安装目录。主题未出现时，检查是否多套了一层 `ink/ink/`，然后重开 Obsidian。

Installation does not require Node.js, npm or optional plugins. For updates, replace the two files and reselect the theme. Preserve your existing vault settings.

安装不需要 Node.js、npm 或可选插件。更新时覆盖这两个文件并重新选择主题，保留现有笔记库设置。

## Optional sample vault / 可选测试库

Download [ink-tests-0.0.1.zip](https://github.com/ThreeAndTwo/obsidian-ink-theme/releases/download/0.0.1/ink-tests-0.0.1.zip), extract it, and open the extracted `ink 测试库` folder as a vault. Theme files and core-plugin configuration are included. Optional community plugins are not bundled.

下载并解压测试包，把 `ink 测试库` 作为独立笔记库打开。里面已包含主题与核心插件配置，不包含社区插件。将样例加入已有库时，只复制 `ink测试场景` 文件夹，避免覆盖已有 `.obsidian` 设置。

## Obsidian's in-app theme browser / 社区主题搜索

ink has not been listed in the community directory. Manual installation from this release works independently. Direct in-app search/installation requires submission and approval through the [official Obsidian Community directory](https://docs.obsidian.md/themes/app-themes/submit-theme), using an Obsidian account linked to the repository owner's GitHub account.

ink 尚未上架社区目录，当前可通过发布包手动安装。在 Obsidian 内搜索并直接安装，需要仓库所有者将 Obsidian 与 GitHub 账户关联，提交主题并通过审核。
