import{R as f,a as V}from"./index-9f785207.e6578421.js";import{e as b,f as h,o as t,c as o,M as k,X as C,b as d,d as y,u as U,F as g}from"../app.f47f61a8.js";const B={key:0,class:"del-btn"},E=["onClick"],N=d("span",{class:"iconfont icon-shanchu"},null,-1),R=[N],_=b({__name:"index",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(u,{emit:i}){const c=u,m=f.getComponent("input"),l=h({get(){return c.modelValue},set(e){i("update:modelValue",e)}});function p(){const e={label:"\u6807\u7B7E\u9875",type:"tab-pane",children:[],id:V()};l.value.push(e)}function r(e){l.value=l.value.filter((v,a)=>e!==a)}return(e,v)=>(t(),o("div",null,[(t(!0),o(k,null,C(l.value,(a,s)=>(t(),o("div",{key:s,class:"EColEditor-item"},[y(U(m),{value:a.label,"onUpdate:value":n=>a.label=n,modelValue:a.label,"onUpdate:modelValue":n=>a.label=n,style:{width:"100%"}},null,8,["value","onUpdate:value","modelValue","onUpdate:modelValue"]),l.value.length>1?(t(),o("div",B,[d("span",{onClick:n=>r(s)},R,8,E)])):g("",!0)]))),128)),d("div",{class:"add-btn",onClick:p}," \u6DFB\u52A0 ")]))}});export{_ as default};
