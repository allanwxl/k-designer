import{e as y,o as B,c as S,a as g,D as $,al as z,u as e,a3 as G,n as b,g as V,N,O as U,A as M,f as v,s as J,r as R,k as O,p as P,h as Q,t as W,w as X,j as Y,M as F}from"../app.88701f9d.js";import{i as h,g as j,N as _,I as E,$ as I,x as C,E as Z,l as w,aP as ee,h as ae,U as le,b4 as A,n as oe,J as re,p as x}from"./index-b8b964c9.fce975b8.js";import{U as se,_ as ne}from"./use-form-item-37b15378.4ebba814.js";const D=h({size:j,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),te=h({...D,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),K={[_]:r=>E(r)||I(r)||C(r),[Z]:r=>E(r)||I(r)||C(r)},T=Symbol("radioGroupKey"),q=(r,c)=>{const s=R(),l=Y(T,void 0),i=v(()=>!!l),m=v({get(){return i.value?l.modelValue:r.modelValue},set(d){i.value?l.changeEvent(d):c&&c(_,d),s.value.checked=r.modelValue===r.label}}),t=oe(v(()=>l==null?void 0:l.size)),u=re(v(()=>l==null?void 0:l.disabled)),o=R(!1),p=v(()=>u.value||i.value&&m.value!==r.label?-1:0);return{radioRef:s,isGroup:i,radioGroup:l,focus:o,size:t,disabled:u,tabIndex:p,modelValue:m}},de=["value","name","disabled"],ie=y({name:"ElRadio"}),ue=y({...ie,props:te,emits:K,setup(r,{emit:c}){const s=r,l=w("radio"),{radioRef:i,radioGroup:m,focus:t,size:u,disabled:o,modelValue:p}=q(s,c);function d(){F(()=>c("change",p.value))}return(a,n)=>{var f;return B(),S("label",{class:b([e(l).b(),e(l).is("disabled",e(o)),e(l).is("focus",e(t)),e(l).is("bordered",a.border),e(l).is("checked",e(p)===a.label),e(l).m(e(u))])},[g("span",{class:b([e(l).e("input"),e(l).is("disabled",e(o)),e(l).is("checked",e(p)===a.label)])},[$(g("input",{ref_key:"radioRef",ref:i,"onUpdate:modelValue":n[0]||(n[0]=k=>G(p)?p.value=k:null),class:b(e(l).e("original")),value:a.label,name:a.name||((f=e(m))==null?void 0:f.name),disabled:e(o),type:"radio",onFocus:n[1]||(n[1]=k=>t.value=!0),onBlur:n[2]||(n[2]=k=>t.value=!1),onChange:d},null,42,de),[[z,e(p)]]),g("span",{class:b(e(l).e("inner"))},null,2)],2),g("span",{class:b(e(l).e("label")),onKeydown:n[3]||(n[3]=M(()=>{},["stop"]))},[V(a.$slots,"default",{},()=>[N(U(a.label),1)])],34)],2)}}});var pe=x(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ce=h({...D,name:{type:String,default:""}}),me=["value","name","disabled"],be=y({name:"ElRadioButton"}),fe=y({...be,props:ce,setup(r){const c=r,s=w("radio"),{radioRef:l,focus:i,size:m,disabled:t,modelValue:u,radioGroup:o}=q(c),p=v(()=>({backgroundColor:(o==null?void 0:o.fill)||"",borderColor:(o==null?void 0:o.fill)||"",boxShadow:o!=null&&o.fill?`-1px 0 0 0 ${o.fill}`:"",color:(o==null?void 0:o.textColor)||""}));return(d,a)=>{var n;return B(),S("label",{class:b([e(s).b("button"),e(s).is("active",e(u)===d.label),e(s).is("disabled",e(t)),e(s).is("focus",e(i)),e(s).bm("button",e(m))])},[$(g("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":a[0]||(a[0]=f=>G(u)?u.value=f:null),class:b(e(s).be("button","original-radio")),value:d.label,type:"radio",name:d.name||((n=e(o))==null?void 0:n.name),disabled:e(t),onFocus:a[1]||(a[1]=f=>i.value=!0),onBlur:a[2]||(a[2]=f=>i.value=!1)},null,42,me),[[z,e(u)]]),g("span",{class:b(e(s).be("button","inner")),style:J(e(u)===d.label?e(p):{}),onKeydown:a[3]||(a[3]=M(()=>{},["stop"]))},[V(d.$slots,"default",{},()=>[N(U(d.label),1)])],38)],2)}}});var L=x(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const ve=h({id:{type:String,default:void 0},size:j,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ge=K,ye=["id","aria-label","aria-labelledby"],he=y({name:"ElRadioGroup"}),ke=y({...he,props:ve,emits:ge,setup(r,{emit:c}){const s=r,l=w("radio"),i=ee(),m=R(),{formItem:t}=se(),{inputId:u,isLabeledByFormItem:o}=ne(s,{formItemContext:t}),p=a=>{c(_,a),F(()=>c("change",a))};O(()=>{const a=m.value.querySelectorAll("[type=radio]"),n=a[0];!Array.from(a).some(f=>f.checked)&&n&&(n.tabIndex=0)});const d=v(()=>s.name||i.value);return P(T,Q({...W(s),changeEvent:p,name:d})),X(()=>s.modelValue,()=>{s.validateEvent&&(t==null||t.validate("change").catch(a=>ae()))}),(a,n)=>(B(),S("div",{id:e(u),ref_key:"radioGroupRef",ref:m,class:b(e(l).b("group")),role:"radiogroup","aria-label":e(o)?void 0:a.label||"radio-group","aria-labelledby":e(o)?e(t).labelId:void 0},[V(a.$slots,"default")],10,ye))}});var H=x(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Ve=le(pe,{RadioButton:L,RadioGroup:H}),_e=A(H),we=A(L);export{Ve as I,K as L,D as M,T as U,_e as V,we as _,ge as g,ce as m,te as r,ve as v};
