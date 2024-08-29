import{b as ee,G as O,H as D,I as oe,J as se,K as te,M as re,_,j as x,c as I,N as ae,q as w,o as E,O as G,p as H,s as q,A as le,C as ne,t as U,u as W,T as z}from"./Wrapper-DXvvO_B0.js";import{_ as c}from"./isNativeReflectConstruct-CJAgTEKr.js";import{r as L}from"./index-CTjT7uj6.js";import{u as J,f as ce}from"./useFormControl-Baz_U5RD.js";import{u as ie}from"./useControlled-5JjQu8rW.js";import{c as de}from"./createStyled-D6A6HRKR.js";const ue=de(),pe=["component","direction","spacing","divider","children","className","useFlexGap"],me=ee(),fe=ue("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function he(e){return ae({props:e,name:"MuiStack",defaultTheme:me})}function be(e,o){const t=L.Children.toArray(e).filter(Boolean);return t.reduce((r,l,s)=>(r.push(l),s<t.length-1&&r.push(L.cloneElement(o,{key:`separator-${s}`})),r),[])}const ge=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ye=({ownerState:e,theme:o})=>{let t=c({display:"flex",flexDirection:"column"},O({theme:o},D({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=oe(o),l=Object.keys(o.breakpoints.values).reduce((a,n)=>((typeof e.spacing=="object"&&e.spacing[n]!=null||typeof e.direction=="object"&&e.direction[n]!=null)&&(a[n]=!0),a),{}),s=D({values:e.direction,base:l}),u=D({values:e.spacing,base:l});typeof s=="object"&&Object.keys(s).forEach((a,n,g)=>{if(!s[a]){const C=n>0?s[g[n-1]]:"column";s[a]=C}}),t=se(t,O({theme:o},u,(a,n)=>e.useFlexGap?{gap:G(r,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ge(n?s[n]:e.direction)}`]:G(r,a)}}))}return t=te(o.breakpoints,t),t};function Ce(e={}){const{createStyledComponent:o=fe,useThemeProps:t=he,componentName:r="MuiStack"}=e,l=()=>w({root:["root"]},a=>E(r,a),{}),s=o(ye);return L.forwardRef(function(a,n){const g=t(a),y=re(g),{component:C="div",direction:F="column",spacing:j=0,divider:R,children:i,className:k,useFlexGap:p=!1}=y,B=_(y,pe),N={direction:F,spacing:j,useFlexGap:p},P=l();return x.jsx(s,c({as:C,ownerState:N,ref:n,className:I(P.root,k)},B,{children:R?be(i,R):i}))})}function ke(e){return E("PrivateSwitchBase",e)}H("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Pe=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ve=e=>{const{classes:o,checked:t,disabled:r,edge:l}=e,s={root:["root",t&&"checked",r&&"disabled",l&&`edge${U(l)}`],input:["input"]};return w(s,ke,o)},xe=q(le)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Fe=q("input",{shouldForwardProp:ne})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),_e=L.forwardRef(function(o,t){const{autoFocus:r,checked:l,checkedIcon:s,className:u,defaultChecked:b,disabled:a,disableFocusRipple:n=!1,edge:g=!1,icon:y,id:C,inputProps:F,inputRef:j,name:R,onBlur:i,onChange:k,onFocus:p,readOnly:B,required:N=!1,tabIndex:P,type:m,value:S}=o,f=_(o,Pe),[v,K]=ie({controlled:l,default:!!b,name:"SwitchBase",state:"checked"}),h=J(),Q=d=>{p&&p(d),h&&h.onFocus&&h.onFocus(d)},X=d=>{i&&i(d),h&&h.onBlur&&h.onBlur(d)},Y=d=>{if(d.nativeEvent.defaultPrevented)return;const A=d.target.checked;K(A),k&&k(d,A)};let $=a;h&&typeof $>"u"&&($=h.disabled);const Z=m==="checkbox"||m==="radio",M=c({},o,{checked:v,disabled:$,disableFocusRipple:n,edge:g}),V=ve(M);return x.jsxs(xe,c({component:"span",className:I(V.root,u),centerRipple:!0,focusRipple:!n,disabled:$,tabIndex:null,role:void 0,onFocus:Q,onBlur:X,ownerState:M,ref:t},f,{children:[x.jsx(Fe,c({autoFocus:r,checked:l,defaultChecked:b,className:V.input,disabled:$,id:Z?C:void 0,name:R,onChange:Y,readOnly:B,ref:j,required:N,ownerState:M,tabIndex:P,type:m},m==="checkbox"&&S===void 0?{}:{value:S},F)),v?s:y]}))}),Re=Ce({createStyledComponent:q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>W({props:e,name:"MuiStack"})});function Be(e){return E("MuiFormControlLabel",e)}const T=H("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Se=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Le=e=>{const{classes:o,disabled:t,labelPlacement:r,error:l,required:s}=e,u={root:["root",t&&"disabled",`labelPlacement${U(r)}`,l&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",l&&"error"]};return w(u,Be,o)},je=q("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${T.label}`]:o.label},o.root,o[`labelPlacement${U(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${T.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${T.label}`]:{[`&.${T.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ne=q("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${T.error}`]:{color:(e.vars||e).palette.error.main}})),we=L.forwardRef(function(o,t){var r,l;const s=W({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:b={},control:a,disabled:n,disableTypography:g,label:y,labelPlacement:C="end",required:F,slotProps:j={}}=s,R=_(s,Se),i=J(),k=(r=n??a.props.disabled)!=null?r:i==null?void 0:i.disabled,p=F??a.props.required,B={disabled:k,required:p};["checked","name","onChange","value","inputRef"].forEach(v=>{typeof a.props[v]>"u"&&typeof s[v]<"u"&&(B[v]=s[v])});const N=ce({props:s,muiFormControl:i,states:["error"]}),P=c({},s,{disabled:k,labelPlacement:C,required:p,error:N.error}),m=Le(P),S=(l=j.typography)!=null?l:b.typography;let f=y;return f!=null&&f.type!==z&&!g&&(f=x.jsx(z,c({component:"span"},S,{className:I(m.label,S==null?void 0:S.className),children:f}))),x.jsxs(je,c({className:I(m.root,u),ownerState:P,ref:t},R,{children:[L.cloneElement(a,B),p?x.jsxs(Re,{display:"block",children:[f,x.jsxs(Ne,{ownerState:P,"aria-hidden":!0,className:m.asterisk,children:[" ","*"]})]}):f]}))});export{we as F,_e as S};
