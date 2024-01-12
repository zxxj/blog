---
top: 47
recommend: 1
title: 加载gltf不同文件形式(.glb)
description: 了解模型有哪几种文件格式与如何加载不同的文件格式
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

**.gltf 格式模型文件,有不同的组织形式**

- 单独.gltf 文件
- 单独.glb 文件
- .gltf + .bin + 贴图文件

> 这些不同形式的 gltf 模型,加载代码其实没啥区别

```js
// 单独.gltf文件
loader.load('../../工厂.gltf', function (gltf) {
  scene.add(gltf.scene);
});
```

## Blender 导出 gltf 不同形式

> Blender 三维建模软件,可以根据设置,以不同形式导出 gltf 模型,比如可以单独导出一个.gltf 文件,比如可以单独导出一个.glb 文件,比如可以导出形式为.gltf + .bin + 贴图多个文件

## 加载.glb 文件

> .glb 是 gltf 格式的二进制形式文件,加载方式和.gltf 没啥区别

```js
// 单独.glb文件
loader.load('../../工厂.glb', function (gltf) {
  scene.add(gltf.scene);
});
```

## 加载.gltf + .bin + 贴图文件

> gltf 模型的一些数据,是可以以单独文件形式存在的,比如纹理贴图单独存在,比如.bin 包含 gltf 的顶点数据

> 要注意的就是贴图等数据单独是一个文件的时候,注意不随随意改变子文件相对父文件 gltf 的目录,以免找不到资源

```js
// .gltf + .bin + 贴图文件
loader.load('../../工厂/工厂.gltf', function (gltf) {
  scene.add(gltf.scene);
});
```
