<template>
  <!-- <button @click="handleReset">重置操作</button> -->
  <EDesigner ref="designerRef" @save="handleSubmit" >
    <template #header-title>
      <span>面试反馈表单设计器</span>
    </template>
    <template #header-prefix>
      <span></span>
    </template>
  </EDesigner>
</template>
<script lang="ts" setup>
import { EDesigner, type PageSchema, pluginManager } from '@jiaomatech-designer/core'
import { ref } from 'vue'
import { setupDesignerExtensions } from "../../utils"
const designerRef = ref<typeof EDesigner>()


// function handleReset () {
//   designerRef.value!.reset()
// }
/**
 * 加载自定义组件
 */
setupDesignerExtensions(pluginManager);


/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e)
}
</script>
