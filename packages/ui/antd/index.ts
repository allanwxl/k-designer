// 注册ant-design-vue ui
import { type PluginManager } from '../../utils/pluginManager'
import Input from './input'
import Textarea from './textarea'
import InputNumber from './input-number'
import InputPassword from './input-password'
import Radio from './radio'
import Checkbox from './checkbox'
import Select from './select'
import Slider from './slider'
import TimePicker from './time-picker'
import DatePicker from './date-picker'
import Cascader from './cascader'
import Switch from './switch'
import UploadImage from './upload-image'
import UploadFile from './upload-file'
import Card from './card'
import Row from './row'
import Col from './col'
import Tabs from './tabs'
import TabPane from './tab-pane'
import Form from './form'
import FormItem from './form-item'
import Button from './button'
import Modal from './modal'
import colorPicker from './color-picker'
import Slider from './slider'


export function setupAntd (pluginManager: PluginManager, showBasicComp: boolean = true): void {
  // 异步加载组件
  pluginManager.component(
    'Collapse',
    async () => await import('ant-design-vue/lib/collapse')
  )
  pluginManager.component(
    'CollapseItem',
    async () => await import('ant-design-vue/lib/collapse/CollapsePanel')
  )
  pluginManager.component('Tabs', async () => await import('ant-design-vue/lib/tabs'))
  pluginManager.component(
    'TabPane',
    async () => (await import('ant-design-vue/lib/tabs')).TabPane
  )

  const componentArray = [
    Form,
    FormItem,
    Input,
    Textarea,
    InputNumber,
    InputPassword,
    Radio,
    Checkbox,
    Select,
    Slider,
    TimePicker,
    DatePicker,
    Cascader,
    Switch,
    Slider,
    UploadImage,
    UploadFile,
    Card,
    Row,
    Col,
    Tabs,
    TabPane,
    Button,
    Modal,
    colorPicker
  ]

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item)
  })

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: '表单',
      list: showBasicComp ? [
        'form',
        'input',
        'textarea',
        'number',
        'password',
        'select',
        'slider',
        'checkbox',
        'radio',
        'date',
        'time',
        "slider",
        'upload-file',
        'upload-image',
        'cascader',
        'switch',
        'button',
        'color-picker'
      ] : [ 'form', 'button' ]
    },
    {
      title: '布局',
      list: [
        'card',
        'row'
        // "tabs"
      ]
    }
  ])
}
