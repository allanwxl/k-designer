import{e as J,am as P,r as I,a1 as ue,G as fe,f as g,w as q,M as de,k as me,o as O,v as j,b as o,q as p,a as u,n as r,u as a,s as G,A as ve,F as _,c as E,L as H,P as pe,W as be,D as ke,E as ge,g as we,y as ye,ag as he}from"../app.88701f9d.js";import{bC as xe,i as Ce,e as ze,aW as Ie,$ as K,l as Oe,t as w,O as _e,ah as Ne,s as Te,bJ as Ae,aY as Le,bK as Re,bL as Be,U as Ee,bM as Ye,bN as $e,ad as A,p as De,a7 as z,bF as Fe}from"./index-b8b964c9.fce975b8.js";import{A as Xe,E as Me}from"./index-cceb3c2d.b2021210.js";import{z as Se}from"./debounce-fcbdcf8b.11eaad34.js";var Ve="Expected a function";function Y(h,N,b){var t=!0,f=!0;if(typeof h!="function")throw new TypeError(Ve);return xe(b)&&(t="leading"in b?!!b.leading:t,f="trailing"in b?!!b.trailing:f),Se(h,N,{leading:t,maxWait:N,trailing:f})}const We=Ce({urlList:{type:ze(Array),default:()=>Ie([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Pe={close:()=>!0,switch:h=>K(h)},qe=["src"],je=J({name:"ElImageViewer"}),Ge=J({...je,props:We,emits:Pe,setup(h,{expose:N,emit:b}){const t=h,f={CONTAIN:{name:"contain",icon:P(Ye)},ORIGINAL:{name:"original",icon:P($e)}},{t:U}=Xe(),l=Oe("image-viewer"),{nextZIndex:Q}=Me(),L=I(),$=I([]),D=ue(),x=I(!0),k=I(t.initialIndex),T=fe(f.CONTAIN),i=I({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Z=g(()=>{const{urlList:e}=t;return e.length<=1}),F=g(()=>k.value===0),X=g(()=>k.value===t.urlList.length-1),ee=g(()=>t.urlList[k.value]),ae=g(()=>[l.e("btn"),l.e("prev"),l.is("disabled",!t.infinite&&F.value)]),ne=g(()=>[l.e("btn"),l.e("next"),l.is("disabled",!t.infinite&&X.value)]),se=g(()=>{const{scale:e,deg:n,offsetX:s,offsetY:c,enableTransition:d}=i.value;let m=s/e,v=c/e;switch(n%360){case 90:case-270:[m,v]=[v,-m];break;case 180:case-180:[m,v]=[-m,-v];break;case 270:case-90:[m,v]=[-v,m];break}const C={transform:`scale(${e}) rotate(${n}deg) translate(${m}px, ${v}px)`,transition:d?"transform .3s":""};return T.value.name===f.CONTAIN.name&&(C.maxWidth=C.maxHeight="100%"),C}),te=g(()=>K(t.zIndex)?t.zIndex:Q());function R(){oe(),b("close")}function le(){const e=Y(s=>{switch(s.code){case z.esc:t.closeOnPressEscape&&R();break;case z.space:S();break;case z.left:V();break;case z.up:y("zoomIn");break;case z.right:W();break;case z.down:y("zoomOut");break}}),n=Y(s=>{const c=s.deltaY||s.deltaX;y(c<0?"zoomIn":"zoomOut",{zoomRate:t.zoomRate,enableTransition:!1})});D.run(()=>{A(document,"keydown",e),A(document,"wheel",n)})}function oe(){D.stop()}function ie(){x.value=!1}function ce(e){x.value=!1,e.target.alt=U("el.image.error")}function re(e){if(x.value||e.button!==0||!L.value)return;i.value.enableTransition=!1;const{offsetX:n,offsetY:s}=i.value,c=e.pageX,d=e.pageY,m=Y(C=>{i.value={...i.value,offsetX:n+C.pageX-c,offsetY:s+C.pageY-d}}),v=A(document,"mousemove",m);A(document,"mouseup",()=>{v()}),e.preventDefault()}function M(){i.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function S(){if(x.value)return;const e=Fe(f),n=Object.values(f),s=T.value.name,c=(n.findIndex(d=>d.name===s)+1)%e.length;T.value=f[e[c]],M()}function B(e){const n=t.urlList.length;k.value=(e+n)%n}function V(){F.value&&!t.infinite||B(k.value-1)}function W(){X.value&&!t.infinite||B(k.value+1)}function y(e,n={}){if(x.value)return;const{zoomRate:s,rotateDeg:c,enableTransition:d}={zoomRate:t.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(e){case"zoomOut":i.value.scale>.2&&(i.value.scale=Number.parseFloat((i.value.scale/s).toFixed(3)));break;case"zoomIn":i.value.scale<7&&(i.value.scale=Number.parseFloat((i.value.scale*s).toFixed(3)));break;case"clockwise":i.value.deg+=c;break;case"anticlockwise":i.value.deg-=c;break}i.value.enableTransition=d}return q(ee,()=>{de(()=>{const e=$.value[0];e!=null&&e.complete||(x.value=!0)})}),q(k,e=>{M(),b("switch",e)}),me(()=>{var e,n;le(),(n=(e=L.value)==null?void 0:e.focus)==null||n.call(e)}),N({setActiveItem:B}),(e,n)=>(O(),j(he,{to:"body",disabled:!e.teleported},[o(ye,{name:"viewer-fade",appear:""},{default:p(()=>[u("div",{ref_key:"wrapper",ref:L,tabindex:-1,class:r(a(l).e("wrapper")),style:G({zIndex:a(te)})},[u("div",{class:r(a(l).e("mask")),onClick:n[0]||(n[0]=ve(s=>e.hideOnClickModal&&R(),["self"]))},null,2),_(" CLOSE "),u("span",{class:r([a(l).e("btn"),a(l).e("close")]),onClick:R},[o(a(w),null,{default:p(()=>[o(a(_e))]),_:1})],2),_(" ARROW "),a(Z)?_("v-if",!0):(O(),E(H,{key:0},[u("span",{class:r(a(ae)),onClick:V},[o(a(w),null,{default:p(()=>[o(a(Ne))]),_:1})],2),u("span",{class:r(a(ne)),onClick:W},[o(a(w),null,{default:p(()=>[o(a(Te))]),_:1})],2)],64)),_(" ACTIONS "),u("div",{class:r([a(l).e("btn"),a(l).e("actions")])},[u("div",{class:r(a(l).e("actions__inner"))},[o(a(w),{onClick:n[1]||(n[1]=s=>y("zoomOut"))},{default:p(()=>[o(a(Ae))]),_:1}),o(a(w),{onClick:n[2]||(n[2]=s=>y("zoomIn"))},{default:p(()=>[o(a(Le))]),_:1}),u("i",{class:r(a(l).e("actions__divider"))},null,2),o(a(w),{onClick:S},{default:p(()=>[(O(),j(pe(a(T).icon)))]),_:1}),u("i",{class:r(a(l).e("actions__divider"))},null,2),o(a(w),{onClick:n[3]||(n[3]=s=>y("anticlockwise"))},{default:p(()=>[o(a(Re))]),_:1}),o(a(w),{onClick:n[4]||(n[4]=s=>y("clockwise"))},{default:p(()=>[o(a(Be))]),_:1})],2)],2),_(" CANVAS "),u("div",{class:r(a(l).e("canvas"))},[(O(!0),E(H,null,be(e.urlList,(s,c)=>ke((O(),E("img",{ref_for:!0,ref:d=>$.value[c]=d,key:s,src:s,style:G(a(se)),class:r(a(l).e("img")),onLoad:ie,onError:ce,onMousedown:re},null,46,qe)),[[ge,c===k.value]])),128))],2),we(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var He=De(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Ze=Ee(He);export{Pe as B,We as D,Ze as q};
