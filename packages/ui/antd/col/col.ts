import { defineComponent, h, renderSlot, type PropType } from 'vue'
import Col from 'ant-design-vue/lib/col'
import { type NodeItem } from '@jiaomatech/designer-core/packages/types/kDesigner'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({})
    }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        title: props.record?.label ?? ''
      } as any
      const children = record.children
      delete record.children

      return h(Col, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: any) =>
              renderSlot(slots, 'node', { record })
            )
          )
      })
    }
  }
})
