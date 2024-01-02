import { defineConfig } from 'vitepress';

// 导入主题的配置
import { blogTheme } from './blog-theme';

// Vitepress 默认配置
export default defineConfig({
  base: '/my-blog/',
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'coderzxx',
  description: '',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
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
