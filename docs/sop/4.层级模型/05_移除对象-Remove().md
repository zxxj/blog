---
top: 59
recommend: 1
title: 移除对象.remove()
description: 学习Object3D.remove()方法
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

**之前说过.add()方法,比如可以通过.add()可以把模型或光源添加到场景中**

```js
group.add(mesh);
scene.add(group);
scene.add(light);
```

**.remove()方法和.add()方法是相反的,是把子对象从父对象的.children()属性中删除**

## 查看父类 Object3D 的移除方法.remove()

> 场景对象 Scene、组对象 Group、网格模型对象 Mesh 的.remove()方法都是继承自它们共同的基类(父类)Object3D

## .remove()方法使用

> .add()方法是给父对象添加一个子对象, .remove()方法是删除父对象中的一个子对象

```js
// 删除父对象group的子对象网格模型mesh1
group.remove(mesh1);

scene.remove(ambient); //移除场景中环境光
scene.remove(model); //移除场景中模型对象
```

> 通过.remove()方法删除父对象的子对象之后,可以通过浏览器控制台查看.children()属性的变化

```js
console.log('查看group的子对象', group.children);
```

## 一次移除多个子对象

```js
group.remove(mesh1, mesh2);
```
