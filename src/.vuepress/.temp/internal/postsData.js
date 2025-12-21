export const postsData = {"/blog/":[{"path":"/blog/s1gktbjs/","title":"Markdown","tags":["markdown"],"createTime":"2025/12/18 21:09:35","lang":"zh-CN","excerpt":"","readingTime":{"minutes":2.96,"words":887}},{"path":"/blog/7mkkks9h/","title":"自定义组件","tags":["预览","组件"],"createTime":"2025/12/18 21:09:35","lang":"zh-CN","excerpt":"","readingTime":{"minutes":0.07,"words":20}}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePostsData) {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ postsData }) => {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  })
}
