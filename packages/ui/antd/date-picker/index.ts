import { type ComponentConfigModel } from '@jiaomatech/designer-utils/pluginManager'
export default {
  component: () => import('./datePicker'),
  defaultSchema: {
    label: '日期选择器',
    type: 'date',
    icon: 'icon-xiala',
    field: 'date',
    input: true,
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
      type: 'daterange',
      size: 'middle',
      placement: 'bottomLeft'
    }
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
        label: '尺寸',
        type: 'select',
        defaultValue: 'default',
        componentProps: {
          options: [
            {
              label: 'large',
              value: 'large'
            },
            {
              label: 'middle',
              value: 'middle'
            },
            {
              label: 'small',
              value: 'small'
            }
          ]
        },
        field: 'componentProps.size'
      },
      {
        label: '有边框',
        type: 'switch',
        field: 'componentProps.bordered'
      },
      {
        label: '弹出框位置',
        type: 'select',
        componentProps: {
          options: [
            {
              label: 'bottomLeft',
              value: 'bottomLeft'
            },
            {
              label: 'bottomRight',
              value: 'bottomRight'
            },
            {
              label: 'topLeft',
              value: 'topLeft'
            },
            {
              label: 'topRight',
              value: 'topRight'
            }
          ]
        },
        field: 'componentProps.placement'
      },
      {
        label: '默认值',
        type: 'date',
        field: 'componentProps.defaultValue'
      },
      {
        label: '格式',
        type: 'input',
        field: 'componentProps.valueFormat'
      },
      {
        label: '显示类型',
        type: 'select',
        field: 'componentProps.type',
        componentProps: {
          options: [
            {
              label: '日期',
              value: 'date'
            },
            {
              label: '月份',
              value: 'month'
            },
            {
              label: '日期范围',
              value: 'daterange'
            }
          ]
        }
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.allowClear'
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
        type: 'KRuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
