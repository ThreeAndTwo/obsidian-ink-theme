---
tags:
- ink-test
cssclasses:
- paper-cjk
---
# 可选插件测试

这一页需要对应社区插件。主题不会自动安装它们，独立测试库也没有附插件代码。

## Dataview 数据表

启用 Dataview 后，下面的查询会使用与 Bases 相同的 8 条数据。

```dataview
TABLE status AS "状态", owner AS "负责人", due AS "日期", estimate AS "估算", spent AS "已用"
FROM #ink-sample-db
SORT due ASC
```

```dataview
LIST
FROM #ink-sample-db
WHERE done = false
SORT file.name ASC
```

## Tasks 查询

启用 Tasks 后可以解析这些日期和标签。符号属于插件的任务语法。

- [ ] 检查普通弹窗下拉框 📅 2026-10-07 #ink-test-task
- [ ] 检查深色代码块 📅 2026-10-08 #ink-test-task
- [x] 准备示例文件 ✅ 2026-10-04 #ink-test-task
- [x] 已完成项中的 `paper-cjk` 和 **重点说明** ✅ 2026-10-05 #ink-test-task

```tasks
not done
tags include #ink-test-task
sort by due
```

下面用于检查完成记录的展示；保留日期、来源与任务操作，不写隐藏日期的查询指令。

```tasks
done
tags include #ink-test-task
sort by done reverse
```

- 阅读视图和 Tasks 查询：完成日期显示为小号辅助信息，有淡底和边界；图标变为灰度，正文保持可读。
- 单条完成日期不被断开；窄窗可以把完整日期标记换到下一行。
- 完成日期与 emoji 的原始 Markdown 保留，插件继续自动追加、查询、排序、撤销完成及重复任务。
- Tasks 的元数据 span 不用于原文实时预览/源码。原文日期仍完整可编辑；支持 text emoji 的内核/字体会采用文字表现，不保证每个平台都有对应字形。

## Excalidraw

启用 Excalidraw 后打开 [[ink-可编辑绘图.excalidraw.md]]。在插件中实际移动矩形、编辑文字、拖动箭头，并查看插件设置弹窗的控件。

## Mindmap NextGen 设置弹窗

已经启用这个插件时，用它打开一篇笔记的思维导图设置弹窗，切换「全局 / 文件 / 代码块」三个设置层级。

- 「全局」与「文件」页：设置名称、分组标题和描述的左边缘一致，切换层级不会让名称整体向右移。
- 标签按钮靠左排列；与第一个设置项之间有留白，关闭按钮不被按钮覆盖且可独立点击。
- 正常长表单限制在屏幕内，上下滚动时标签栏保持插件原有的吸顶行为。
- 从文件级弹窗打开「代码块」说明页：这是插件原有的提示页，不应出现整屏空白高度；切回长表单后恢复可滚动高度。
- 文件级继承设置仍可辨认。修改一项产生覆盖后，检查靠近值控件的重置按钮；重置应恢复继承值，按钮不能丢失。
- 若打开的是具体代码块的设置弹窗，其「代码块」页应仍显示真正的设置表单；它与上面的提示页不同。
- 将设置面板本身缩窄，名称与描述保持左对齐；重置和值控件换到下一排，按钮、下拉和开关不越界。
- 切换 light / dark，检查下拉、开关、数字输入、颜色控件、说明及键盘 Tab 焦点；插件原有禁用状态照常。

## 检查点

- 未启用插件时看到代码/数据是正常情况；原生场景不依赖这一页。
- Dataview 查询表与 Bases 都读取真实 Markdown 属性，内容应对应。
- Tasks 中完成/未完成、日期、嵌套和查询结果清楚；从查询勾选/撤销后，原始日期数据按插件行为更新。
- 社区插件自有绘图内容与原生主题的覆盖范围有所区别。

插件语法依据：[Dataview](https://blacksmithgu.github.io/obsidian-dataview/queries/query-types/)、[Tasks](https://publish.obsidian.md/tasks/Queries/Filters)、[Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)、[Mindmap NextGen](https://github.com/james-tindal/obsidian-mindmap-nextgen)。
