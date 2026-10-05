---
tags:
- ink-test
cssclasses:
- paper-cjk
---
# 边界与窄分栏

请把本页分栏到一侧，从宽窗口逐渐收窄，观察 600px、420px 附近的边距变化。然后把字号调大，测试正文、表格和链接。

## 很长的分节标题：用来检查中文标题自然换行，以及换行之后的行距是否仍然合理

正文保持自然换行。下面包含没有空格的连续英文字符串：

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789

## 较深的列表

- 第一层
    - 第二层
        - 第三层
            - 第四层
                - 第五层，内容较长时应该换行，不应遮住其他段落或复选框。

## 空状态

打开 [[ink-空白笔记]]，它是真正的空 Markdown 文件，可查看浅色和深色下的空白纸面点阵。

数据库空状态在 [[ink-项目数据库.base#故意空集]]。

## 检查点

- 长标题和连续字符串不会让整个 pane 溢出。
- 关闭可读行宽后，正文随 pane 变宽；开启后恢复居中阅读列。
- 窄分栏下表格/代码/公式局部滚动。
- 手机可用时检查工具栏、触摸复选框与键盘避让；文件不假定移动设备已通过验收。
