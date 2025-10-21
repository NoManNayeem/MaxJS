import{j as e}from"./jsx-runtime-1a9d9a93.js";import{m as re}from"./motion-b5b1ff59.js";import{B as v}from"./Button-4621c40a.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const a=({children:p,title:t,subtitle:u,image:h,imageAlt:D,useCss:P,animate:g,variant:G="default",size:J="md",hover:K=!1,className:Q=""})=>{const U=()=>{if(P)return"card";const Z="rounded-lg overflow-hidden transition-all duration-200",ee={sm:"p-4",md:"p-6",lg:"p-8"},ae={default:"bg-white border border-gray-200",elevated:"bg-white shadow-lg hover:shadow-xl",outlined:"bg-white border-2 border-gray-300",filled:"bg-gray-50 border border-gray-200"},te=K?"hover:shadow-md hover:-translate-y-1":"";return`${Z} ${ee[J]} ${ae[G]} ${te} ${Q}`},X=g?re.div:"div",Y=g?{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3}}:{};return e.jsxs(X,{className:U(),...Y,children:[h&&e.jsx("div",{className:"w-full h-48 overflow-hidden",children:e.jsx("img",{src:h,alt:D||t||"Card image",className:"w-full h-full object-cover"})}),(t||u)&&e.jsxs("div",{className:"mb-4",children:[t&&e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:t}),u&&e.jsx("p",{className:"text-gray-600 text-sm",children:u})]}),e.jsx("div",{className:"text-gray-700",children:p})]})};try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},useCss:{defaultValue:null,description:"",name:"useCss",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"elevated"'},{value:'"outlined"'},{value:'"filled"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},hover:{defaultValue:{value:"false"},description:"",name:"hover",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const oe={title:"Components/Card",component:a,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},image:{control:"text"},useCss:{control:"boolean"},animate:{control:"boolean"},variant:{control:"select",options:["default","elevated","outlined","filled"]},size:{control:"select",options:["sm","md","lg"]},hover:{control:"boolean"}}},r={args:{title:"Card Title",subtitle:"This is a subtitle",children:"This is the card content. It can contain any React elements."}},s={args:{title:"Beautiful Landscape",subtitle:"A stunning view",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",children:"This card includes a beautiful landscape image."}},i={args:{title:"Elevated Card",subtitle:"With shadow",variant:"elevated",children:"This card has an elevated appearance with shadow."}},n={args:{title:"Outlined Card",subtitle:"With border",variant:"outlined",children:"This card has a prominent border."}},l={args:{title:"Filled Card",subtitle:"With background",variant:"filled",children:"This card has a filled background."}},d={args:{title:"Card with Actions",subtitle:"Interactive card",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"This card contains interactive elements."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(v,{label:"Action",size:"sm"}),e.jsx(v,{label:"Cancel",variant:"outline",size:"sm"})]})]})}},o={args:{title:"Hover Card",subtitle:"Hover to see effect",hover:!0,children:"This card has hover effects enabled."}},c={args:{title:"Animated Card",subtitle:"With animation",animate:!0,children:"This card animates when it appears."}},m={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx(a,{title:"Small Card",size:"sm",children:"Small size card content."}),e.jsx(a,{title:"Medium Card",size:"md",children:"Medium size card content."}),e.jsx(a,{title:"Large Card",size:"lg",children:"Large size card content."})]})};var f,b,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: 'This is the card content. It can contain any React elements.'
  }
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,y,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'A stunning view',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    children: 'This card includes a beautiful landscape image.'
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,T,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Elevated Card',
    subtitle: 'With shadow',
    variant: 'elevated',
    children: 'This card has an elevated appearance with shadow.'
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var N,S,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Outlined Card',
    subtitle: 'With border',
    variant: 'outlined',
    children: 'This card has a prominent border.'
  }
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var W,V,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Filled Card',
    subtitle: 'With background',
    variant: 'filled',
    children: 'This card has a filled background.'
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var _,I,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Card with Actions',
    subtitle: 'Interactive card',
    children: <div>
        <p className="mb-4">This card contains interactive elements.</p>
        <div className="flex gap-2">
          <Button label="Action" size="sm" />
          <Button label="Cancel" variant="outline" size="sm" />
        </div>
      </div>
  }
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var E,H,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Hover Card',
    subtitle: 'Hover to see effect',
    hover: true,
    children: 'This card has hover effects enabled.'
  }
}`,...(L=(H=o.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var O,$,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Animated Card',
    subtitle: 'With animation',
    animate: true,
    children: 'This card animates when it appears.'
  }
}`,...(k=($=c.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var F,M,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Small Card" size="sm" children="Small size card content." />
      <Card title="Medium Card" size="md" children="Medium size card content." />
      <Card title="Large Card" size="lg" children="Large size card content." />
    </div>
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const ce=["Default","WithImage","Elevated","Outlined","Filled","WithActions","Hover","Animated","Sizes"];export{c as Animated,r as Default,i as Elevated,l as Filled,o as Hover,n as Outlined,m as Sizes,d as WithActions,s as WithImage,ce as __namedExportsOrder,oe as default};
