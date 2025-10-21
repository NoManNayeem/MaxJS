import{j as n}from"./jsx-runtime-1a9d9a93.js";import{r as s}from"./index-8b3efc3f.js";import{u as ne,f as le,a as ie,P as ce,L as ue,m as V}from"./motion-b5b1ff59.js";import{B as b}from"./Button-4621c40a.js";import"./_commonjsHelpers-de833af9.js";function se(){const e=s.useRef(!1);return ne(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function de(){const e=se(),[r,t]=s.useState(0),a=s.useCallback(()=>{e.current&&t(r+1)},[r]);return[s.useCallback(()=>le.postRender(a),[a]),r]}class me extends s.Component{getSnapshotBeforeUpdate(r){const t=this.props.childRef.current;if(t&&r.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=t.offsetHeight||0,a.width=t.offsetWidth||0,a.top=t.offsetTop,a.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function pe({children:e,isPresent:r}){const t=s.useId(),a=s.useRef(null),x=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:d,height:p,top:c,left:g}=x.current;if(r||!a.current||!d||!p)return;a.current.dataset.motionPopId=t;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${p}px !important;
            top: ${c}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[r]),s.createElement(me,{isPresent:r,childRef:a,sizeRef:x},s.cloneElement(e,{ref:a}))}const B=({children:e,initial:r,isPresent:t,onExitComplete:a,custom:x,presenceAffectsLayout:d,mode:p})=>{const c=ie(fe),g=s.useId(),u=s.useMemo(()=>({id:g,initial:r,isPresent:t,custom:x,onExitComplete:o=>{c.set(o,!0);for(const l of c.values())if(!l)return;a&&a()},register:o=>(c.set(o,!1),()=>c.delete(o))}),d?void 0:[t]);return s.useMemo(()=>{c.forEach((o,l)=>c.set(l,!1))},[t]),s.useEffect(()=>{!t&&!c.size&&a&&a()},[t]),p==="popLayout"&&(e=s.createElement(pe,{isPresent:t},e)),s.createElement(ce.Provider,{value:u},e)};function fe(){return new Map}function xe(e){return s.useEffect(()=>()=>e(),[])}const h=e=>e.key||"";function ge(e,r){e.forEach(t=>{const a=h(t);r.set(a,t)})}function ye(e){const r=[];return s.Children.forEach(e,t=>{s.isValidElement(t)&&r.push(t)}),r}const he=({children:e,custom:r,initial:t=!0,onExitComplete:a,exitBeforeEnter:x,presenceAffectsLayout:d=!0,mode:p="sync"})=>{const c=s.useContext(ue).forceRender||de()[0],g=se(),u=ye(e);let o=u;const l=s.useRef(new Map).current,v=s.useRef(o),y=s.useRef(new Map).current,f=s.useRef(!0);if(ne(()=>{f.current=!1,ge(u,y),v.current=o}),xe(()=>{f.current=!0,y.clear(),l.clear()}),f.current)return s.createElement(s.Fragment,null,o.map(i=>s.createElement(B,{key:h(i),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:d,mode:p},i)));o=[...o];const j=v.current.map(h),I=u.map(h),re=j.length;for(let i=0;i<re;i++){const m=j[i];I.indexOf(m)===-1&&!l.has(m)&&l.set(m,void 0)}return p==="wait"&&l.size&&(o=[]),l.forEach((i,m)=>{if(I.indexOf(m)!==-1)return;const F=y.get(m);if(!F)return;const ae=j.indexOf(m);let O=i;if(!O){const oe=()=>{l.delete(m);const L=Array.from(y.keys()).filter(E=>!I.includes(E));if(L.forEach(E=>y.delete(E)),v.current=u.filter(E=>{const $=h(E);return $===m||L.includes($)}),!l.size){if(g.current===!1)return;c(),a&&a()}};O=s.createElement(B,{key:h(F),isPresent:!1,onExitComplete:oe,custom:r,presenceAffectsLayout:d,mode:p},F),l.set(m,O)}o.splice(ae,0,O)}),o=o.map(i=>{const m=i.key;return l.has(m)?i:s.createElement(B,{key:h(i),isPresent:!0,presenceAffectsLayout:d,mode:p},i)}),s.createElement(s.Fragment,null,l.size?o:o.map(i=>s.cloneElement(i)))},C=({isOpen:e,onClose:r,title:t,children:a,size:x="md",useCss:d,animate:p=!0,closeOnOverlayClick:c=!0,closeOnEscape:g=!0,showCloseButton:u=!0,className:o=""})=>{s.useEffect(()=>{if(!g)return;const f=j=>{j.key==="Escape"&&r()};return e&&(document.addEventListener("keydown",f),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",f),document.body.style.overflow="unset"}},[e,r,g]);const l=()=>d?"modal":`w-full ${{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"max-w-full mx-4"}[x]} mx-auto`,v=d?"modal-overlay":"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",y=d?"modal-content":`bg-white rounded-lg shadow-xl ${l()} ${o}`;return e?n.jsx(he,{children:e&&n.jsx(V.div,{className:v,onClick:c?r:void 0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:n.jsxs(V.div,{className:y,onClick:f=>f.stopPropagation(),initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.2},children:[t&&n.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[n.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:t}),u&&n.jsx("button",{onClick:r,className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close modal",children:n.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),n.jsx("div",{className:"p-6",children:a})]})})}):null};try{C.displayName="Modal",C.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},useCss:{defaultValue:null,description:"",name:"useCss",required:!1,type:{name:"boolean"}},animate:{defaultValue:{value:"true"},description:"",name:"animate",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Oe={title:"Components/Modal",component:C,tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},title:{control:"text"},size:{control:"select",options:["sm","md","lg","xl","full"]},useCss:{control:"boolean"},animate:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},showCloseButton:{control:"boolean"}}},R=({args:e})=>{const[r,t]=s.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(b,{label:"Open Modal",onClick:()=>t(!0)}),n.jsxs(C,{...e,isOpen:r,onClose:()=>t(!1),children:[n.jsx("p",{className:"text-gray-600 mb-4",children:"This is a modal dialog. You can put any content here."}),n.jsxs("div",{className:"flex gap-2 justify-end",children:[n.jsx(b,{label:"Cancel",variant:"outline",onClick:()=>t(!1)}),n.jsx(b,{label:"Confirm",onClick:()=>t(!1)})]})]})]})},k={render:e=>n.jsx(R,{args:e}),args:{title:"Modal Title"}},M={render:e=>n.jsx(R,{args:e}),args:{}},w={render:()=>{const[e,r]=s.useState(null);return n.jsxs("div",{className:"flex gap-2",children:[["sm","md","lg","xl"].map(t=>n.jsx(b,{label:`Open ${t.toUpperCase()}`,onClick:()=>r(t)},t)),e&&n.jsx(C,{isOpen:!0,onClose:()=>r(null),title:`${e.toUpperCase()} Modal`,size:e,children:n.jsxs("p",{children:["This is a ",e," modal."]})})]})}},N={render:e=>{const[r,t]=s.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(b,{label:"Open Form Modal",onClick:()=>t(!0)}),n.jsx(C,{...e,isOpen:r,onClose:()=>t(!1),title:"Contact Form",size:"lg",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),n.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your name"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),n.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your email"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),n.jsx("textarea",{className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",rows:3,placeholder:"Enter your message"})]}),n.jsxs("div",{className:"flex gap-2 justify-end",children:[n.jsx(b,{label:"Cancel",variant:"outline",onClick:()=>t(!1)}),n.jsx(b,{label:"Send",onClick:()=>t(!1)})]})]})})]})}},z={render:e=>n.jsx(R,{args:e}),args:{title:"Animated Modal",animate:!0}},S={render:e=>n.jsx(R,{args:e}),args:{title:"Modal with Overlay Click Disabled",closeOnOverlayClick:!1}};var _,q,P;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <ModalExample args={args} />,
  args: {
    title: 'Modal Title'
  }
}`,...(P=(q=k.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var T,U,A;M.parameters={...M.parameters,docs:{...(T=M.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ModalExample args={args} />,
  args: {}
}`,...(A=(U=M.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var D,K,W;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    return <div className="flex gap-2">
        {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} label={\`Open \${size.toUpperCase()}\`} onClick={() => setOpenSize(size)} />)}
        
        {openSize && <Modal isOpen={true} onClose={() => setOpenSize(null)} title={\`\${openSize.toUpperCase()} Modal\`} size={openSize}>
            <p>This is a {openSize} modal.</p>
          </Modal>}
      </div>;
  }
}`,...(W=(K=w.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var G,H,Y;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open Form Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} title="Contact Form" size="lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} placeholder="Enter your message" />
            </div>
            <div className="flex gap-2 justify-end">
              <Button label="Cancel" variant="outline" onClick={() => setIsOpen(false)} />
              <Button label="Send" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...(Y=(H=N.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var J,Q,X;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <ModalExample args={args} />,
  args: {
    title: 'Animated Modal',
    animate: true
  }
}`,...(X=(Q=z.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <ModalExample args={args} />,
  args: {
    title: 'Modal with Overlay Click Disabled',
    closeOnOverlayClick: false
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ke=["Default","WithoutTitle","Sizes","FormModal","Animated","NoCloseOnOverlay"];export{z as Animated,k as Default,N as FormModal,S as NoCloseOnOverlay,w as Sizes,M as WithoutTitle,ke as __namedExportsOrder,Oe as default};
