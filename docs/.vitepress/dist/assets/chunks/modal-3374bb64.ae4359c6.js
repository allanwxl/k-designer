import{H as h}from"./index-9241dd25.e63e5f11.js";import{S as u}from"./index-a3c33b65.255dc621.js";import"./index-b8b964c9.fce975b8.js";import"./index-cceb3c2d.b2021210.js";import"./focus-trap-5b0a31a8.774161b6.js";import"./use-global-config-01848441.604bd678.js";import{e as y,g as i,Q as t}from"../app.88701f9d.js";import"./use-form-item-37b15378.4ebba814.js";import"./isNil-8ef0e4b6.1ddc74dd.js";const O=y({props:{record:{type:Object,default:()=>({})}},emits:["ok","close","update:modelValue"],setup(a,{attrs:f,slots:r,emit:l}){return()=>{var p,c;var m;const o={...a.record,...f,title:(p=(m=a.record)==null?void 0:m.label)!=null?p:"","modal-class":"epic-modal","destroy-on-close":!0,"onUpdate:modelValue":s},n=(c=o.children)!=null?c:[];delete o.children;let d=null;n.length?d=()=>n.map(e=>i(r,"node",{record:e})):d=()=>[i(r,"default")];function k(){l("ok")}function s(e){console.log(e),l("update:modelValue",!1),l("close")}return t(h,o,{default:()=>{var e;return[i(r,"edit-node",{},d),t("div",{class:"epic-modal-footer"},[t(u,{onClick:s},"\u5173\u95ED"),t(u,{type:"primary",onClick:k},(e=o.okText)!=null?e:"\u786E\u5B9A")])]}})}}});export{O as default};
