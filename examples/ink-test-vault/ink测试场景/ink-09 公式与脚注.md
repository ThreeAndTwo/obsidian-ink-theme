---
tags:
- ink-test
cssclasses:
- paper-cjk
---
# 公式与脚注

行内公式 $E = mc^2$、$a^2+b^2=c^2$ 和 $\alpha+\beta=\gamma$ 应与正文基线协调。这里有一个脚注引用[^reading]，以及另一个脚注[^detail]。

## 独立公式

$$
\int_0^1 x^2\,dx=\frac{1}{3}
$$

$$
\begin{aligned}
y &= ax+b \\
\frac{dy}{dx} &= a
\end{aligned}
$$

$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{pmatrix}
$$

## 稍宽的公式

$$
\mathcal{L}(\theta)=\sum_{i=1}^{n}\left(y_i-f_{\theta}(x_i)\right)^2+\lambda\sum_{j=1}^{m}\left|\theta_j\right|+\mu\sum_{k=1}^{p}\theta_k^2
$$

[^reading]: 普通脚注文字，含 **强调** 与 [[ink-01 中文长文]]。

[^detail]: 这是一个较长的脚注，用来检查辅助文字的字号、行距和换行。

    脚注也可以包含第二段内容。

## 检查点

- 公式没有被染成难辨认的颜色，分数、矩阵、希腊字母正常。
- 窄分栏下的宽公式局部滚动，不撑开整个笔记。
- 脚注可以跳转，返回标记可用。
