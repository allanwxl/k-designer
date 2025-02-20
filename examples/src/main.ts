import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { pluginManager } from '@jiaomatech-designer/core'
// 使用Elemnt UI

// import 'element-plus/dist/index.css'
// import { setupElementPlus } from '@jiaomatech-designer/ui/elementPlus'
// setupElementPlus(pluginManager)

// 使用Antd UI
import 'ant-design-vue/dist/antd.css'
import { setupAntd } from '@jiaomatech-designer/ui/antd'
setupAntd(pluginManager, false)

// 使用NaiveUi UI
// import { setupNaiveUi } from '@jiaomatech-designer/ui/naiveUi'
// setupNaiveUi(pluginManager)

createApp(App).mount('#app')
