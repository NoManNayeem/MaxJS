import{j as S}from"./jsx-runtime-1a9d9a93.js";import{m as k}from"./motion-b2bb9301.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const o=({label:r,onClick:g,disabled:C,useCss:f,animate:n})=>{const y=f?"button":"bg-blue-500 text-white px-4 py-2 rounded cursor-pointer",_=n?k.button:"button",x=n?{whileHover:{scale:1.05}}:{};return S.jsx(_,{className:y,onClick:g,disabled:C,...x,children:r})};try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},useCss:{defaultValue:null,description:"",name:"useCss",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{label:{control:"text"},disabled:{control:"boolean"},useCss:{control:"boolean"},animate:{control:"boolean"}}},e={args:{label:"Click Me"}},a={args:{label:"Click Me",useCss:!0}},t={args:{label:"Animated",animate:!0}};var s,l,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Click Me'
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    useCss: true
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Animated',
    animate: true
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const B=["Tailwind","CSS","Animated"];export{t as Animated,a as CSS,e as Tailwind,B as __namedExportsOrder,A as default};
