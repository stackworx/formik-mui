import{_ as g}from"./isNativeReflectConstruct-CJAgTEKr.js";import{r as v}from"./index-CTjT7uj6.js";import{o as z,p as I,s as C,t as f,u as R,_ as w,j as S,c as b,q as j}from"./Wrapper-DXvvO_B0.js";function N(o){return z("MuiSvgIcon",o)}I("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const A=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],B=o=>{const{color:t,fontSize:e,classes:n}=o,i={root:["root",t!=="inherit"&&`color${f(t)}`,`fontSize${f(e)}`]};return j(i,N,n)},M=C("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.color!=="inherit"&&t[`color${f(e.color)}`],t[`fontSize${f(e.fontSize)}`]]}})(({theme:o,ownerState:t})=>{var e,n,i,p,m,a,h,u,d,r,s,c,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(e=o.transitions)==null||(n=e.create)==null?void 0:n.call(e,"fill",{duration:(i=o.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((p=o.typography)==null||(m=p.pxToRem)==null?void 0:m.call(p,20))||"1.25rem",medium:((a=o.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,24))||"1.5rem",large:((u=o.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[t.fontSize],color:(r=(s=(o.vars||o).palette)==null||(s=s[t.color])==null?void 0:s.main)!=null?r:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(l=(o.vars||o).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[t.color]}}),y=v.forwardRef(function(t,e){const n=R({props:t,name:"MuiSvgIcon"}),{children:i,className:p,color:m="inherit",component:a="svg",fontSize:h="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:r,viewBox:s="0 0 24 24"}=n,c=w(n,A),l=v.isValidElement(i)&&i.type==="svg",x=g({},n,{color:m,component:a,fontSize:h,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:s,hasSvgAsChild:l}),$={};d||($.viewBox=s);const _=B(x);return S.jsxs(M,g({as:a,className:b(_.root,p),focusable:"false",color:u,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:e},$,c,l&&i.props,{ownerState:x,children:[l?i.props.children:i,r?S.jsx("title",{children:r}):null]}))});y.muiName="SvgIcon";function V(o,t){function e(n,i){return S.jsx(y,g({"data-testid":`${t}Icon`,ref:i},n,{children:o}))}return e.muiName=y.muiName,v.memo(v.forwardRef(e))}export{V as c};
