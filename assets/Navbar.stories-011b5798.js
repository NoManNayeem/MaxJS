import{j as e}from"./jsx-runtime-1a9d9a93.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const s=({links:t,useCss:i})=>{const c=i?"navbar":"flex justify-between items-center bg-gray-800 text-white p-4";return e.jsxs("nav",{className:c,children:[e.jsx("div",{children:"Logo"}),e.jsx("ul",{className:"flex space-x-4",children:t.map(r=>e.jsx("li",{children:e.jsx("a",{href:r.href,children:r.label})},r.href))})]})};try{s.displayName="Navbar",s.__docgenInfo={description:"",displayName:"Navbar",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"{ label: string; href: string; }[]"}},useCss:{defaultValue:null,description:"",name:"useCss",required:!1,type:{name:"boolean"}}}}}catch{}const m={title:"Components/Navbar",component:s,tags:["autodocs"]},a={args:{links:[{label:"Home",href:"/"},{label:"About",href:"/about"}]}};var n,o,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    links: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'About',
      href: '/about'
    }]
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,m as default};
