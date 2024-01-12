---
top: 35
recommend: 1
title: threejs生成的canvas画布布局
description: 了解threejs的canvas画布如何布局
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## three.js Canvas 画布布局

## Canvas 元素是什么?

> Canvas 是 HTML 的元素之一,Canvas 元素的 CSS 布局规律和 div、img 等其它 HTML 元素相似,webgl 就是依赖于 canvas 实现,threejs 是基于 webgl 封装的,自然也要依赖 canvas,具体说就是把场景渲染到 canvas 画布上

```html
<!-- canvas元素默认是行内块元素 -->
<canvas style="background-color: #ff0000;" width="300" height="180"></canvas>
```

## threejs 渲染结果 CSS 布局

> 浏览器控制台通过元素选项查看 threejs 输出的 cnavas 画布,你可以看到 threejs 默认把 canvas 已经设置为块元素 display: block;

> 既然 three.js 渲染输出的 Canvas 画布本质上就是一个 HTML 元素,那么你布局的时候,直接使用你的前端 CSS 知识即可

## 完整代码

> index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="left">1</div>
      <div class="right">
        <div class="top">2</div>
        <div class="bottom" id="three"></div>
      </div>
    </div>

    <script type="importmap">
      {
        "imports": {
          "three": "../../build/three.module.js",
          "three/addons/": "../../examples/jsm/"
        }
      }
    </script>

    <script src="./index.js" type="module"></script>
  </body>
</html>

<style>
  * {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .container {
    display: flex;
    height: 100vh;
  }

  .container .left {
    width: 200px;
    background-color: blue;
  }

  .container .right .top {
    width: calc(100vw - 200px);
    height: 100px;
    background-color: red;
  }

  .container .right .bottom {
    height: calc(100vh - 100px);
    background-color: gray;
    width: calc(100vw - 200px);
  }
</style>
```

> index.js

```js
import * as THREE from 'three';
import Model from './model.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const width = window.innerWidth - 200;
const height = window.innerHeight - 100;

const scene = new THREE.Scene();
scene.add(Model);

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
camera.position.set(300, 300, 300);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

new OrbitControls(camera, renderer.domElement);

document.getElementById('three').appendChild(renderer.domElement);

window.onresize = () => {
  const width = window.innerWidth - 200;
  const height = window.innerHeight - 100;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
```

> model.js

```js
import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
```

## 效果

<video src="../../public/threejs/threejs生成的canvas画布布局.mp4" controls></video>
