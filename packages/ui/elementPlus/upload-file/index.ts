import { type ComponentConfigModel } from '@jiaomatech/designer-utils/pluginManager'
export default {
  component: () => import('./uploadFile'),
  defaultSchema: {
    label: '上传文件',
    type: 'upload-file',
    icon: 'icon-number',
    field: 'uploadFile',
    input: true,
    componentProps: {
      action: 'http://cdn.kcz66.com/upload-img.txt',
      name: 'file',
      showFileList: true
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
        label: '请求地址',
        type: 'input',
        field: 'componentProps.action'
      },
      {
        label: '上传文件字段',
        type: 'input',
        field: 'componentProps.name'
      },
      {
        label: '多选',
        type: 'switch',
        field: 'componentProps.multiple'
      },
      {
        label: '展示文件列表',
        type: 'switch',
        field: 'componentProps.showFileList'
      },
      {
        label: '拖拽上传',
        type: 'switch',
        field: 'componentProps.drag'
      },
      {
        label: '允许上传最大数量',
        type: 'number',
        field: 'componentProps.limit',
        componentProps: {
          min:0
        }
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
  bindModel: 'modelValue'
} as ComponentConfigModel
