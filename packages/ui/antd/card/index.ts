import { type ComponentConfigModel } from '@jiaomatech-designer/utils/pluginManager'
export default {
  component:  () => import('./card'),
  defaultSchema: {
    label: '卡片布局',
    type: 'card',
    icon: 'icon-qiapian',
    children: []
  },
  config: {
    attribute: [
      {
        label: '标题',
        type: 'input',
        field: 'label'
      }
    ]
  }
} as ComponentConfigModel
