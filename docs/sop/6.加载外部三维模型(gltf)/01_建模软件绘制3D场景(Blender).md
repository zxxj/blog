---
top: 51
recommend: 1
title: 了解建模软件的作用
description: 了解建模软件的作用
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## 建模软件绘制 3D 场景(Blender)

> 这节课主要给大家科普一些三维模型创建、美术和程序员协作的相关问题

## 三维建模软件作用

> 对于简单的立方体、球体等模型,你可以通过 three.js 的几何体相关 API 快速实现,不过复杂的模型,比如一辆轿车、一栋房子、一个仓库,一般需要通过 3D 建模软件来实现

## 三维建模软件简介

> 3D 美术常用的三维建模软件,比如 Blender、3dmax、C4D、maya 等等

- Blender(轻量开源)
- 3dmax
- C4D
- maya

特殊行业项目可能涉及到行业软件,比如机械相关、建筑相关

- 机械相关：SW、UG 等
- 建筑相关：草图大师、revit

## 分工和流程

- 3D 美术：使用三维建模软件绘制 3D 模型，导出 gltf 等常见格式
- 程序：加载解析三维软件导出的三维模型

比如使用 Blender 三维建模软件导出 gltf 格式模型,然后再通过 threejs 加载三维模型
