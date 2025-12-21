export const redirects = JSON.parse("{\"/qq-group.html\":\"/qq-group\",\"/blog/preview/custom-component.example.html\":\"/blog/7mkkks9h/\",\"/blog/preview/markdown.html\":\"/blog/s1gktbjs/\",\"/docs/guide/intro.html\":\"/docs/guide/intro\",\"/docs/guide/join.html\":\"/docs/guide/join\"}")

export const routes = Object.fromEntries([
  ["/qq-group", { loader: () => import(/* webpackChunkName: "qq-group.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/qq-group.html.js"), meta: {"title":"玩家QQ交流群","icon":"qq"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/docs/index.html.js"), meta: {"title":"文档"} }],
  ["/blog/7mkkks9h/", { loader: () => import(/* webpackChunkName: "blog_7mkkks9h_index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/blog/7mkkks9h/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/blog/s1gktbjs/", { loader: () => import(/* webpackChunkName: "blog_s1gktbjs_index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/blog/s1gktbjs/index.html.js"), meta: {"title":"Markdown"} }],
  ["/docs/guide/intro", { loader: () => import(/* webpackChunkName: "docs_guide_intro.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/docs/guide/intro.html.js"), meta: {"title":"介绍","icon":"book"} }],
  ["/docs/guide/join", { loader: () => import(/* webpackChunkName: "docs_guide_join.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/docs/guide/join.html.js"), meta: {"title":"加入游戏","icon":"play"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blogtags/", { loader: () => import(/* webpackChunkName: "blogtags_index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/blogtags/index.html.js"), meta: {"title":"标签"} }],
  ["/blogarchives/", { loader: () => import(/* webpackChunkName: "blogarchives_index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/blogarchives/index.html.js"), meta: {"title":"归档"} }],
  ["/blogcategories/", { loader: () => import(/* webpackChunkName: "blogcategories_index.html" */"F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/blogcategories/index.html.js"), meta: {"title":"分类"} }],
]);
