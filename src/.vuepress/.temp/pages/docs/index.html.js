import comp from "F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/docs/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/\",\"title\":\"文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文档\",\"createTime\":\"2025/12/19 21:02:23\",\"permalink\":\"/docs/\"},\"readingTime\":{\"minutes\":0.03,\"words\":10},\"git\":{},\"filePathRelative\":\"docs/README.md\",\"headers\":[]}")
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
