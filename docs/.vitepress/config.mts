import { defineConfig } from 'vitepress';

// 导入主题的配置
import { blogTheme } from './blog-theme';

// Vitepress 默认配置
export default defineConfig({
  base: '/blog/',
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'zhangxinxin',
  description: '',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  themeConfig: {
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'threejs',
        items: [
          {
            text: 'threejs的基础内容',
            link: '/sop/1.threejs的基础内容/index.md',
          },
          {
            text: '几何体BufferGeometry',
            link: '/sop/2.几何体BufferGeometry/index.md',
          },
          {
            text: '模型对象与材质对象',
            link: '/sop/3.模型对象与材质对象/index.md',
          },
          {
            text: '层级模型',
            link: '/sop/4.层级模型/index.md',
          },
          {
            text: '理解几何体顶点UV坐标与设置纹理贴图',
            link: '/sop/5.几何体顶点UV坐标与纹理贴图/index.md',
          },
          {
            text: '加载外部三维模型(gltf)',
            link: '/sop/6.加载外部三维模型(gltf)/index.md',
          },
          {
            text: 'PBR材质与纹理贴图',
            link: '/sop/7.PBR材质与纹理贴图/index.md',
          },
        ],
      },
      { text: '关于作者', link: 'https://github.com/zxxj' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zxxj',
      },
    ],
  },
});
