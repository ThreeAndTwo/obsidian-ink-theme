---
tags:
- ink-test
cssclasses:
- paper-cjk
---
# 代码与语法

行内代码：`const theme = "ink"`，包含中文 `主题名称` 和数字 `2026`。

`paper-cjk` 明确指定中文 18px / 1.75；默认英文笔记遵循全局字号设置。

混排比较：普通内容、`代码内容`、**重点内容**。English text beside `inline code` and `0123456789`.

主动强调代码：**`bold inline code`**，==`highlighted inline code`==。代码的基本样式保持中性，作者的粗体和高亮仍有效。

## JavaScript

```js
// 这段代码只是显示样例，不会自动执行。
const theme = { name: "ink", author: "ThreeAndTwo" };
function describeTheme(enabled = true) {
  if (!enabled) return "Default";
  return `${theme.name} by ${theme.author}`;
}
console.log(describeTheme());
```

## Python

```python
from dataclasses import dataclass

@dataclass
class Note:
    title: str
    completed: bool = False

notes = [Note("阅读"), Note("编辑", completed=True)]
for note in notes:
    print(note.title, note.completed)
```

## JSON 和 YAML

```json
{
  "name": "ink",
  "author": "ThreeAndTwo",
  "enabled": true,
  "width": 680,
  "features": ["reading", "editing", "tables"]
}
```

```yaml
title: 测试笔记
status: 进行中
done: false
due: 2026-10-07
tags:
  - ink-test
```

## 长代码行与无语言代码

```text
This_is_a_deliberately_long_code_line_for_local_horizontal_scrolling_0123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz_0123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz_0123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz
```

```
普通代码块，没有语言标识。
第二行。
```

## 检查点

- 等宽字体可读，语法颜色克制；代码背景与纸面有区别。
- 复制、选中代码正常；长代码行局部滚动。
- 阅读和实时预览中的代码大小接近；源码标题保持正常代码字号。
- 行内代码有淡灰底、墨色和中性细边框；赭红保留给链接，重要结论和高亮有各自层级。块级代码仍采用原有颜色和字号。
- 阅读与实时预览中，粗体代码保持粗体；高亮代码显示金色底，不能被普通代码底色盖住。搜索匹配仍采用原生样式。
- 编辑多个或连续的行内代码，检查反引号、空格、选区和光标；隐藏的反引号不被新字号规则重新显示。
