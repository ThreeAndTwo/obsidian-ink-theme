---
tags:
- ink-test
cssclasses:
- paper-data
---
# 流程、时序、状态与关系图

## 流程图

```mermaid
flowchart TD
    A[记录一个想法] --> B{信息足够吗}
    B -->|是| C[整理成笔记]
    B -->|否| D[补充观察]
    D --> B
    C --> E[关联任务与资料]
    E --> F[回顾]
    class C ink-focus;
```

## 时序图

```mermaid
sequenceDiagram
    autonumber
    participant U as 用户
    participant N as 笔记
    participant D as 数据视图
    U->>N: 编辑状态
    activate N
    Note over N: 保留状态与任务属性
    N->>D: 更新属性
    deactivate N
    alt 已完成
        D-->>U: 显示完成状态
    else 仍在进行
        D-->>U: 保留待办条目
    end
```

## 状态图

```mermaid
stateDiagram-v2
    state "阅读" as Reading
    state "编辑" as Editing
    state "保存" as Saved
    [*] --> Reading
    Reading --> Editing: 开始输入
    Editing --> Saved: 保存内容
    Saved --> Reading: 返回阅读
```

## 数据关系示意

```mermaid
erDiagram
    PROJECT ||--o{ TASK : contains
    NOTE ||--o{ TASK : describes
    PROJECT {
        string title
        string status
    }
    TASK {
        string title
        date due
        boolean done
    }
    NOTE {
        string title
    }
```

## 检查点

- 节点、连线、箭头和分支标签清楚；循环没有被裁掉。
- 普通字体显示中文，聚焦示例节点有赭红边界。
- 深色下三个角色、注释、alt 首个条件和 else 条件均可读，没有黑字落在深色框上。
- 激活条不是刺眼的白条；四个序列编号的文字与徽章底色有足够反差。
- 状态转换标签使用纸面背景，文字清楚；ER 圈形基数符号保持空心。
- 阅读、实时预览以及笔记的悬浮预览中都检查同一个图形。
- `ink-focus` 只需 class 声明，由主题控制浅色/深色表面；不用写死浅色 classDef。
- ER 图是关系示意，实际可编辑数据库请打开 [[ink-17 数据库Bases]]。
