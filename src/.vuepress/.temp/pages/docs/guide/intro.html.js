import comp from "F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/docs/guide/intro.html.vue"
const data = JSON.parse("{\"path\":\"/docs/guide/intro\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"介绍\",\"createTime\":\"2025/12/19 17:02:53\",\"permalink\":\"/docs/guide/intro\",\"icon\":\"book\"},\"readingTime\":{\"minutes\":1.72,\"words\":516},\"git\":{},\"filePathRelative\":\"docs/guide/intro.md\",\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
