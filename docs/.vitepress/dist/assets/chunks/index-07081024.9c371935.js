import{e as M,j as V,f as L,o as B,c as H,b as F,q as Q,a as x,s as re,r as D,w as W,k as ce,D as G,E as X,u as i,O as ne,n as Y,L as de,S as fe,v as z,W as ge,F as xe,g as ye,A as Z,m as be,a3 as oe,M as Ne}from"../app.88701f9d.js";import{_ as ve,R as A,y as K,P as se,a as ke,k as we,B as Ce,D as Se,F as _e,b as Re,L as ie,K as $e,Q as ue,T as J,w as Te}from"./index-b8b964c9.fce975b8.js";import{R as De}from"./vuedraggable.umd-6a5b6da9.a81b27de.js";import"./commonjsHelpers-c5d32002.490f5bf3.js";const Be={class:"action-item whitespace-nowrap"},Ie=x("span",{class:"iconfont icon-fuzhi3"},null,-1),Ee=[Ie],Ve=x("span",{class:"iconfont icon-shanchu1"},null,-1),Fe=[Ve],Le=M({__name:"previewWidgets",setup(E){const y=V("pageManager",{}),m=V("pageSchema"),e=V("designer"),c=D(null),p=D(null),s=D(null),_=D(!1),S=D(!1),w=D(!0),{canvasScale:o}=ve();let a=null;const d=L(()=>{var T;var l,v,r,C,f;const g=y.componentInstances.value,N=(l=e.state.checkedNode)==null?void 0:l.id,b=(T=A.getComponentConfingByType((v=e.state.checkedNode)==null?void 0:v.type))!=null?T:null;if(!N||!(g!=null&&g[N]))return null;if(b!=null&&b.defaultSchema.input&&((r=e.state.checkedNode)==null?void 0:r.noFormItem)!==!0)return(C=g[N+"formItem"])==null?void 0:C.$el;const k=g[N];return((f=k==null?void 0:k.$el)==null?void 0:f.nodeName)==="#text"?null:k==null?void 0:k.$el}),t=L(()=>{var k;var l,v,r,C;const f=y.componentInstances.value,g=(l=e.state.hoverNode)==null?void 0:l.id,N=(k=A.getComponentConfingByType((v=e.state.hoverNode)==null?void 0:v.type))!=null?k:null;if(!g||!(f!=null&&f[g]))return null;if(N!=null&&N.defaultSchema.input&&((r=e.state.hoverNode)==null?void 0:r.noFormItem)!==!0)return(C=f[g+"formItem"])==null?void 0:C.$el;const b=f[g];return(b==null?void 0:b.$el.nodeName)==="#text"?null:b==null?void 0:b.$el}),{mutationObserver:h,observerConfig:$}=te(I),{startTimedQuery:u,stopTimedQuery:n}=Re(I);W(()=>d.value,l=>{if(l){_.value=!0,h.observe(l,$);const v=l.parentNode;v&&(v.ondragstart=()=>{w.value=!1,u()},v.ondragend=()=>{w.value=!0,n()}),I()}else _.value=!1});const{mutationObserver:R,observerConfig:P}=te(ee);W(()=>t.value,l=>{l&&(R.observe(l,P),ee())});let U=0;W(()=>{var l;return(l=e.state.hoverNode)==null?void 0:l.id},l=>{S.value=!0,clearTimeout(U),!l&&(U=setTimeout(()=>{S.value=!1},300))});function I(){var q,j,O;const l=d.value;if(!l)return;const{top:v,left:r}=(q=a==null?void 0:a.getBoundingClientRect())!=null?q:{top:0,left:0},{top:C,left:f,width:g,height:N}=l.getBoundingClientRect(),b=C-v+((j=a==null?void 0:a.scrollTop)!=null?j:0)*o.value,k=f-r+((O=a==null?void 0:a.scrollLeft)!=null?O:0)*o.value,T=N/o.value;c.value&&(c.value.style.width=`${g/o.value}px`,c.value.style.height=`${T}px`,c.value.style.top=`${b/o.value}px`,c.value.style.left=`${k/o.value}px`),s.value&&(b<45&&T<100?(s.value.style.top="",s.value.style.bottom="-30px",s.value.style["border-radius"]="0px 0px 4px 4px"):b<45?(s.value.style.top="0px",s.value.style["border-radius"]="0px 0px 4px 0"):(s.value.style.top="-30px",s.value.style["border-radius"]="4px 4px 0px 0px"))}function ee(){var j,O,le,ae;var l,v;const r=t.value;if(!r)return;const{top:C,left:f}=(j=a==null?void 0:a.getBoundingClientRect())!=null?j:{top:0,left:0},{top:g,left:N,width:b,height:k}=(O=(l=r.getBoundingClientRect)==null?void 0:l.call(r))!=null?O:(v=r.nextElementSibling)==null?void 0:v.getBoundingClientRect(),T=g-C+((le=a==null?void 0:a.scrollTop)!=null?le:0)*o.value,q=N-f+((ae=a==null?void 0:a.scrollLeft)!=null?ae:0)*o.value;p.value&&(p.value.style.width=`${b/o.value}px`,p.value.style.height=`${k/o.value}px`,p.value.style.top=`${T/o.value}px`,p.value.style.left=`${q/o.value}px`)}function te(l){const v=window.MutationObserver,r={childList:!0,attributes:!0,subtree:!0};return{mutationObserver:new v(l),observerConfig:r}}function me(){var k;var l,v;const r=ie(m.schemas,(k=(l=e.state.checkedNode)==null?void 0:l.id)!=null?k:"root");if(!r)return!1;const{list:C,schema:f,index:g}=r,N=$e({...f,id:ue()});C.splice(g+1,0,N);const b=N.children?[...N.children]:[];for(;b.length>0;){const T=b.pop();T.id=ue(),((v=T.children)==null?void 0:v.length)>0&&b.push(...T.children)}e.setCheckedNode(N),J.push(m.schemas,"\u590D\u5236\u7EC4\u4EF6")}function he(){var g;var l;const v=ie(m.schemas,(g=(l=e.state.checkedNode)==null?void 0:l.id)!=null?g:"root");if(!v)return!1;let{list:r,schema:C,index:f}=v;r.splice(f,1),f===r.length&&f--,e.setCheckedNode(r[f]),J.push(m.schemas,"\u5220\u9664\u7EC4\u4EF6")}return ce(()=>{a=document.querySelector(".epic-edit-range"),a==null||a.addEventListener("scroll",()=>{I()}),K(d,I),K(t,I)}),(l,v)=>{var b,k;var r,C,f,g,N;return B(),H(de,null,[G(x("div",{ref_key:"selectorRef",ref:c,class:Y(["checked-widget absolute pointer-events-none z-20",{"transition-all":w.value}])},[x("div",{class:"action-box",ref_key:"actionBoxRef",ref:s},[x("div",Be,ne((r=i(e).state.checkedNode)==null?void 0:r.type)+" "+ne((k=(C=i(e).state.checkedNode)==null?void 0:C.label)!=null?k:(g=i(A).getComponentConfingByType((b=(f=i(e).state.checkedNode)==null?void 0:f.type)!=null?b:""))==null?void 0:g.defaultSchema.label),1),x("div",{title:"\u590D\u5236",class:"action-item pointer-events-auto",onClick:me},Ee),x("div",{title:"\u5220\u9664",class:"action-item pointer-events-auto",onClick:he},Fe)],512)],2),[[X,_.value&&((N=i(e).state.checkedNode)==null?void 0:N.id)!=="root"]]),G(x("div",{ref_key:"hoverWidgetRef",ref:p,class:"hover-widget absolute transition-all pointer-events-none z-998"},null,512),[[X,S.value]])],64)}}}),Me=["index","onClick","onMouseover"],Pe=M({__name:"editNodeItem",props:{schemas:{}},emits:["update:schemas"],setup(E,{emit:y}){const m=E,e=V("designer"),c=V("pageSchema"),p=L({get(){return m.schemas},set(w){y("update:schemas",w)}});function s(w){e.setCheckedNode(p.value[w])}function _(){e.setDisableHover(),J.push(c.schemas,"\u62D6\u62FD\u7EC4\u4EF6")}function S(){J.push(c.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(w,o)=>(B(),z(i(De),be({modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=a=>p.value=a),"item-key":"id","component-data":{name:"draggable-range",type:"transition-group"},class:"draggable-range"},{animation:200,group:"edit-draggable",ghostClass:"moveing"},{onStart:o[2]||(o[2]=a=>{s(a.oldIndex),i(e).setDisableHover(!0)}),onEnd:o[3]||(o[3]=a=>_()),onAdd:o[4]||(o[4]=a=>{s(a.newIndex),S()})}),{item:Q(({element:a,index:d})=>[x("div",{index:d,onClick:Z(t=>i(e).setCheckedNode(a),["stop"]),onMouseover:Z(t=>i(e).setHoverNode(a),["stop"]),onMouseout:o[0]||(o[0]=Z(t=>i(e).setHoverNode(null),["stop"]))},[F(pe,{schema:a},null,8,["schema"])],40,Me)]),_:1},16,["modelValue"]))}}),pe=M({name:"ENodeItem",__name:"nodeItem",props:{schema:{}},setup(E){const y=E;return(m,e)=>{var c;const p=fe("ENodeItem");return["row","tabs"].includes((c=y.schema)==null?void 0:c.type)?(B(),z(i(se),{key:0,record:y.schema},{"edit-node":Q(()=>[(B(!0),H(de,null,ge(y.schema.children,s=>(B(),z(p,{key:s.id,schema:s},null,8,["schema"]))),128))]),_:1},8,["record"])):(B(),z(i(se),{key:1,record:y.schema},{"edit-node":Q(()=>[y.schema.children?(B(),z(Pe,{key:0,schemas:y.schema.children,"onUpdate:schemas":e[0]||(e[0]=s=>y.schema.children=s)},null,8,["schemas"])):xe("",!0)]),_:1},8,["record"]))}}}),Ue={class:"edit-toolbar flex items-center justify-end text-gray-500 px-4"},je=x("span",{class:"icon iconfont"},"\uE60B",-1),Oe=[je],ze=x("span",{class:"icon iconfont"},"\uE60C",-1),Ae={class:"pr-8px w-82px cursor-pointer"},He={class:"w-90px cursor-pointer"},qe=M({__name:"toolbar",setup(E){const y=A.getComponent("slider"),m=A.getComponent("select"),{canvasScale:e}=ve(),c=V("pageSchema"),p=D(null),s=L({get(){return`${(e.value*100).toFixed(0)}%`},set(d){e.value=Number(d)}}),_=[{label:"60%",value:"0.6"},{label:"80%",value:"0.8"},{label:"100%",value:"1.0"},{label:"120%",value:"1.2"},{label:"140%",value:"1.4"}];function S(d="demo.json"){let t="data:text/json;charset=utf-8,";t+=JSON.stringify(c,null,2);var h=encodeURI(t),$=document.createElement("a");$.setAttribute("href",h),$.setAttribute("download",d),$.click()}function w(){var d;(d=p.value)==null||d.click()}function o(d){var t;const h=(t=d.target.files)==null?void 0:t[0];if(!h)return;d.target.value=null;const $=new FileReader;$.readAsText(h),$.onload=u=>{var n;a((n=u.target)==null?void 0:n.result)}}function a(d){try{const t=JSON.parse(d!=null?d:"");Te(c,t)}catch(t){console.error(t)}}return(d,t)=>(B(),H("div",Ue,[x("div",{title:"\u5BFC\u51FA",class:"pr-16px cursor-pointer",onClick:t[0]||(t[0]=h=>S("demo.json"))},Oe),x("div",{title:"\u5BFC\u5165",class:"pr-16px cursor-pointer",onClick:t[1]||(t[1]=h=>w())},[ze,G(x("input",{type:"file",ref_key:"fileRef",ref:p,onChange:o},null,544),[[X,!1]])]),x("div",Ae,[F(i(m),{value:s.value,"onUpdate:value":t[2]||(t[2]=h=>s.value=h),modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=h=>s.value=h),options:_,size:"small"},null,8,["value","modelValue"])]),x("div",He,[F(i(y),{min:.2,max:2,step:.1,tooltip:!1,value:i(e),"onUpdate:value":t[4]||(t[4]=h=>oe(e)?e.value=h:null),modelValue:i(e),"onUpdate:modelValue":t[5]||(t[5]=h=>oe(e)?e.value=h:null)},null,8,["value","modelValue"])])]))}}),We={class:"h-full flex flex-col relative"},Qe=["draggable"],Ke=M({__name:"editScreenContainer",props:{rootSchema:{}},setup(E){const y=E,m=D(null),e=D(null),{pressSpace:c}=ke(),{handleElementDragStart:p,handleElementDrag:s,handleElementDragEnd:_}=we(m),{width:S,height:w}=Ce(m),{canvasScale:o,handleZoom:a}=Se(e),d=D({}),t=L(()=>{var U,I;var u,n;const R=parseFloat((U=(u=y.rootSchema.componentProps.style)==null?void 0:u.width)!=null?U:1320),P=parseFloat((I=(n=y.rootSchema.componentProps.style)==null?void 0:n.height)!=null?I:800);return{width:R,height:P}});_e(S,()=>{h(),$()}),W(()=>y.rootSchema.componentProps.style.width,h);function h(){let u=t.value.width,n=t.value.height;(Number.isNaN(u)||u<S.value)&&(u=S.value),(Number.isNaN(n)||u<w.value)&&(n=w.value),d.value={width:S.value+u+"px",height:w.value+n+"px"}}function $(){Ne(()=>{let u=t.value.width,n=t.value.height;(Number.isNaN(u)||u<S.value)&&(u=S.value),(Number.isNaN(n)||u<w.value)&&(n=w.value);const R=n/2,P=u/2;m.value.scrollTo(P,R)})}return K(m,([{contentRect:u}])=>{const n=(u.width-20)/t.value.width;n<1.2&&(o.value=n),h(),$()}),ce(()=>{K(m,([{contentRect:u}])=>{const n=(u.width-20)/t.value.width;n<1.2?o.value=n:o.value=1.2,h(),$()})}),(u,n)=>(B(),H("div",We,[F(qe),x("div",{ref_key:"editScreenContainerRef",ref:m,class:Y(["flex-1 overflow-auto epic-edit-screen-container",{"cursor-grab":i(c)}]),draggable:i(c),onWheel:n[0]||(n[0]=(...R)=>i(a)&&i(a)(...R)),onDragstart:n[1]||(n[1]=(...R)=>i(p)&&i(p)(...R)),onDragend:n[2]||(n[2]=(...R)=>i(_)&&i(_)(...R)),onDrag:n[3]||(n[3]=(...R)=>i(s)&&i(s)(...R))},[x("div",{id:"canvasContainer",class:"flex items-center justify-center",style:re(d.value)},[x("div",{ref_key:"draggableElRef",ref:e,class:"transition-all"},[x("div",{class:Y({"pointer-events-none":i(c)})},[ye(u.$slots,"default")],2)],512)],4)],42,Qe)]))}}),Je={class:"epic-edit-canvas"},et=M({__name:"index",setup(E){const y=V("pageSchema"),m=L(()=>y.schemas[0]),e=L(()=>{var s,_;var c,p;return{width:(s=(c=m.value.componentProps.style)==null?void 0:c.width)!=null?s:"1320px",height:(_=(p=m.value.componentProps.style)==null?void 0:p.height)!=null?_:"800px"}});return(c,p)=>(B(),H("section",Je,[F(Ke,{"root-schema":m.value},{default:Q(()=>[x("div",{class:"epic-edit-range rounded-md overflow-auto relative",style:re(e.value)},[F(pe,{schema:m.value},null,8,["schema"]),F(Le)],4)]),_:1},8,["root-schema"])]))}});export{et as default};
