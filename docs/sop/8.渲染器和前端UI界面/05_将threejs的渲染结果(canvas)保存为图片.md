---
top: 31
recommend: 1
title: 将threejs的渲染结果(canvas)保存为图片
description: 了解如何将threejs的渲染结果(canvas)保存为图片
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## 将 threejs 的渲染结果(canvas)保存为图片

> 保存 three.js 的渲染结果,其实就是保存 three.js 生成的 canvas 画布上的图像,那么这个问题就转化为如何把 canvas 画布保存为一个图片

1. 配置 webgl 渲染器 preserveDrawingBuffer:true

```js
// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
  // 想把canvas画布上内容下载到本地,需要设置为true
  preserveDrawingBuffer: true,
});
```

2. 按钮绑定鼠标事件
   > 在页面上创建一个 按钮"下载",绑定一个鼠标单击事件,用于后面点击下载图片
   ```html
   <div id="download">下载</div>
   ```

```js
// 鼠标单击id为download的HTML元素,threejs渲染结果以图片形式下载到本地
document.getElementById('download').addEventListener('click', function () {});
```

3. 创建超链接元素 a：用于保存下载文件

```js
// 鼠标单击id为download的HTML元素,threejs渲染结果以图片形式下载到本地
document.getElementById('download').addEventListener('click',function(){
    // 创建一个超链接元素,用来下载保存数据的文件
    const link = document.createElement('a');
    // 通过超链接herf属性,设置要保存到文件中的数据
    link.href = ;
    link.download = 'threejs.png'; //下载文件名
    link.click(); // js代码触发超链接元素a的鼠标点击事件,开始下载文件到本地
})
```

4. Cavnas 方法.toDataURL()
   > Canvas 画布通过.toDataURL()方法可以获取画布上的像素信息, canvas.toDataURL("image/png");表示以 png 格式获取像素数据,可以直接赋值给超链接元素 a 的.herf 属性下载到本地

```js
const link = document.createElement('a');
// 通过超链接herf属性,设置要保存到文件中的数据
const canvas = renderer.domElement; //获取canvas对象
link.href = canvas.toDataURL('image/png');
```

> 以不同的格式获取像素信息

```js
canvas.toDataURL('image/png');
canvas.toDataURL('image/jpeg');
canvas.toDataURL('image/bmp');
```

## 完整代码

> index.html

```js
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
        <div id="downloadBtn">下载</div>
        <div class="top">2</div>
        <div id="red">红色</div>
        <div id="green">绿色</div>
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
    width: calc(100vw - 200px);
  }

  #red,
  #green,
  #downloadBtn {
    position: absolute;
    color: #fff;
    top: 75%;
    width: 50px;
    height: 30px;
    background-color: brown;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }

  #red {
    left: 50%;
  }

  #green {
    left: 57%;
  }

  #downloadBtn {
    top: 15%;
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

const renderer = new THREE.WebGLRenderer({
  //想把canvas画布上内容下载到本地，需要设置为true
  preserveDrawingBuffer: true,
});
renderer.setSize(width, height);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

new OrbitControls(camera, renderer.domElement);

document.getElementById('three').appendChild(renderer.domElement);
document.getElementById('red').addEventListener('click', () => {
  Model.material.color.set(0xff0000);
});
document.getElementById('green').addEventListener('click', () => {
  Model.material.color.set(0x00ff00);
});

// 鼠标单击id为download的HTML元素，threejs渲染结果以图片形式下载到本地
document.getElementById('downloadBtn').addEventListener('click', () => {
  const canvas = renderer.domElement;
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'threejs.png';
  link.click();
});

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

<video src="../../public/threejs/将threejs的渲染结果(canvas)保存为一张图片.mp4" controls></video>
