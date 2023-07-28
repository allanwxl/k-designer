import { type ComponentConfigModel } from '@jiaomatech-designer/utils/pluginManager'
export default {
  component: () => import('ant-design-vue/lib/slider'),
  defaultSchema: {
    label: '滑动输入条',
    type: 'slider',
    icon: 'icon-xiala',
    field: 'slider',
    input: false
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'select',
        field: 'componentProps.defaultValue'
      },
      {
        label: 'label包装到value中',
        type: 'switch',
        field: 'componentProps.labelInValue'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled'
      },
      {
        label: '表单校验',
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ],
    event: [
      {
        type: 'change',
        describe: '值修改'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
