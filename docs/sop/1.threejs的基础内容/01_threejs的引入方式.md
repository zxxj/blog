---
sticky: 1
top: 90
recommend: 1
title: threejs的引入方式
description: 学习了脚手架中与学习时threejs的引入方式
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
tag:
  - threejs
---

## 开发环境: 脚手架中引入 threejs

> 比如采用的是 Vue + threejs 或 React + threejs 技术栈,这很简单,threejs 就是一个 js 库,直接通过 npm 命令行安装就行.

> npm 安装特定版本 three.js(注意使用哪个版本,查文档就查对应版本)

```js
// 比如安装148版本
npm install three@0.148.0 --save
```

> npm 安装后,如何引入 three.js

```js
// 引入three.js
import * as THREE from 'three';
```

> npm 安装后,如何引入 three.js 其他扩展库

> 除了 three.js 核心库以外,在 threejs 文件包中 examples/jsm 目录下,你还可以看到各种不同功能的扩展库.

> 一般来说,你项目用到那个扩展库,就引入那个,用不到就不需要引入.

```js
// 引入扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 引入扩展库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
```

```js
// 扩展库引入——旧版本,比如122, 新版本路径addons替换了examples/jsm
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
```

## 学习环境：.html 文件中直接引入 threejs

### script 标签方式引入 three.js

> 你可以像平时开发 web 前端项目一样,通过 script 标签把 three.js 当做一个 js 库引入你的项目.

> three.js 库可以在 threejs 官方文件包下面的 build 目录获取到.

```js
<script src='./build/three.js'></script>
```

```js
//随便输入一个API,测试下是否已经正常引入three.js
console.log(THREE.Scene);
```

### ES6 import 方式引入

> 给 script 标签设置 type="module",也可以在.html 文件中使用 import 方式引入 three.js.

```html
<script type="module">
  // 现在浏览器支持ES6语法,自然包括import方式引入js文件
  import * as THREE from './build/three.module.js';
</script>
```

### type="importmap"配置路径

> 学习环境中,.html 文件引入 three.js,最好的方式就是参考 threejs 官方案例,通过配置 type="importmap",实现学习环境.html 文件和 vue 或 reaact 脚手架开发环境一样的写法.这样你实际项目的开发环境复制课程源码,不用改变 threejs 引入代码.

```html
<!-- 具体路径配置,你根据自己文件目录设置,我的是课件中源码形式 -->
<script type="importmap">
  {
    "imports": {
      "three": "../../../three.js/build/three.module.js"
    }
  }
</script>

<!-- 配置type="importmap",.html文件也能和项目开发环境一样方式引入threejs -->
<script type="module">
  import * as THREE from 'three';
  // 浏览器控制台测试,是否引入成功
  console.log(THREE.Scene);
</script>
```

### type="importmap"配置——扩展库引入

> 通过配置 type="importmap",让学习环境.html 文件,也能和 vue 或 react 开发环境中一样方式方式引入 threejs 扩展库.

> 配置 addons/等价于 examples/jsm/.

```html
<script type="importmap">
  {
    "imports": {
      "three": "./three.js/build/three.module.js",
      "three/addons/": "./three.js/examples/jsm/"
    }
  }
</script>

<script type="module">
  // three/addons/路径之后对应的是three.js官方文件包`/examples/jsm/`中的js库
  // 扩展库OrbitControls.js
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  // 扩展库GLTFLoader.js
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  console.log(OrbitControls);
  console.log(GLTFLoader);
</script>
```
