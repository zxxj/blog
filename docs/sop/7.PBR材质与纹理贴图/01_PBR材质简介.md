---
top: 41
recommend: 1
title: 什么是PBR材质?
description:
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## PBR 材质简介

**本文章没有具体的代码,就是科普一下 PBR 材质,所谓 PBR 就是基于物理的渲染**

**threejs 提供了两个 PBR 材质相关的 API, MeshStandardMaterial 和 MeshPhysicalMaterial**

**MeshPhysicalMaterial 是 MeshStandardMaterial 扩展的子类,提供了更多的功能和属性**

## 光照模型

> 如果你有初高中最基本的物理光学知识,应该有折射、镜面反射、漫反射等基本光学概念,对于实际生活中的光学问题,three.js 会提供一些的光照模型来模拟物体表面的光照,光照模型就一种模拟光照的计算方法,MeshPhysicalMaterial 和 MeshLambertMaterial 一样都是渲染网格模型的材质,但是他们用的光照模型不同,具体点说就是材质模拟 Mesh 反射光照的代码算法不同,算法不同,自然模拟光照的真实程度也不同

> 如果你想深入研究光照模型,可以学习下原生 WebGL 或 WebGPU,或者看看计算机图形学相关书籍,使用 threejs 的大部分情况,用不着你自己实现光照模型算法,毕竟 threejs 通过网格模型材质帮你实现了

## 网格模型材质整体回顾

![](../../public/threejs/网格材质.svg)

- MeshLambertMaterial: Lambert 光照模型(漫反射)
- MeshPhongMaterial：Phong 光照模型(漫反射、高光反射)
- MeshStandardMaterial 和 MeshPhysicalMaterial：基于物理的光照模型(微平面理论、能量守恒、菲涅尔反射...)

**PBR 材质相比 MeshLambertMaterial 和 MeshPhongMaterial 可以提供更逼真的、更接近生活中的材质效果,当然也会占用更多的电脑硬件资源**

## 渲染占用资源和表现能力

> 整体上来看,就是渲染表现能力越强,占用的计算机硬件资源更多

- 占用渲染资源 MeshBasicMaterial < MeshLambertMaterial < MeshPhongMaterial < MeshStandardMaterial < MeshPhysicalMaterial
- 渲染表现能力 MeshBasicMaterial < MeshLambertMaterial < MeshPhongMaterial < MeshStandardMaterial < MeshPhysicalMaterial
