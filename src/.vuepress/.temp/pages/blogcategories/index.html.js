import comp from "F:/OurWorldNetwork Web/src/.vuepress/.temp/pages/blogcategories/index.html.vue"
const data = JSON.parse("{\"path\":\"/blogcategories/\",\"title\":\"分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"分类\",\"draft\":true},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":null,\"headers\":[],\"type\":\"posts-categories\"}")
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
