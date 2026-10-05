---
tags:
- ink-test
cssclasses:
- paper-data
---
# 数据库：Obsidian Bases

请开启原生核心插件 **Bases**。不需要 Dataview，也不是用普通 Markdown 表格冒充数据库。

数据来自 `数据/` 下的 8 篇实际 Markdown 笔记。每篇都有状态、负责人、日期、数值、列表和复选框属性。过滤器用专用标签 `ink-sample-db`，所以复制测试文件夹到已有库后也能找到测试数据。

打开 [[ink-项目数据库.base]]，切换五个视图：总表、按状态分组、卡片、未完成、故意空集。

## 可编辑总表

![[ink-项目数据库.base#总表]]

## 卡片

![[ink-项目数据库.base#卡片]]

## 内嵌 base 代码块

```base
filters:
  and:
    - file.hasTag("ink-sample-db")
    - file.ext == "md"
views:
  - type: table
    name: 内嵌状态表
    order:
      - file.name
      - note.status
      - note.due
      - note.done
```

## 故意空集

![[ink-项目数据库.base#故意空集]]

这个视图应该没有数据行，用于检查空状态；其他视图应显示数据。

## 操作与检查点

- 总表应有 8 行；初始未完成视图应有 5 行。
- 按状态分组应有“待办、进行中、已完成、搁置”四组。
- 点击编辑 status、due、estimate、done，再打开对应 Markdown 的 Properties 检查保存结果。
- 排序、筛选、列宽、分组折叠和卡片切换正常。
- 剩余工时 = estimate − spent；初始总估算 72 小时、已用 37、剩余 35。
- 图像卡片与静态 Markdown 表格是不同场景；不要只检查 [[ink-07 表格与宽表]]。

语法依据：[官方 Bases 格式](https://obsidian.md/help/bases/syntax) 与 [嵌入方式](https://obsidian.md/help/bases/create-base)。
