# 萤火虫的窗格 / Firefly Windows

3行×4列窗格，每格3只萤火虫。光点独立闪烁，在自己的窗格中平缓游走。

## 使用

已有课堂模板：将本项目的 sketch.js 全部复制，替换你原来 sketch.js 的全部内容，然后保存并打开 p5-live-editor。

独立查看：解压后用浏览器打开 index.html。首次运行需要网络加载 p5.js。

## 作业要求

- 变量：rows、columns、位置、速度、角度。
- 数组：fireflies 保存36个对象。
- 循环：draw 中遍历数组更新和显示。
- 类：Firefly，含 constructor、update、display。
- 运动：速度累加到位置，边缘反弹。
- MFA嵌套循环：setup 和 draw 中的行列循环。

## 主要参数

- 每格数量：setup 内 i < 3。
- 速度上限：update 内的 0.9 / -0.9。
- 闪烁速度：random(0.7, 1.4)。
- 配色：background 和 display 内的 fill。

速度只做小幅随机变化，因此比每帧随机改变位置更有连续的飞行感。
