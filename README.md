# 文章源码

模板更换为 vuepress-theme-reco 主题。自动分类和标签聚合，以及分页和评论。

有些注意事项：

1. 不使用一级标题，使用 yaml 来编辑元数据。日期中要注意前面补齐 0。

```yaml
---
title: Node 爬虫编写
date: 2020-03-25
tags:
  - Node.js
categories:
  - 技术
---
这里的内容会被显示成摘要。

1. 可以放置文案；
2. 可以放置图片作为文章封面。

<!-- more -->
```

```s
tags:
categories:
```

2. 评论使用 Valine

3. 编译结果在`/public/`，而非`docs/.vuepress/dist`

4. Github Action 脚本可用，只要 push blog 分支，自动将生成静态文件文件写入 master 分支，Page 直接访问。同时支持使用 scp 静态复制文件到服务器。

## 相关命令

没有安装 yarn 的，把以下命令中的 yarn 替换为 npm run

```bash
# 安装依赖
yarn install

# 本地启动
yarn dev

# 编译
yarn build

# 自动上传静态部署文件
yarn autopush
```

## 其他说明

使用 vuepress 创建 SEO 友好的静态文章站。一键发布到 github page，内置 github action 自动部署脚本。

vuepress 通过一定*号称简单*的配置之后，为每一个 md 文件生成静态 html 脚本，并通过主题挂接起来。用来写文档是非常不错的。写文章就要做一点工作，踩**一点**坑。

#### 注意 yaml

必须放在 md 文件在最上方才能生效

#### 无法热更新

修改 config.js 后，是没办法热更新的，只能 ctrl+c 结束任务然后重新 yarn dev

## 相关技术

[vuepress](https://v1.vuepress.vuejs.org/zh/guide/)

[主题文档](https://vuepress-theme-reco.recoluan.com/)
