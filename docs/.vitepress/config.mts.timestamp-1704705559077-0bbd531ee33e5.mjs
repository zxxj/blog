// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/zhangxinxin/me/my-blog/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///D:/zhangxinxin/me/my-blog/node_modules/@sugarat/theme/node.js";
var blogTheme = getThemeConfig({
  blog: false,
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
  themeColor: "vp-yellow",
  // 文章默认作者
  author: "zhangxinxin",
  hotArticle: {
    title: "\u{1F525} 111",
    nextText: "\u6362\u4E00\u7EC4",
    pageSize: 9,
    empty: "\u6682\u65E0\u7CBE\u9009\u5185\u5BB9"
  },
  // 友链
  // friend: [
  //   {
  //     nickname: 'zhangxinxin',
  //     des: '我的github',
  //     avatar: '/blog/logo.png',
  //     url: 'https://github.com/zxxj',
  //   },
  // ],
  // 公告
  popover: {
    title: "\u516C\u544A",
    body: [{ type: "text", content: "hi" }],
    duration: 0
  }
});

// docs/.vitepress/config.mts
var config_default = defineConfig({
  base: "/blog/",
  extends: blogTheme,
  lang: "zh-cn",
  title: "zhangxinxin",
  description: "",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/blog/favicon.ico" }]],
  themeConfig: {
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    logo: "/logo.png",
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "threejs",
        items: [
          {
            text: "threejs\u7684\u57FA\u7840\u5185\u5BB9",
            link: "/sop/1.threejs\u7684\u57FA\u7840\u5185\u5BB9/index.md"
          },
          {
            text: "\u51E0\u4F55\u4F53BufferGeometry",
            link: "/sop/2.\u51E0\u4F55\u4F53BufferGeometry/index.md"
          },
          {
            text: "\u6A21\u578B\u5BF9\u8C61\u4E0E\u6750\u8D28\u5BF9\u8C61",
            link: "/sop/3.\u6A21\u578B\u5BF9\u8C61\u4E0E\u6750\u8D28\u5BF9\u8C61/index.md"
          },
          {
            text: "\u5C42\u7EA7\u6A21\u578B",
            link: "/sop/4.\u5C42\u7EA7\u6A21\u578B/index.md"
          }
        ]
      },
      { text: "\u5173\u4E8E\u4F5C\u8005", link: "https://github.com/zxxj" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zxxj"
      }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx6aGFuZ3hpbnhpblxcXFxtZVxcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcemhhbmd4aW54aW5cXFxcbWVcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovemhhbmd4aW54aW4vbWUvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XHJcblxyXG4vLyBcdTVCRkNcdTUxNjVcdTRFM0JcdTk4OThcdTc2ODRcdTkxNERcdTdGNkVcclxuaW1wb3J0IHsgYmxvZ1RoZW1lIH0gZnJvbSAnLi9ibG9nLXRoZW1lJztcclxuXHJcbi8vIFZpdGVwcmVzcyBcdTlFRDhcdThCQTRcdTkxNERcdTdGNkVcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnL2Jsb2cvJyxcclxuICBleHRlbmRzOiBibG9nVGhlbWUsXHJcbiAgbGFuZzogJ3poLWNuJyxcclxuICB0aXRsZTogJ3poYW5neGlueGluJyxcclxuICBkZXNjcmlwdGlvbjogJycsXHJcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgaGVhZDogW1snbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvYmxvZy9mYXZpY29uLmljbycgfV1dLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxyXG4gICAgbG9nbzogJy9sb2dvLnBuZycsXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAndGhyZWVqcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ3RocmVlanNcdTc2ODRcdTU3RkFcdTc4NDBcdTUxODVcdTVCQjknLFxyXG4gICAgICAgICAgICBsaW5rOiAnL3NvcC8xLnRocmVlanNcdTc2ODRcdTU3RkFcdTc4NDBcdTUxODVcdTVCQjkvaW5kZXgubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NTFFMFx1NEY1NVx1NEY1M0J1ZmZlckdlb21ldHJ5JyxcclxuICAgICAgICAgICAgbGluazogJy9zb3AvMi5cdTUxRTBcdTRGNTVcdTRGNTNCdWZmZXJHZW9tZXRyeS9pbmRleC5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU2QTIxXHU1NzhCXHU1QkY5XHU4QzYxXHU0RTBFXHU2NzUwXHU4RDI4XHU1QkY5XHU4QzYxJyxcclxuICAgICAgICAgICAgbGluazogJy9zb3AvMy5cdTZBMjFcdTU3OEJcdTVCRjlcdThDNjFcdTRFMEVcdTY3NTBcdThEMjhcdTVCRjlcdThDNjEvaW5kZXgubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NUM0Mlx1N0VBN1x1NkEyMVx1NTc4QicsXHJcbiAgICAgICAgICAgIGxpbms6ICcvc29wLzQuXHU1QzQyXHU3RUE3XHU2QTIxXHU1NzhCL2luZGV4Lm1kJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFXHU0RjVDXHU4MDA1JywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS96eHhqJyB9LFxyXG4gICAgXSxcclxuICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiAnZ2l0aHViJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3p4eGonLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx6aGFuZ3hpbnhpblxcXFxtZVxcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcemhhbmd4aW54aW5cXFxcbWVcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmxvZy10aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovemhhbmd4aW54aW4vbWUvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvYmxvZy10aGVtZS50c1wiOy8vIFx1NEUzQlx1OTg5OFx1NzJFQ1x1NjcwOVx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnO1xyXG5cclxuLy8gXHU2MjQwXHU2NzA5XHU5MTREXHU3RjZFXHU5ODc5XHVGRjBDXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzOiBodHRwczovL3RoZW1lLnN1Z2FyYXQudG9wL1xyXG5jb25zdCBibG9nVGhlbWUgPSBnZXRUaGVtZUNvbmZpZyh7XHJcbiAgYmxvZzogZmFsc2UsXHJcbiAgLy8gXHU5ODc1XHU4MTFBXHJcbiAgLy8gZm9vdGVyOiB7XHJcbiAgLy8gICAvLyBtZXNzYWdlOiAnXHU0RTBCXHU5NzYyIFx1NzY4NFx1NTE4NVx1NUJCOVx1NTQ4Q1x1NTZGRVx1NjgwN1x1OTBGRFx1NjYyRlx1NTNFRlx1NEVFNVx1NEZFRVx1NjUzOVx1NzY4NFx1NTY2Mlx1RkYwOFx1NUY1M1x1NzEzNlx1NjcyQ1x1Njc2MVx1NTE4NVx1NUJCOVx1NEU1Rlx1NjYyRlx1NTNFRlx1NEVFNVx1OTY5MFx1ODVDRlx1NzY4NFx1RkYwOScsXHJcbiAgLy8gICBjb3B5cmlnaHQ6ICdNSVQgTGljZW5zZSB8IFx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXHJcbiAgLy8gICAvLyBpY3BSZWNvcmQ6IHtcclxuICAvLyAgIC8vICAgbmFtZTogJ1x1ODcwMElDUFx1NTkwNzE5MDExNzI0XHU1M0Y3JyxcclxuICAvLyAgIC8vICAgbGluazogJ2h0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vJ1xyXG4gIC8vICAgLy8gfSxcclxuICAvLyAgIC8vIHNlY3VyaXR5UmVjb3JkOiB7XHJcbiAgLy8gICAvLyAgIG5hbWU6ICdcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDd4eHh4eCcsXHJcbiAgLy8gICAvLyAgIGxpbms6ICdodHRwczovL3d3dy5iZWlhbi5nb3YuY24vcG9ydGFsL2luZGV4LmRvJ1xyXG4gIC8vICAgLy8gfSxcclxuICAvLyB9LFxyXG5cclxuICAvLyBcdTRFM0JcdTk4OThcdTgyNzJcdTRGRUVcdTY1MzlcclxuICB0aGVtZUNvbG9yOiAndnAteWVsbG93JyxcclxuXHJcbiAgLy8gXHU2NTg3XHU3QUUwXHU5RUQ4XHU4QkE0XHU0RjVDXHU4MDA1XHJcbiAgYXV0aG9yOiAnemhhbmd4aW54aW4nLFxyXG5cclxuICBob3RBcnRpY2xlOiB7XHJcbiAgICB0aXRsZTogJ1x1RDgzRFx1REQyNSAxMTEnLFxyXG4gICAgbmV4dFRleHQ6ICdcdTYzNjJcdTRFMDBcdTdFQzQnLFxyXG4gICAgcGFnZVNpemU6IDksXHJcbiAgICBlbXB0eTogJ1x1NjY4Mlx1NjVFMFx1N0NCRVx1OTAwOVx1NTE4NVx1NUJCOScsXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU1M0NCXHU5NEZFXHJcbiAgLy8gZnJpZW5kOiBbXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIG5pY2tuYW1lOiAnemhhbmd4aW54aW4nLFxyXG4gIC8vICAgICBkZXM6ICdcdTYyMTFcdTc2ODRnaXRodWInLFxyXG4gIC8vICAgICBhdmF0YXI6ICcvYmxvZy9sb2dvLnBuZycsXHJcbiAgLy8gICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS96eHhqJyxcclxuICAvLyAgIH0sXHJcbiAgLy8gXSxcclxuXHJcbiAgLy8gXHU1MTZDXHU1NDRBXHJcbiAgcG9wb3Zlcjoge1xyXG4gICAgdGl0bGU6ICdcdTUxNkNcdTU0NEEnLFxyXG4gICAgYm9keTogW3sgdHlwZTogJ3RleHQnLCBjb250ZW50OiAnaGknIH1dLFxyXG4gICAgZHVyYXRpb246IDAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgeyBibG9nVGhlbWUgfTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVCxTQUFTLG9CQUFvQjs7O0FDQzlVLFNBQVMsc0JBQXNCO0FBRy9CLElBQU0sWUFBWSxlQUFlO0FBQUEsRUFDL0IsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWdCTixZQUFZO0FBQUE7QUFBQSxFQUdaLFFBQVE7QUFBQSxFQUVSLFlBQVk7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxFQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWFBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE1BQU0sQ0FBQyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztBQUFBLElBQ3RDLFVBQVU7QUFBQSxFQUNaO0FBQ0YsQ0FBQzs7O0FEM0NELElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQyxDQUFDO0FBQUEsRUFDM0QsYUFBYTtBQUFBLElBQ1gsaUJBQWlCO0FBQUEsSUFDakIsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLGdCQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ3hCO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsRUFBRSxNQUFNLDRCQUFRLE1BQU0sMEJBQTBCO0FBQUEsSUFDbEQ7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
