import{r as e}from"./index-CTjT7uj6.js";import{W as d,F as f,h as B,k as E,l as I,B as b,m as F}from"./Wrapper-DXvvO_B0.js";import{I as k}from"./InputBase-DuDaiXcF.js";import{L as y}from"./LinearProgress-CIiBqE01.js";import"./isNativeReflectConstruct-CJAgTEKr.js";import"./v4-CQkTLCs1.js";import"./useFormControl-Baz_U5RD.js";import"./ownerWindow-DIR61fab.js";import"./index-BjNUr1t6.js";function T({disabled:t,field:{onBlur:r,...a},form:{isSubmitting:i},onBlur:p,...u}){return{disabled:t??i,onBlur:p??function(c){r(c??a.name)},...a,...u}}function o(t){return e.createElement(k,{...T(t)})}o.displayName="FormikMaterialUIInputBase";o.__docgenInfo={description:"",methods:[],displayName:"FormikMaterialUIInputBase",composes:["FieldProps","Omit"]};const O={title:"Core/InputBase",component:o,parameters:{layout:"fullscreen"},argTypes:{onSubmit:{action:"submit"}}},_=()=>e.createElement(d,null,e.createElement(f,{initialValues:{inputBase:"Naked input"},onSubmit:(t,{setSubmitting:r})=>{setTimeout(()=>{r(!1),B("submit")(t)},2e3)}},({submitForm:t,isSubmitting:r,values:a})=>e.createElement(E,null,e.createElement(I,{component:o,name:"inputBase"}),e.createElement("br",null),r&&e.createElement(y,null),e.createElement("br",null),e.createElement(b,{variant:"contained",color:"primary",disabled:r,onClick:t},"Submit"),e.createElement("br",null),e.createElement(F,{values:a})))),n={render:_};var s,m,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const P=["Default"];export{n as Default,P as __namedExportsOrder,O as default};
