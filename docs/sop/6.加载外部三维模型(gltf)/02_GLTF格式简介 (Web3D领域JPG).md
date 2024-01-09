---
top: 50
recommend: 1
title: GLTF格式简介 (Web3D领域的JPG)
description: 了解gltf 格式的重要性与GLTF 格式信息
cover: '/threejs.avis'
hiddenCover: true
author: zhangxinxin
readingTime: true
comment: true
tag:
  - threejs
---

## GLTF 格式简介 (Web3D 领域 JPG)

## gltf 格式的重要性

> GLTF 格式是新 2015 发布的三维模型格式,随着物联网、WebGL、5G 的进一步发展,会有越来越多的互联网项目 Web 端引入 3D 元素,你可以把 GLTF 格式的三维模型理解为.jpg、.png 格式的图片一样,现在的网站,图片基本是标配,对于以后的网站来说如果需要展示一个场景,使用 3D 来替换图片表达也是很正常的事情,图片有很多格式,对于三维模型自然也是如此,Web 开发的时候图片会有常用格式,对于 Web3D 开发也一样,肯定会根据需要选择一个常见的大家都熟悉的格式,随时时间的发展,GLTF 必然称为一个极为重要的标准格式

> 不仅 three.js,其它的 WebGL 三维引擎 cesium、babylonjs 都对 gltf 格式有良好的的支持

## GLTF 2.0

> Khronos Group 组织 2015 发布了 GLTF 1.0 版本,在 2017 年又发布了 GLTF2.0 的版本

> 关于 glTF 的更多介绍和信息,可以查看 github：https://github.com/KhronosGroup/glTF

## gltf 包含内容

> 相比较 obj、stl 等格式而言,.gltf 格式可以包含更多的模型信息

> .gltf 格式文件几乎可以包含所有的三维模型相关信息的数据,比如模型层级关系、PBR 材质、纹理贴图、骨骼动画、变形动画等等

## GLTF 格式信息

> 如果你有一定的前端基础,那么你对 JSON 一定不陌生,GLTF 文件就是通过 JSON 的键值对方式来表示模型信息,比如 meshes 表示网格模型信息,materials 表示材质信息...

```js
{
  "asset": {
    "version": "2.0",
  },
...
// 模型材质信息
  "materials": [
    {
      "pbrMetallicRoughness": {//PBR材质
        "baseColorFactor": [1,1,0,1],
        "metallicFactor": 0.5,//金属度
        "roughnessFactor": 1//粗糙度
      }
    }
  ],
  // 网格模型数据
  "meshes": ...
  // 纹理贴图
  "images": [
        {
            // uri指向外部图像文件
            "uri": "贴图名称.png"//图像数据也可以直接存储在.gltf文件中
        }
   ],
     "buffers": [
    // 一个buffer对应一个二进制数据块，可能是顶点位置 、顶点索引等数据
    {
      "byteLength": 840,
     //这里面的顶点数据，也快成单独以.bin文件的形式存在
      "uri": "data:application/octet-stream;base64,AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAC/.......
    }
  ],
}

```

## .bin 文件

> 有些 glTF 文件会关联一个或多个.bin 文件,.bin 文件以二进制形式存储了模型的顶点数据等信息, .bin 文件中的信息其实就是对应 gltf 文件中的 buffers 属性,buffers.bin 中的模型数据,可以存储在.gltf 文件中,也可以单独一个二进制.bin 文件

```js
"buffers": [
    {
        "byteLength": 102040,
        "uri": "文件名.bin"
    }
]
```

## 二进制.glb

> gltf 格式文件不一定就是以扩展名.gltf 结尾,.glb 就是 gltf 格式的二进制文件,比如你可以把.gltf 模型和贴图信息全部合成得到一个.glb 文件中,.glb 文件相对.gltf 文件体积更小,网络传输自然更快

## 导出 gltf

> blender：最新版本可以直接导出 gltf

> 3damx gltf 相关插件：https://github.com/BabylonJS/Exporters/releases

## Blender 导入导出 gltf 模型文件

> 你可以用 Blender 软件导出绘制好的三维模型,也可以打开和预览 gltf 格式文件模型
