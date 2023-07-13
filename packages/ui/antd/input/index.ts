import { type ComponentConfigModel } from '@jiaomatech/designer-utils/pluginManager'
export default {
  component: () => import('ant-design-vue/lib/input'),
  defaultSchema: {
    label: '输入框',
    type: 'input',
    field: 'input',
    icon: 'icon-write',
    input: true,
    componentProps: {
      bordered: true,
      size: 'middle'
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
        label: '标题',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'input',
        field: 'componentProps.defaultValue'
      },
      {
        label: '输入类型',
        type: 'select',
        defaultValue: 'text',
        componentProps: {
          options: [
            {
              label: 'text',
              value: 'text'
            },
            {
              label: 'number',
              value: 'number'
            },
            {
              label: 'password',
              value: 'password'
            }
          ]
        },
        field: 'componentProps.type'
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
        label: '可清空',
        type: 'switch',
        field: 'componentProps.allowClear'
      },
      {
        label: '有边框',
        type: 'switch',
        field: 'componentProps.bordered'
      },
      {
        label: '最大输入长度',
        type: 'number',
        field: 'componentProps.maxLength'
      },
      {
        label: '统计字数',
        type: 'switch',
        field: 'componentProps.showCount'
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
    ],
    event: [
      {
        type: 'input',
        describe: '输入值'
      },
      {
        type: 'change',
        describe: '值修改'
      },
      {
        type: 'pressEnter',
        describe: '按下回车的回调'
      },
      {
        type: 'focus',
        describe: '获取焦点'
      },
      {
        type: 'blur',
        describe: '失去焦点'
      }
    ],
    action: [
      {
        type: 'focus',
        describe: '使 input 获取焦点'
      },
      {
        type: 'blur',
        describe: '使 input 失去焦点'
      },
      {
        type: 'select',
        describe: '选中 input 中的文字'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
