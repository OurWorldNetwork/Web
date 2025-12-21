export const collections = {"/":[{"type":"post","dir":"blog","title":"Blog","link":"/blog","linkPrefix":"/blog","tags":true,"tagsLink":"/blogtags/","archives":true,"archivesLink":"/blogarchives/","categories":true,"categoriesLink":"/blogcategories/"},{"type":"doc","dir":"docs","linkPrefix":"/docs","title":"文档","sidebarCollapsed":true}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateCollections) {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ collections }) => {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  })
}
