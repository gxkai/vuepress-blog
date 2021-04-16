module.exports = {
  "title": "Y&K",
  "description": "永远年轻，永远热泪盈眶！",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
      appId: 'iI6XfB6ExXzYMuy8hb3dUoez-gzGzoHsz',// your appId
      appKey: 'R7EUWS9bcmFIVPxLLw6NXaVI', // your appKey
      placeholder: '吐槽一下吧'
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            text: "关于", link: "/about/"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/gxkai",
            "icon": "reco-github"
          },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "类别"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "",
      //   "desc": "",
      //   "email": "",
      //   "link": ""
      // },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "更新于",
    "author": "Y&K",
    "authorAvatar": "/logo.png",
    "record": "",
    recordLink: "",
    "startYear": "2019",
    repo: '',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    docsBranch: 'blog',
    editLinks: true,
    editLinkText: '参与编辑此文章',
  },
  "markdown": {
    "lineNumbers": true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@pic': 'docs/pic'
      }
    }
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-rss', {
      site_url: 'https://gxkai.github.io/blog.github.io/',
      copyright: 'Y&K'
    }],
  ]

}
