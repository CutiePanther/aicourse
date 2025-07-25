import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = '/aicourse/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: '智慧课堂',
  description: '让知识传递更懂你的需求',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: `/aicourse/favicon.ico` }], // 修改了 base 这里也需要同步修改
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录',
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/logo.svg',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      {
        text: '主题',
        items: [
          { text: '快速开始', link: '/sop/quickStart' },
          { text: '样式定制', link: '/sop/style' },
          { text: '组件库', link: '/sop/component' },
          { text: '更多能力', link: '/sop/more' },
        ],
      },
      {
        text: '文档',
        items: [
          { text: 'git指南', link: '/dev/git' },
          // { text: 'API文档', link: '/dev/api/' },
          // { text: '常见问题', link: '/dev/faq/' },
        ],
      },
      { text: '关于', link: '/about' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme',
      },
    ],
  },
})
