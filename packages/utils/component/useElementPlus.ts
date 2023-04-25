// 注册ant-design-vue ui
import { PluginManager } from "../pluginManager";
import Input from "./ElementPlus/input";
import Number from "./ElementPlus/input-number";
import Form from "./ElementPlus/form";
import FormItem from "./ElementPlus/formItem";
import Button from "./ElementPlus/button";
import Card from "./ElementPlus/card";
import Row from "./ElementPlus/row";
import Col from "./ElementPlus/col";
import Select from "./ElementPlus/select";
import Radio from "./ElementPlus/radio";
import Checkbox from "./ElementPlus/checkbox";
import Slider from "./ElementPlus/slider";

import ColorPicker from "./ElementPlus/color-picker";
import Switch from "./ElementPlus/switch";
import Cascader from "./ElementPlus/cascader";
import Tabs from "./ElementPlus/tabs";
import TabPane from "./ElementPlus/tabPane";
import Collapse from "./ElementPlus/collapse";
import CollapseItem from "./ElementPlus/collapse-item";
import DatePicker from "./ElementPlus/datePicker";

// 组件样式调整
import "./ElementPlus/src/index.less";
export function useElementPlus(pluginManager: PluginManager) {
  // 异步加载组件
  (async () => {
    const Elment = await import("element-plus");
    pluginManager.component("Modal", Elment.ElDialog);
    pluginManager.component("FormItem", Elment.ElFormItem);
    pluginManager.component("Tabs", Elment.ElTabs);
    pluginManager.component("TabPane", Elment.ElTabPane);
    pluginManager.component("Collapse", Elment.ElCollapse);
    pluginManager.component("CollapseItem", Elment.ElCollapseItem);
  })();

  const componentArray = [
    Form,
    FormItem,
    Input,
    Number,
    Radio,
    Checkbox,
    DatePicker,
    Select,
    Switch,
    ColorPicker,
    Cascader,
    Slider,
    Button,
    Card,
    Row,
    Col,
    Tabs,
    TabPane,
    Collapse,
    CollapseItem,
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: "输入组件",
      list: [
        "form",
        "input",
        // "textarea",
        "number",
        // "password",
        "select",
        "checkbox",
        "radio",
        "date",
        // "time",
        // "rate",
        "slider",
        // "upload-file",
        // "upload-image",
        "cascader",
        // "treeSelect",
        "switch",
        "button",
        "color-picker",
      ],
    },
    {
      title: "布局组件",
      list: ["card", "row", "tabs"],
    },
  ]);
}
