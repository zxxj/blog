---
top: 70
recommend: 1
title: 查看threejs自带的几何体顶点
description:
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## three.js 中几何体自带的顶点结构都是基于,父类 BufferGeometry 的

> three.js 提供的矩形平面 PlaneGeometry、长方体 BoxGeometry、球体 SphereGeometry 等各种形状的几何体,他们都有一个共同的父类 BufferGeometry,这意味着这些几何体有哪些属性或方法,你可以查询文档关于 BufferGeometry 的介绍.

![](../../public/threejs/几何体Geometry.png)

## 查看几何体顶点位置和索引数据

> 可以用顶点索引 index 数据构建几何体,也可以不用,threejs 默认的大部分几何体都有三角形的顶点索引数据,具体可以通过浏览器控制台打印几何体数据查看.

```js
const geometry = new THREE.PlaneGeometry(100, 50); // 矩形平面几何体
// const geometry = new THREE.BoxGeometry(50,50,50); // 长方体

console.log('几何体', geometry);
console.log('顶点位置数据', geometry.attributes.position);
console.log('顶点索引数据', geometry.index);
```

## 材质属性.wireframe

> 线条模式渲染, 可以用来查看几何体三角形结构

```js
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  wireframe: true, //线条模式渲染mesh对应的三角形数据
});
```

## 几何体细分数

> Three.js 很多几何体都提供了细分数相关的参数,这里以矩形平面几何体 PlaneGeometry 为例介绍.

> 矩形平面几何体至少需要两个三角形拼接而成.

```js
//矩形几何体PlaneGeometry的参数3,4表示细分数，默认是1,1
const geometry = new THREE.PlaneGeometry(100, 50, 1, 1);
```

> 把一个矩形分为 2 份,每个矩形 2 个三角形,总共就是 4 个三角形

```js
const geometry = new THREE.PlaneGeometry(100, 50, 2, 1);
```

> 把一个矩形分为 4 份,每个矩形 2 个三角形,总共就是 8 个三角形

```js
const geometry = new THREE.PlaneGeometry(100, 50, 2, 2);
```

## 球体 SphereGeometry 细分数

> 球体 SphereGeometry 参数 2、3 分别代表宽、高度两个方向上的细分数,默认 32,16,具体多少以你所用版本为准.

```js
const geometry = new THREE.SphereGeometry(50, 32, 16);
```

> 如果球体细分数比较低,表面就不会那么光滑

```js
const geometry = new THREE.SphereGeometry(15, 8, 8);
```

## 三角形数量与性能

> 对于一个曲面而言,细分数越大,表面越光滑,但是三角形和顶点数量却越多.

> 几何体三角形数量或者说顶点数量直接影响 Three.js 的渲染性能,在不影响渲染效果的情况下,一般尽量越少越好
