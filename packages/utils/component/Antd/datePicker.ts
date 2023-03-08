export default {
  component: () => import("./src/KDatePicker"),
  schema: {
    label: "日期选择器",
    type: "date",
    icon: "icon-xiala",
    field: "date",
    isInput: true,
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      type:"daterange"
    },
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
    {
      label: "默认值",
      type: "date",
      attrIndex: "componentProps.defaultValue",
    },
    {
      label: "格式",
      type: "input",
      attrIndex: "componentProps.valueFormat",
    },
    {
      label: "显示类型",
      type: "select",
      attrIndex: "componentProps.type",
      componentProps: {
        options:[
          {
            label:'日期',
            value:'date'
          },
          {
            label:'月份',
            value:'month'
          },
          {
            label:'日期范围',
            value:'daterange'
          },
        ]
      },
    },
  ],
  bindModel: "value",
};