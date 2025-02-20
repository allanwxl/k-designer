import type { PropType } from 'vue'
import { defineComponent, h, renderSlot } from 'vue'
import { NCol } from 'naive-ui'
import { type NodeItem } from '@jiaomatech-designer/core/types/epic-designer'
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
        title: props.record.label
      } as any
      const children = record.children
      delete record.children

      return h(NCol, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((node: NodeItem) => renderSlot(slots, 'node', { record: node }))
          )
      })
    }
  }
})
