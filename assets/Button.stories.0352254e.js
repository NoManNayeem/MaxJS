import{j as e}from"./jsx-runtime.69158e78.js";import{B as m}from"./Button.08a6b4f9.js";import"./index.c8d7bb58.js";import"./_commonjsHelpers.de833af9.js";import"./motion.57296b19.js";const Y={title:"Components/Button",component:m,tags:["autodocs"],argTypes:{label:{control:"text"},disabled:{control:"boolean"},useCss:{control:"boolean"},animate:{control:"boolean"},variant:{control:"select",options:["primary","secondary","outline","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},loading:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]}}},r={args:{label:"Primary Button",variant:"primary"}},a={args:{label:"Secondary Button",variant:"secondary"}},o={args:{label:"Outline Button",variant:"outline"}},s={args:{label:"Ghost Button",variant:"ghost"}},t={args:{label:"Danger Button",variant:"danger"}},n={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(m,{label:"Small",size:"sm"}),e.jsx(m,{label:"Medium",size:"md"}),e.jsx(m,{label:"Large",size:"lg"})]})},l={args:{label:"With Icon",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})}},i={args:{label:"Loading Button",loading:!0}},c={args:{label:"Full Width Button",fullWidth:!0}},d={args:{label:"Animated Button",animate:!0}},u={args:{label:"Disabled Button",disabled:!0}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,B,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(v=(B=a.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var S,x,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Outline Button',
    variant: 'outline'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var W,f,j;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button',
    variant: 'ghost'
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var L,z,k;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Danger Button',
    variant: 'danger'
  }
}`,...(k=(z=t.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var D,O,P;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </div>
}`,...(P=(O=n.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var w,A,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'With Icon',
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
  }
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var F,G,I;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Loading Button',
    loading: true
  }
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var M,N,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Button',
    fullWidth: true
  }
}`,...(E=(N=c.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var H,_,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Animated Button',
    animate: true
  }
}`,...(R=(_=d.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var T,q,J;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const Z=["Primary","Secondary","Outline","Ghost","Danger","Sizes","WithIcon","Loading","FullWidth","Animated","Disabled"];export{d as Animated,t as Danger,u as Disabled,c as FullWidth,s as Ghost,i as Loading,o as Outline,r as Primary,a as Secondary,n as Sizes,l as WithIcon,Z as __namedExportsOrder,Y as default};
