<template>
  <div class="epic-temp-view">
    <div class="text-center pt-42px" v-if="templates.length === 0">
      <span class="text-gray-400">暂时无可用模板</span>
    </div>
    <div v-else class="container">
      <div v-for="item in templates" :key="item.id" @click="chooseTemp(item)" class="temp-item">
        <div class="temp-item-text">{{ item.tempName }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue';
import { Designer, PageSchema, Template } from "../../../../../types/epic-designer";
import { revoke } from "@jiaomatech-designer/utils";
import { Modal } from 'ant-design-vue';
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer

const props = defineProps({
  templates: {
    type: Array,
    require: true,
    default: () => ([
      {
        tempName: "测试模版",
        id: "123",
        schemas: [
          {
            type: "page",
            id: "root",
            children: [
              {
                label: "文本框222",
                type: "input",
                field: "input",
                icon: "icon-write",
                isInput: true,
                componentProps: {
                  defaultValue: "",
                  placeholder: "请输入"
                },
                id: "9wr7dfv9kjc00"
              },
              {
                label: "选择框",
                type: "select",
                icon: "icon-xiala",
                field: "select",
                isInput: true,
                componentProps: {
                  options: [
                    {
                      label: "选项1",
                      value: "选项1"
                    },
                    {
                      label: "选项2",
                      value: "选项2"
                    }
                  ],
                  placeholder: "请选择"
                },
                id: "4efvesnkhdo00"
              },
              {
                label: "复选框",
                type: "checkbox",
                icon: "icon-duoxuan1",
                field: "checkbox",
                isInput: true,
                componentProps: {
                  defaultValue: [],
                  options: [
                    {
                      label: "选项1",
                      value: "选项1"
                    },
                    {
                      label: "选项2",
                      value: "选项2"
                    }
                  ],
                  hidden: false,
                  disabled: true
                },
                id: "ayk2q9c948s00"
              }
            ],
            componentProps: {
              style: {
                padding: "16px"
              }
            }
          }
        ],
        script: 'const { defineExpose, getComponent } = this;\n\nfunction test (){\n console.log("test")\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})'
      }
    ])
  }
})

const chooseTemp = (item) => {
  Modal.confirm({
    title: '提示',
    content: '是否要替换为模板内容?',
    onOk() {
      // 需要替换为模板节点
      pageSchema.schemas = item.schemas
      // deepCompareAndModify(pageSchema.schemas, item)
      designer.setCheckedNode(pageSchema.schemas[0])
      revoke.push(pageSchema.schemas, '设置模板')
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel() {},
  });
}
</script>
<style scoped>
.epic-temp-view {
  padding-right: 12px;
  padding-top: 12px;
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
  .container {
    //height: 100%;
    //display: flex;
    //flex-wrap: wrap;
  }
  .temp-item {
    margin-left: 10px;
    margin-bottom: 10px;
    width: 140px;
    height: 80px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2) ;
    display: inline-block;
  }
  .temp-item-text {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}

</style>
