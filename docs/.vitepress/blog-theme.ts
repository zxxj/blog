// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node';

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 页脚
  // footer: {
  //   // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
  //   copyright: 'MIT License | 粥里有勺糖',
  //   // icpRecord: {
  //   //   name: '蜀ICP备19011724号',
  //   //   link: 'https://beian.miit.gov.cn/'
  //   // },
  //   // securityRecord: {
  //   //   name: '公网安备xxxxx',
  //   //   link: 'https://www.beian.gov.cn/portal/index.do'
  //   // },
  // },

  // 主题色修改
  themeColor: 'el-red',

  // 文章默认作者
  author: 'coderzxx',

  // 友链
  friend: [
    {
      nickname: 'coderzxx',
      des: '我的github',
      avatar: '/logo.png',
      url: 'https://github.com/zxxj',
    },
  ],

  // 公告
  popover: {
    title: '公告',
    body: [{ type: 'text', content: 'hi' }],
    duration: 0,
  },
});

export { blogTheme };
