import { defineClientConfig } from 'vuepress/client'
import Tabs from 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import VPVideoEmbed from 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/components/VPVideoEmbed.vue'
import Plot from 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import VPField from 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/components/VPField.vue'
import { useScriptTag } from '@vueuse/core'
import { setupMarkHighlight } from 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import 'F:/OurWorldNetwork Web/node_modules/.pnpm/vuepress-plugin-md-power@1._1e84c45ee95a245eb92e8d865764cc28/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('VPVideoEmbed', VPVideoEmbed)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
    app.component('VPField', VPField)
  },
  setup() {
        useScriptTag("https://jsdmirrors.aino.cyou/npm/@fortawesome/fontawesome-free@7.1.0/js/all.min.js", () => {}, { attrs: { "data-auto-replace-svg": "nest" } })
    setupMarkHighlight("lazy")

  }
})
