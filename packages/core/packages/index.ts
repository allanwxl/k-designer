import 'virtual:uno.css'
import KBuilder from './components/KBuilder/'
import KDesigner from './components/KDesigner/'
import KNode from './components/KNode/'
// import { type App } from 'vue'
import { pluginManager, type PluginManager, type PageManager, usePageManager } from '@jiaomatech/designer-utils'
import { initComponent } from './utils/component/init'
import './index.less'
export type { NodeItem, PageSchema } from './types/kDesigner.d'
// 初始化设计器
console.log('初始化设计器: initComponent')
initComponent(pluginManager)
console.log('注册组件: ', pluginManager.getComponents())
// const components = [KBuilder, KDesigner]

// 注册全局组件
// const KDesignr = {
//   install (app: App) {
//     components.forEach((comp) => {
//       app.component(comp.__name ?? '', comp)
//     })
//   },
//   pluginManager,
//   usePageManager
// }

export {
  KBuilder,
  KDesigner,
  KNode,
  pluginManager,
  usePageManager,
  type PluginManager,
  type PageManager
}
// export default KDesignr
