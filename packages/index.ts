import KBuilder from "./components/KBuilder/";
import KDesigner from "./components/KDesigner/";
import { App } from "vue";
import { pluginManager, nodeSchema } from "./utils/index";

import './index.less'

const components = [KBuilder, KDesigner];
pluginManager.registerComponent("Form", () => import("ant-design-vue/lib/form"));
pluginManager.registerComponent("FormItem", () => import("ant-design-vue/lib/form/FormItem"));
pluginManager.registerComponent("Modal", () => import("ant-design-vue/lib/modal"));

pluginManager.registerComponent(
  "monacoEditor",
  () => import("./components/MonacoEditor/monacoEditor.vue"),
  "value"
);
pluginManager.addComponent(
  () => import("./components/KForm/index"),
  {
    label: "测试2",
    type: "form",
    field: "test",
    icon: "icon-qiapian",
    labelWidth: 100,
    children: [],
  },
  [
    {
      label: "标签布局",
      type: "radio",
      attrIndex: "componentProps.labelLayout",
      componentProps: {
        options: [
          {
            label: "固定宽度",
            value: "fixed",
          },
          {
            label: "自适应宽度",
            value: "flex",
          },
        ],
      },
    },
    {
      label: "labelWidth",
      type: "input",
      attrIndex: "componentProps.labelWidth",
      show: (values) => {
        return values.componentProps.labelLayout === "fixed";
      },
    },
    {
      label: "labelCol",
      type: "input",
      attrIndex: "componentProps.labelCol.span",
      show: (values) => {
        return values.componentProps.labelLayout === "flex";
      },
    },
    {
      label: "wrapperCol",
      type: "input",
      attrIndex: "componentProps.wrapperCol.span",
      show: (values) => {
        return values.componentProps.labelLayout === "flex";
      },
    },
  ]
);
// 注册全局组件
const KDesignr = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
  },
  pluginManager,
  nodeSchema,
};

export { KBuilder, KDesigner, pluginManager, nodeSchema };
export default KDesignr;
