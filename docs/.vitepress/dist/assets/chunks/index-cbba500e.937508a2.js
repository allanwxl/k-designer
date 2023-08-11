import{e as M,r as b,f as w,w as T,o as p,c as v,d as N,q as A,M as L,X as D,u as I,j as R,h as X,v as B,b as n,n as S,O as K,P as U,D as Z,E as q,Z as z,F as H,N as P}from"../app.f47f61a8.js";import{R as _,L as F,e as W}from"./index-9f785207.e6578421.js";import{R as Y}from"./vuedraggable.umd-6a5b6da9.995dc650.js";import{H as $}from"./tree.vue_vue_type_script_setup_true_lang-893a6b0b.d07a4327.js";import"./commonjsHelpers-c5d32002.490f5bf3.js";const G={class:"event-info"},J=["title"],Q={class:"event-btn"},ee=["onClick"],te={class:"epic-action-editor-main"},le={class:"epic-editor-item"},ae=n("div",{class:"w-36px text-lg"},[n("span",{class:"iconfont icon-tuozhuai mr-2 text-lg cursor-move handle"})],-1),ne={class:"flex-1"},oe={key:0},ie={key:1},ce={key:2},ue={class:"opr-box"},se=["onClick"],de=n("span",{class:"iconfont icon-edit"},null,-1),me=[de],pe=["onClick"],ve=n("span",{class:"iconfont icon-shanchu"},null,-1),re=[ve],fe=M({__name:"EActionEditorItem",props:{itemEvents:{type:Array,default:()=>[]},allEvents:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>[]},events:{type:Object,default:()=>({})}},emits:["add","edit","update:modelValue"],setup(C,{emit:f}){const m=C,k=R("pageSchema");function r(u){f("add",u)}function h(u){const{schema:i}=F(k.schemas,u);return i.label}function y(u,i){var e;const o=d(i);o[i]=m.events[i].filter((x,V)=>u!==V),(e=o[i])!=null&&e.length||delete o[i],f("update:modelValue",o)}function s(u,i,e){f("edit",u,i,e)}function d(u){const i={};return m.allEvents.forEach(e=>{if(!m.events[e.type].length||e.type===u)return!1;i[e.type]=m.events[e.type]}),i}return(u,i)=>(p(!0),v(L,null,D(C.itemEvents,e=>(p(),v("div",{key:e.type,class:"event-item"},[n("div",G,[n("div",{class:"event-label",title:e.describe},U(e.describe),9,J),n("div",Q,[n("span",{class:"iconfont icon-tianjia1",onClick:o=>r(e.type)},null,8,ee)])]),n("div",te,[N(I(Y),{modelValue:m.events[e.type],"onUpdate:modelValue":o=>m.events[e.type]=o,"item-key":"id","component-data":{type:"transition-group"},group:"option-list",handle:".handle",animation:200},{item:A(({element:o,index:x})=>[n("div",le,[ae,n("div",ne,[o.type==="component"?(p(),v("div",oe,U(h(o.componentId)),1)):o.type==="public"?(p(),v("div",ie," \u516C\u5171\u51FD\u6570 ")):o.type==="custom"?(p(),v("div",ce," \u81EA\u5B9A\u4E49\u51FD\u6570 ")):H("",!0),K(" "+U(o.methodName),1)]),n("div",ue,[n("div",{class:"edit-btn",onClick:V=>s(x,e.type,o)},me,8,se),n("div",{class:"del-btn",onClick:V=>y(x,e.type)},re,8,pe)])])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))}}),he={class:"h-full flex flex-col"},ye=n("div",{class:"pb-2"}," \u81EA\u5B9A\u4E49\u51FD\u6570\u7F16\u8F91 ",-1),Ie=M({__name:"EScriptEdit",setup(C){const f=_.getComponent("monacoEditor"),m={theme:"vs-light",selectOnLineNumbers:!0,minimap:{enabled:!1}},k=b(null),r=R("pageSchema");return(h,y)=>(p(),v("div",he,[ye,N(I(f),{ref_key:"monacoEditorRef",ref:k,modelValue:I(r).script,"onUpdate:modelValue":y[0]||(y[0]=s=>I(r).script=s),class:"editor flex-1",config:m,language:"javascript"},null,8,["modelValue"])]))}}),ge={class:"rounded bg-white epic-modal-action-main"},be={class:"epic-modal-left-panel h-full flex flex-col"},ke={class:"flex-1"},xe={class:"h-360px overflow-auto"},Ve={class:"epic-action-select h-240px flex flex-col"},Ce=n("div",{class:"mb-2"},"\u52A8\u4F5C\u9009\u62E9",-1),Ee={class:"flex-1 overflow-auto"},Ne=["onClick"],_e={class:"text-center pt-42px text-gray-400"},we={class:"epic-modal-right-panel"},Oe={key:1,class:"text-center pt-42px text-gray-400"},je=M({__name:"EActionModal",emits:["add","edit"],setup(C,{expose:f,emit:m}){const k=_.getComponent("modal"),r=b(!0),h=R("pageSchema"),y=R("pageManager",{}),s=b(!1),d=b([]),u=b(null),i=w(()=>{var t;return e.actionItem.type==="component"?u.value?(t=_.getComponentConfings()[u.value.type].config.action)==null?void 0:t.map(a=>({label:a.describe,value:a.type})):[]:e.actionItem.type==="custom"?Object.entries(y.funcs.value).filter(([a,E])=>typeof E=="function").map(([a])=>({label:a,value:a})):e.actionItem.type==="public"?Object.entries(_.publicMethods).map(([a])=>({label:a,value:a})):[]}),e=X({actionItem:{type:"public",methodName:"test",componentId:null}});function o(){var t;s.value=!0,r.value=!0,e.actionItem.type="public",e.actionItem.componentId=null,(t=i.value)!=null&&t.length&&l(i.value[0].value)}function x(t){if(s.value=!0,r.value=!1,u.value=null,t.componentId){const{schema:a}=F(h.schemas,t.componentId);u.value=a,d.value=[t.componentId]}P(()=>{e.actionItem.componentId=t.componentId,e.actionItem.methodName=t.methodName,e.actionItem.type=t.type})}function V(){if(!e.actionItem.methodName){alert("\u8BF7\u5148\u9009\u62E9\u52A8\u4F5C\u65B9\u6CD5");return}m(r.value?"add":"edit",W(z(e.actionItem))),O()}function O(){s.value=!1,d.value=[]}function j(t){var a;e.actionItem.componentId=null,e.actionItem.type=t,u.value=null,e.actionItem.methodName=null,d.value=[],(a=i.value)!=null&&a.length&&l(i.value[0].value)}function c(t){var a;e.actionItem.componentId=t.id,e.actionItem.type="component",e.actionItem.methodName=null,u.value=t.record,(a=i.value)!=null&&a.length&&l(i.value[0].value)}function l(t){e.actionItem.methodName=t}return f({handleOpen:o,handleOpenEdit:x}),(t,a)=>(p(),B(I(k),{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=E=>s.value=E),class:"w-1100px",width:"1100px",onClose:O,onOk:V,title:"\u52A8\u4F5C\u914D\u7F6E"},{default:A(()=>{var E;return[n("div",ge,[n("div",be,[n("div",ke,[n("div",{class:S(["fun-btn",{checked:e.actionItem.type==="public"}]),onClick:a[0]||(a[0]=g=>j("public"))}," \u516C\u5171\u51FD\u6570 ",2),n("div",{class:S(["fun-btn",{checked:e.actionItem.type==="custom"}]),onClick:a[1]||(a[1]=g=>j("custom"))}," \u81EA\u5B9A\u4E49\u51FD\u6570 ",2),K(" \u7EC4\u4EF6 "),n("div",xe,[N(I($),{selectedKeys:d.value,"onUpdate:selectedKeys":a[2]||(a[2]=g=>d.value=g),options:I(h).schemas,onNodeClick:c},null,8,["selectedKeys","options"])])]),n("div",Ve,[Ce,n("div",Ee,[(p(!0),v(L,null,D(i.value,g=>(p(),v("div",{class:S([{checked:g.value===e.actionItem.methodName},"action-item"]),onClick:Ue=>l(g.value),key:g.value},[n("span",null,U(g.label),1)],10,Ne))),128)),Z(n("div",_e,"\u5F53\u524D\u7EC4\u4EF6\u6682\u65E0\u52A8\u4F5C",512),[[q,!((E=i.value)!=null&&E.length)]])])])]),n("div",we,[e.actionItem.type==="custom"?(p(),B(Ie,{key:0})):(p(),v("div",Oe,"\u6682\u65E0\u914D\u7F6E"))])])]}),_:1},8,["modelValue"]))}}),Be=M({__name:"index",props:{eventList:{type:Array,default:()=>[]},modelValue:{type:Object}},emits:["update:modelValue"],setup(C,{emit:f}){const m=C,k=_.getComponent("Collapse"),r=_.getComponent("CollapseItem"),h=b(null);let y=0;const s=w({get(){return m.modelValue},set(c){f("update:modelValue",c)}}),d=b(["\u7EC4\u4EF6\u4E8B\u4EF6"]),u=w(()=>m.eventList.filter(c=>c.events.length));T(()=>u.value,c=>{c.length&&(d.value=c[0].title)},{immediate:!0});const i=w(()=>m.eventList.map(c=>c.events).flat()),e=b({});i.value.forEach(c=>{e.value[c.type]=w({get(){var t;var l;return(t=(l=s.value)==null?void 0:l[c.type])!=null?t:[]},set(l){l&&l.length?s.value[c.type]=l.map(t=>z(t)):delete s.value[c.type]}})});let o="";function x(c){var l;(l=h.value)==null||l.handleOpen(),o=c}function V(c,l,t){var a;(a=h.value)==null||a.handleOpenEdit(t),y=c,o=l}function O(c){var l;e.value[o][y]=c,s.value[o]=[...(l=e.value[o])!=null?l:[]]}function j(c){var l,t;if(!s.value){s.value={[o]:[...(l=e.value[o])!=null?l:[],c]};return}s.value[o]=[...(t=e.value[o])!=null?t:[],c]}return(c,l)=>(p(),v(L,null,[N(I(k),{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=t=>d.value=t),activeEey:d.value,"onUpdate:activeEey":l[2]||(l[2]=t=>d.value=t),"expanded-names":d.value,"onUpdate:expandedNames":l[3]||(l[3]=t=>d.value=t)},{default:A(()=>[(p(!0),v(L,null,D(u.value,t=>(p(),B(I(r),{key:t.title,title:t.title,header:t.title,name:t.title},{default:A(()=>[N(fe,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=a=>s.value=a),"item-events":t.events,"all-events":i.value,events:e.value,onAdd:x,onEdit:V},null,8,["modelValue","item-events","all-events","events"])]),_:2},1032,["title","header","name"]))),128))]),_:1},8,["modelValue","activeEey","expanded-names"]),N(je,{ref_key:"EActionModalRef",ref:h,onAdd:j,onEdit:O},null,512)],64))}});export{Be as default};
