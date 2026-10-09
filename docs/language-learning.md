# INK：箭头与语言学习标注

不用 HTML，也不用安装社区插件。普通箭头直接粘贴字符；复杂标注使用 Obsidian 自带公式。

可以将本文件下载或复制到笔记库中查看。下列公式使用 Obsidian 的 MathJax，GitHub 预览可能无法完整呈现；每个示例都附有完整可复制的代码。

## 普通笔记直接复制

右箭头 →　左箭头 ←　双向 ↔　推出 ⇒　等价 ⇔　向上 ↑　向下 ↓　右上 ↗　右下 ↘

```text
→ ← ↔ ⇒ ⇐ ⇔ ↑ ↓ ↗ ↘
```

INK 的 main 分支还会把普通正文中的 `->`、`<-`、`<->`、`-->`、`<--`、`<-->` 连写为箭头。仅改变显示，保存和复制仍是原来的 ASCII 字符；代码和源码模式保持原字符。此功能尚未发布，需要安装 main 分支的 `theme.css` 与 `manifest.json`。直接粘贴 Unicode 箭头则不依赖主题。

观察 -> 理解 -> 记录

回顾 <- 阅读；思考 <-> 表达

普通短横线和尖括号也使用这一小型符号字体；字母与中文沿用原有字体。不同格式的文字之间不会连写箭头，例如把 `-` 加粗、把 `>` 保持普通格式时。

## 公式标注

复制每个示例的完整公式块。`\gram` 等简写只在带有相应定义的公式块内可用，不要只复制简写那一行。

### 带文字的长箭头

过程、变化、原因与结果。箭头会随上方说明伸长。

$$
\text{bark}\xrightarrow{\text{past tense}}\text{barked}
$$

```latex
$$
\text{bark}\xrightarrow{\text{past tense}}\text{barked}
$$
```

### 词组上方的箭头

把主干联系和下方句法标签放在同一个公式里。

$$
\def\gram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em solid currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\def\doublegram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.18em double currentColor}{\strut\text{#2}}}}
\def\dashgram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em dashed currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\overset{\text{主谓联系}}{\overrightarrow{\gram{S}{The dog}\ \doublegram{V}{barked}}}\ \dashgram{Adv}{at the mailman.}
$$

```latex
$$
\def\gram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em solid currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\def\doublegram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.18em double currentColor}{\strut\text{#2}}}}
\def\dashgram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em dashed currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\overset{\text{主谓联系}}{\overrightarrow{\gram{S}{The dog}\ \doublegram{V}{barked}}}\ \dashgram{Adv}{at the mailman.}
$$
```

### 双向箭头与下方箭头

比较词义，或给一个词组添加方向标记。

$$
\text{say}\ \overset{\text{比较}}{\longleftrightarrow}\ \text{tell}\qquad\underrightarrow{\strut\text{word order}}
$$

```latex
$$
\text{say}\ \overset{\text{比较}}{\longleftrightarrow}\ \text{tell}\qquad\underrightarrow{\strut\text{word order}}
$$
```

### 实线、双线、虚线、点线

统一词组高度和线条占位，避免 g、p、y 导致错位。

$$
\def\gram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em solid currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\def\doublegram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.18em double currentColor}{\strut\text{#2}}}}
\def\dashgram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em dashed currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\def\dotgram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em dotted currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\gram{S}{The dog}\ \doublegram{V}{barked}\ \dashgram{Adv}{at the mailman}\ \dotgram{标记}{today}
$$

```latex
$$
\def\gram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em solid currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\def\doublegram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.18em double currentColor}{\strut\text{#2}}}}
\def\dashgram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em dashed currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\def\dotgram#1#2{\underset{\style{color:var(--text-accent)}{\text{#1}}}{\style{border-bottom:0.04em dotted currentColor; padding-bottom:0.14em}{\strut\text{#2}}}}
\gram{S}{The dog}\ \doublegram{V}{barked}\ \dashgram{Adv}{at the mailman}\ \dotgram{标记}{today}
$$
```

### 大括号分组

标记句子主干、介词短语和整段结构。

$$
\overbrace{\text{The dog barked}}^{\text{句子主干}}\ \underbrace{\text{at the mailman.}}_{\text{介词短语}}
$$

```latex
$$
\overbrace{\text{The dog barked}}^{\text{句子主干}}\ \underbrace{\text{at the mailman.}}_{\text{介词短语}}
$$
```

### 词语上方与下方注释

词性、时态、释义都可以放在对应词旁。

$$
\overset{\text{过去式}}{\strut\text{barked}}\qquad\underset{\text{动词原形}}{\strut\text{bark}}
$$

```latex
$$
\overset{\text{过去式}}{\strut\text{barked}}\qquad\underset{\text{动词原形}}{\strut\text{bark}}
$$
```

### 划去错误，再写更正

把错误形式与正确形式并排保留。

$$
\cancel{\text{He go.}}\ \xrightarrow{\text{第三人称单数}}\ \text{He goes.}
$$

```latex
$$
\cancel{\text{He go.}}\ \xrightarrow{\text{第三人称单数}}\ \text{He goes.}
$$
```

### 方框标记词组

用于记录一个需要记住的搭配。

$$
\boxed{\text{bark at somebody}}
$$

```latex
$$
\boxed{\text{bark at somebody}}
$$
```

## 选择方法

- 日常记录过程：直接输入 Unicode 箭头，最简单。
- 单句分析：用词组标注和上方箭头。
- 多个词合成一组：用大括号。
- 长句拆成几条公式，公式不会像普通段落一样自然换行。

词组标签跟随 Obsidian 的 `--text-accent` 强调色，适配深浅主题；不强制使用深色下较弱的纯红。箭头和线条跟随正文颜色。

箭头只作用于当前公式，不能像画布中的连线那样任意连接两个段落。主题 CSS 也不能新增 Markdown 标注语法。

这些示例已使用 Obsidian 安装包内的 MathJax 在浏览器中验证；尚未完成 Obsidian 实机验收。句法标注是原生公式的用法，不是 INK 新增的 Markdown 语法。

来源：[Obsidian 公式文档](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax)、[MathJax 命令表](https://docs.mathjax.org/en/v3.2/input/tex/macros/index.html)、[MathJax 样式命令](https://docs.mathjax.org/en/v3.2/input/tex/extensions/html.html)。
