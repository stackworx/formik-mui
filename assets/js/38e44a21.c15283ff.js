"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[471],{2849:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>m,toc:()=>d});var a=t(4848),c=t(8453);const n={id:"mui-x-date-pickers",title:"MUI X Date and Time Pickers"},l=void 0,m={id:"api/mui-x-date-pickers",title:"MUI X Date and Time Pickers",description:"The following props are always excluded: name, value, error, and additional ones where it makes sense.",source:"@site/docs/api/mui-x-date-pickers.md",sourceDirName:"api",slug:"/api/mui-x-date-pickers",permalink:"/formik-mui/docs/api/mui-x-date-pickers",draft:!1,unlisted:!1,editUrl:"https://github.com/stackworx/formik-mui/edit/main/docs/api/mui-x-date-pickers.md",tags:[],version:"current",frontMatter:{id:"mui-x-date-pickers",title:"MUI X Date and Time Pickers"},sidebar:"someSidebar",previous:{title:"MUI",permalink:"/formik-mui/docs/api/mui"}},r={},d=[{value:"DatePicker",id:"datepicker",level:2},{value:"Example",id:"example",level:4},{value:"MUI DatePicker Documentation",id:"mui-datepicker-documentation",level:4},{value:"DateTimePicker",id:"datetimepicker",level:2},{value:"Example",id:"example-1",level:4},{value:"MUI DateTimePicker Documentation",id:"mui-datetimepicker-documentation",level:4},{value:"DesktopDatePicker",id:"desktopdatepicker",level:2},{value:"Example",id:"example-2",level:4},{value:"MUI DesktopDatePicker Documentation",id:"mui-desktopdatepicker-documentation",level:4},{value:"DesktopDateTimePicker",id:"desktopdatetimepicker",level:2},{value:"Example",id:"example-3",level:4},{value:"MUI DesktopDateTimePicker Documentation",id:"mui-desktopdatetimepicker-documentation",level:4},{value:"DesktopTimePicker",id:"desktoptimepicker",level:2},{value:"Example",id:"example-4",level:4},{value:"MUI DesktopTimePicker Documentation",id:"mui-desktoptimepicker-documentation",level:4},{value:"MobileDatePicker",id:"mobiledatepicker",level:2},{value:"Example",id:"example-5",level:4},{value:"MUI MobileDatePicker Documentation",id:"mui-mobiledatepicker-documentation",level:4},{value:"MobileDateTimePicker",id:"mobiledatetimepicker",level:2},{value:"Example",id:"example-6",level:4},{value:"MUI MobileDateTimePicker Documentation",id:"mui-mobiledatetimepicker-documentation",level:4},{value:"MobileTimePicker",id:"mobiletimepicker",level:2},{value:"Example",id:"example-7",level:4},{value:"MUI MobileTimePicker Documentation",id:"mui-mobiletimepicker-documentation",level:4},{value:"StaticDatePicker",id:"staticdatepicker",level:2},{value:"Example",id:"example-8",level:4},{value:"MUI StaticDatePicker Documentation",id:"mui-staticdatepicker-documentation",level:4},{value:"StaticDateTimePicker",id:"staticdatetimepicker",level:2},{value:"Example",id:"example-9",level:4},{value:"MUI StaticDateTimePicker Documentation",id:"mui-staticdatetimepicker-documentation",level:4},{value:"StaticTimePicker",id:"statictimepicker",level:2},{value:"Example",id:"example-10",level:4},{value:"MUI StaticTimePicker Documentation",id:"mui-statictimepicker-documentation",level:4},{value:"TimePicker",id:"timepicker",level:2},{value:"Example",id:"example-11",level:4},{value:"MUI TimePicker Documentation",id:"mui-timepicker-documentation",level:4}];function o(e){const i={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["The following props are always excluded: ",(0,a.jsx)(i.code,{children:"name"}),", ",(0,a.jsx)(i.code,{children:"value"}),", ",(0,a.jsx)(i.code,{children:"error"}),", and additional ones where it makes sense."]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"TextField"})," props may be specified inside the ",(0,a.jsx)(i.code,{children:"textField"})," prop. If no ",(0,a.jsx)(i.code,{children:"renderInput"})," function is provided, the ",(0,a.jsx)(i.code,{children:"textField"})," props are forwarded to the ",(0,a.jsx)(i.code,{children:"TextField"})," input."]}),"\n",(0,a.jsxs)(i.p,{children:["When using picker components initialize the starting value to ",(0,a.jsx)(i.code,{children:"new Date()"})," and not the empty string."]}),"\n",(0,a.jsx)(i.h2,{id:"datepicker",children:"DatePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { DatePicker } from \'formik-mui-x-date-pickers\';\n\n<Field\n  component={DatePicker}\n  label="label"\n  name="name"\n  textField={{ helperText: \'Helper text\' }}\n  inputFormat="MM/dd/yyyy"\n/>;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-datepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/date-picker/",children:"MUI DatePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"datetimepicker",children:"DateTimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { DateTimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={DateTimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-datetimepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/date-time-picker/",children:"MUI DateTimePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"desktopdatepicker",children:"DesktopDatePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { DesktopDatePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={DesktopDatePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-desktopdatepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/desktop-date-picker/",children:"MUI DesktopDatePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"desktopdatetimepicker",children:"DesktopDateTimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-3",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { DesktopDateTimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={DesktopDateTimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-desktopdatetimepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/desktop-date-time-picker/",children:"MUI DesktopDateTimePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"desktoptimepicker",children:"DesktopTimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-4",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { DesktopTimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={DesktopTimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-desktoptimepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/desktop-time-picker/",children:"MUI DesktopTimePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"mobiledatepicker",children:"MobileDatePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-5",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { MobileDatePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={MobileDatePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-mobiledatepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/mobile-date-picker/",children:"MUI MobileDatePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"mobiledatetimepicker",children:"MobileDateTimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-6",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { MobileDateTimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={MobileDateTimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-mobiledatetimepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/mobile-date-time-picker/",children:"MUI MobileDateTimePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"mobiletimepicker",children:"MobileTimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-7",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { MobileTimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={MobileTimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-mobiletimepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/mobile-time-picker/",children:"MUI MobileTimePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"staticdatepicker",children:"StaticDatePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-8",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { StaticDatePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={StaticDatePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-staticdatepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/static-date-picker/",children:"MUI StaticDatePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"staticdatetimepicker",children:"StaticDateTimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-9",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { StaticDateTimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={StaticDateTimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-staticdatetimepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/static-date-time-picker/",children:"MUI StaticDateTimePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"statictimepicker",children:"StaticTimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-10",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { StaticTimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={StaticTimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-statictimepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/static-time-picker/",children:"MUI StaticTimePicker Documentation"})}),"\n",(0,a.jsx)(i.h2,{id:"timepicker",children:"TimePicker"}),"\n",(0,a.jsx)(i.h4,{id:"example-11",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:'import { TimePicker } from \'formik-mui-x-date-pickers\';\n\n<Field component={TimePicker} label="label" name="name" />;\n'})}),"\n",(0,a.jsx)(i.h4,{id:"mui-timepicker-documentation",children:(0,a.jsx)(i.a,{href:"https://mui.com/x/api/date-pickers/time-picker/",children:"MUI TimePicker Documentation"})})]})}function p(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>m});var a=t(6540);const c={},n=a.createContext(c);function l(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function m(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);