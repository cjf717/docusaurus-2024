---
title: 数学公式，KaTeX 語法
date: 2024-05-10 09:00:00
katex: true
categories: math
tags: 
- KaTeX
---


数学符号
<!-- truncate -->
`$\overline{abc}$`

```
$$
a^2 + b^2 = c^2 \\
e=mc^2
$$
```

```
$$
\begin{cases}
x=\rho\cos\theta \\
y=\rho\sin\theta \\
\end{cases}
$$
```

```
$$
I = \int_0^{2\pi} \sin(x)\,dx
$$
```
```
Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.
```