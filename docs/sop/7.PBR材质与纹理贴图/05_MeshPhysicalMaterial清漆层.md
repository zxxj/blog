---
top: 37
recommend: 1
title: 设置MeshPhysicalMaterial清漆层
description: 了解如何设置并向模型上添加清漆层,实现更真实的效果
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## MeshPhysicalMaterial 清漆层

> MeshPhysicalMaterial 和 MeshStandardMaterial 都是拥有金属度 metalness、粗糙度 roughness 属性的 PBR 材质,MeshPhysicalMaterial 是在 MeshStandardMaterial 基础上扩展出来的子类,除了继承了 MeshStandardMaterial 的金属度、粗糙度等属性,还新增了清漆.clearcoat、透光率.transmission、反射率.reflectivity、光泽.sheen、折射率.ior 等等各种用于模拟生活中不同材质的属性

## 清漆层属性.clearcoat

> 清漆层属性.clearcoat 可以用来模拟物体表面一层透明图层,就好比你在物体表面刷了一层透明清漆,喷了点水, .clearcoat 的范围 0 到 1,默认值是 0

```js
const material = new THREE.MeshPhysicalMaterial({
  clearcoat: 1.0, // 物体表面清漆层或者说透明涂层的厚度
});
```

## 清漆层粗糙度.clearcoatRoughness

> 清漆层粗糙度.clearcoatRoughness 属性表示物体表面透明涂层.clearcoat 对应的的粗糙度,.clearcoatRoughness 的范围是为 0.0 至 1.0, 默认值为 0.0

```js
const material = new THREE.MeshPhysicalMaterial({
  clearcoat: 1.0, // 物体表面清漆层或者说透明涂层的厚度
  clearcoatRoughness: 0.1, // 透明涂层表面的粗糙度
});
```

## 车外壳 PBR 材质设置

> 在设置车外壳清漆层之前,要先创建一个 MeshPhysicalMaterial 材质,并设置好环境贴图、金属度、粗糙度,属性值先根据 threejs 文档说明给一个大概的值,具体可以通过 gui 交互界面可视化调试

```js
const mesh = gltf.scene.getObjectByName('外壳01');
mesh.material = new THREE.MeshPhysicalMaterial({
  color: mesh.material.color, // 默认颜色
  metalness: 0.9, // 车外壳金属度
  roughness: 0.5, // 车外壳粗糙度
  envMap: textureCube, // 环境贴图
  envMapIntensity: 2.5, // 环境贴图对Mesh表面影响程度
});
```

## 车外壳油漆效果

> 车外壳油漆效果,你可以通过 PBR 材质的清漆层属性.clearcoat 和清漆层粗糙度.clearcoatRoughness 属性模拟

```js
const mesh = gltf.scene.getObjectByName('外壳01');
mesh.material = new THREE.MeshPhysicalMaterial({
  color: mesh.material.color, // 默认颜色
  metalness: 0.9, // 车外壳金属度
  roughness: 0.5, // 车外壳粗糙度
  envMap: textureCube, // 环境贴图
  envMapIntensity: 2.5, // 环境贴图对Mesh表面影响程度
  clearcoat: 1.0, // 物体表面清漆层或者说透明涂层的厚度
  clearcoatRoughness: 0.1, // 透明涂层表面的粗糙度
});
```

## 效果

<video src="../../public/threejs/设置清漆层与透光率.mp4" controls></video>
