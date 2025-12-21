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
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
