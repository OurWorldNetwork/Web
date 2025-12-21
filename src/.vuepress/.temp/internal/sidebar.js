export const sidebar = {"/":{"/docs/":{"items":[{"text":"快速开始","prefix":"guide","collapsed":false,"items":["join","intro","choose-server-tips","package"]}],"prefix":"/docs/"}},"__auto__":{},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
