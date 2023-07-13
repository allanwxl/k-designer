import type { PropType } from 'vue'
import { defineComponent, h, renderSlot } from 'vue'
import { NTabPane } from 'naive-ui'
import { type NodeItem } from '@jiaomatech/designer-core/packages/types/kDesigner'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({})
    }
  },
  setup (props, { slots }) {
    return () => {
      const record = {
        ...props.record,
        name: props.record.id
      } as any
      const children = record.children
      delete record.children
      return h(NTabPane, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () => children.map(() => renderSlot(slots, 'node', { record })))
      })
    }
  }
})
