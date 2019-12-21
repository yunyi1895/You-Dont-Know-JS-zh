// .vuepress/config.js
module.exports = {
  // 网站的标题
  title: "你不知道的 JavaScript 中文",
  // 上下文根
  base: "/doc-ydkjs/",
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "gdut-yy/You-Dont-Know-JS-zh",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "gdut-yy/You-Dont-Know-JS-zh",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master/docs",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 最大深度
    sidebarDepth: 4,
    // 导航栏
    nav: [
      {
        text: '你不知道的 JavaScript',
        items: [
          { text: '起步上路', link: '/up&going/' },
          { text: '作用域与闭包', link: '/scope&closures/' },
          { text: 'this与对象原型', link: '/this&objectprototypes/' },
          { text: '类型与文法', link: '/types&grammar/' },
          { text: '异步与性能', link: '/async&performance/' },
          { text: 'ES6与未来', link: '/es6&beyond/' }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      // 起步上路
      '/up&going/': ['', 'foreword.md', 'ch1.md', 'ch2.md', 'ch3.md'],
      // 作用域与闭包
      '/scope&closures/': [
        '',
        'ch1.md',
        'ch2.md',
        'ch3.md',
        'ch4.md',
        'ch5.md',
        'apA.md',
        'apB.md',
        'apC.md'
      ],
      // this与对象原型
      '/this&objectprototypes/': [
        '',
        'foreword.md',
        'ch1.md',
        'ch2.md',
        'ch3.md',
        'ch4.md',
        'ch5.md',
        'ch6.md',
        'apA.md'
      ],
      // 类型与文法
      '/types&grammar/': ['', 'foreword.md', 'ch1.md', 'ch2.md', 'ch3.md', 'ch4.md', 'ch5.md', 'apA.md'],
      // 异步与性能
      '/async&performance/': [
        '',
        'foreword.md',
        'ch1.md',
        'ch2.md',
        'ch3.md',
        'ch4.md',
        'ch5.md',
        'ch6.md',
        'apA.md',
        'apB.md'
      ],
      // ES6与未来
      '/es6&beyond/': [
        '',
        'foreword.md',
        'ch1.md',
        'ch2.md',
        'ch3.md',
        'ch4.md',
        'ch5.md',
        'ch6.md',
        'ch7.md',
        'ch8.md'
      ]
    }
  }
}
