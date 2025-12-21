export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"/favicon.png\"}]],\"locales\":{\"/\":{\"title\":\"OurWorldNetwork\",\"lang\":\"zh-CN\",\"description\":\"OurWorldNetwork 是一个致力于构建开放、共享、自由的Minecraft社区服务器。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
