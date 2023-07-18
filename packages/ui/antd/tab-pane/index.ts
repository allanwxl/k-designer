import { type ComponentConfigModel } from '@jiaomatech/designer-utils'
export default {
  component: () => import('./tabPane'),
  defaultSchema: {
    label: '标签内容',
    type: 'tab-pane',
    icon: 'icon-xiala',
    children: [],
    componentProps: {
      tab: '标签',
      key: '1'
    }
  },
  config: {
    attribute: [
      {
        label: '垂直对齐方式',
        type: 'input',
        field: 'componentProps.tab'
      }
    ]
  }
} as ComponentConfigModel
