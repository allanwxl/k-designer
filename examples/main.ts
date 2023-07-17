import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";



import { pluginManager } from "../dist";


// 引入Element plus样式
import "ant-design-vue/dist/antd.css";
import { setupAntd } from '../dist/ui/antd'
// 使用Elemnt UI
setupAntd(pluginManager);


// // 引入antd UI样式
// import "ant-design-vue/dist/antd.css";
// import { setupAntd } from '../packages/ui/antd'
// // 使用Antd UI
// setupAntd(pluginManager);


// import { setupNaiveUi } from '../packages/ui/naiveUi'
// // 使用NaiveUi UI
// setupNaiveUi(pluginManager);

createApp(App).mount("#app");
