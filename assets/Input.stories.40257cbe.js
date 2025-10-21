import{j as e}from"./jsx-runtime.69158e78.js";import{r as fe}from"./index.c8d7bb58.js";import{m as he}from"./motion.57296b19.js";import"./_commonjsHelpers.de833af9.js";const a=({label:f,placeholder:Z,value:ee="",onChange:h,type:ae="text",disabled:le=!1,error:r,helperText:v,required:x=!1,useCss:re,animate:y,variant:se="default",size:te="md",fullWidth:j=!1,icon:l,iconPosition:b="left",className:ne=""})=>{const[,N]=fe.useState(!1),oe=()=>{if(re)return"input";const g="transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",ue={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-3 text-lg"},ce={default:"border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500",filled:"bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500",outlined:"border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"},pe=r?"border-red-500 focus:border-red-500 focus:ring-red-500":"",me=l?b==="left"?"pl-10":"pr-10":"";return`${g} ${ue[te]} ${ce[se]} ${pe} ${me} ${j?"w-full":""} ${ne}`},ie=y?he.input:"input",de=y?{whileFocus:{scale:1.02},transition:{duration:.1}}:{};return e.jsxs("div",{className:`${j?"w-full":""}`,children:[f&&e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:[f,x&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsxs("div",{className:"relative",children:[l&&b==="left"&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("div",{className:"text-gray-400",children:l})}),e.jsx(ie,{type:ae,placeholder:Z,value:ee,onChange:g=>h==null?void 0:h(g.target.value),onFocus:()=>N(!0),onBlur:()=>N(!1),disabled:le,required:x,className:oe(),...de}),l&&b==="right"&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:e.jsx("div",{className:"text-gray-400",children:l})})]}),r&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r}),v&&!r&&e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:v})]})};try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},useCss:{defaultValue:null,description:"",name:"useCss",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"filled"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ye={title:"Components/Input",component:a,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},type:{control:"select",options:["text","email","password","number","tel","url"]},disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"},required:{control:"boolean"},useCss:{control:"boolean"},animate:{control:"boolean"},variant:{control:"select",options:["default","filled","outlined"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]}}},s={args:{label:"Email",placeholder:"Enter your email",type:"email"}},t={args:{label:"Password",placeholder:"Enter your password",type:"password",helperText:"Must be at least 8 characters long"}},n={args:{label:"Email",placeholder:"Enter your email",type:"email",error:"Please enter a valid email address"}},o={args:{label:"Full Name",placeholder:"Enter your full name",required:!0}},i={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},d={args:{label:"Search",placeholder:"Search...",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Default",placeholder:"Default variant",variant:"default"}),e.jsx(a,{label:"Filled",placeholder:"Filled variant",variant:"filled"}),e.jsx(a,{label:"Outlined",placeholder:"Outlined variant",variant:"outlined"})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Small",placeholder:"Small size",size:"sm"}),e.jsx(a,{label:"Medium",placeholder:"Medium size",size:"md"}),e.jsx(a,{label:"Large",placeholder:"Large size",size:"lg"})]})},p={args:{label:"Animated Input",placeholder:"Focus to see animation",animate:!0}},m={args:{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0}};var q,S,z;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,V,w;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters long'
  }
}`,...(w=(V=t.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var E,W,F;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address'
  }
}`,...(F=(W=n.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var C,k,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var D,_,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,$,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
  }
}`,...(P=($=d.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var O,A,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Input label="Default" placeholder="Default variant" variant="default" />
      <Input label="Filled" placeholder="Filled variant" variant="filled" />
      <Input label="Outlined" placeholder="Outlined variant" variant="outlined" />
    </div>
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var B,H,G;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Input label="Small" placeholder="Small size" size="sm" />
      <Input label="Medium" placeholder="Medium size" size="md" />
      <Input label="Large" placeholder="Large size" size="lg" />
    </div>
}`,...(G=(H=c.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Animated Input',
    placeholder: 'Focus to see animation',
    animate: true
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const je=["Default","WithHelperText","WithError","Required","Disabled","WithIcon","Variants","Sizes","Animated","FullWidth"];export{p as Animated,s as Default,i as Disabled,m as FullWidth,o as Required,c as Sizes,u as Variants,n as WithError,t as WithHelperText,d as WithIcon,je as __namedExportsOrder,ye as default};
