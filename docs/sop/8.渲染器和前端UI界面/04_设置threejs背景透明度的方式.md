---
top: 32
recommend: 1
title: 设置threejs背景透明度的方式
description: 了解如何设置threejs背景颜色的透明度~
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## 设置 threejs 背景透明度的方式

> 通过 threejs 渲染一个模型的时候,如果不希望 canvas 画布有默认的背景颜色(默认背景是黑色),也就是希望 canvas 画布完全透明,可以透过 canvas 画布看到画布后叠加的 HTML 元素图文,呈现出来一种三维模型悬浮在网页上面的效果

## .setClearAlpha()方法

> 改变背景透明度值

```js
renderer.setClearAlpha(0.0); // 设置背景颜色完全透明
```

## 背景透明 alpha: true

> 通过 Three.js 渲染器 WebGLRenderer 的 alpha 属性值设置为 true 就可以,WebGL 渲染器的 alpha 属性默认值是 false

```js
// 在构造函数参数中设置alpha属性的值
var renderer = new THREE.WebGLRenderer({
  alpha: true,
});
```

## .setClearColor()方法

> .setClearColor()方法的参数 2,可以用来设置背景颜色透明度

```js
renderer.setClearColor(0xb9d3ff, 0.4); // 设置背景颜色和透明度
```

## 效果

<video src="../../public/threejs/设置threejs背景的透明度.mp4" controls></video>
