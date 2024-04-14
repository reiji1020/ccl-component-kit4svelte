import{S as A,i as k,s as Y,e as b,c as v,a as z,d as C,o as E,f as l,g as m,h as I,j as N,n as _}from"./index-5bf62044.js";import{C as o}from"./config-38d8c761.js";import{w as u,e as c}from"./index-000460d8.js";import"./lifecycle-4aaf5bd1.js";function O(a){let t,e,s;return{c(){t=b("div"),e=b("img"),this.h()},l(r){t=v(r,"DIV",{class:!0,style:!0});var n=z(t);e=v(n,"IMG",{src:!0,alt:!0,class:!0,style:!0}),n.forEach(C),this.h()},h(){E(e.src,s=a[2])||l(e,"src",s),l(e,"alt",a[3]),l(e,"class","Thumbnail svelte-14f5vlf"),m(e,"--borderColor","var("+a[1]+")"),l(t,"class","ThumbnailWrapper svelte-14f5vlf"),m(t,"--imageSize",a[0])},m(r,n){I(r,t,n),N(t,e)},p(r,[n]){n&4&&!E(e.src,s=r[2])&&l(e,"src",s),n&8&&l(e,"alt",r[3]),n&2&&m(e,"--borderColor","var("+r[1]+")"),n&1&&m(t,"--imageSize",r[0])},i:_,o:_,d(r){r&&C(t)}}}function W(a,t,e){let{imageSize:s}=t,{borderColor:r}=t,{src:n}=t,{altText:g}=t;return a.$$set=i=>{"imageSize"in i&&e(0,s=i.imageSize),"borderColor"in i&&e(1,r=i.borderColor),"src"in i&&e(2,n=i.src),"altText"in i&&e(3,g=i.altText)},[s,r,n,g]}class T extends A{constructor(t){super(),k(this,t,W,O,Y,{imageSize:0,borderColor:1,src:2,altText:3})}}T.__docgen={version:3,name:"Thumbnail.svelte",data:[{keywords:[{name:"type",description:"string"}],visibility:"public",description:"サムネイル画像の大きさ",name:"imageSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"枠線の色",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"画像ソース",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"alt属性に指定する値",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const K={title:"Common/Thumbnail",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{borderColor:{control:{type:"select"},options:[o.STRAWBERRY_PINK,o.PINEAPPLE_YELLOW,o.SODA_BLUE,o.MELON_GREEN,o.GRAPE_PURPLE,o.WRAP_GREY]},altText:{control:{type:"text"}},imageSize:{control:{type:"text"}},src:{control:{type:"text"}}}},d={args:{borderColor:o.STRAWBERRY_PINK,altText:"Strawberry Pink",imageSize:"120px",src:"thumbnail.png"},play:async({args:a,canvasElement:t})=>{const e=u(t);await c(e.getByRole("img")).toHaveAttribute("alt","Strawberry Pink"),await c(a.borderColor).toBe(o.STRAWBERRY_PINK)}},p={args:{borderColor:o.PINEAPPLE_YELLOW,altText:"Pineapple Yellow",imageSize:"120px",src:"thumbnail.png"},play:async({args:a,canvasElement:t})=>{const e=u(t);await c(e.getByRole("img")).toHaveAttribute("alt","Pineapple Yellow"),await c(a.borderColor).toBe(o.PINEAPPLE_YELLOW)}},y={args:{borderColor:o.SODA_BLUE,altText:"Soda Blue",imageSize:"120px",src:"thumbnail.png"},play:async({args:a,canvasElement:t})=>{const e=u(t);await c(e.getByRole("img")).toHaveAttribute("alt","Soda Blue"),await c(a.borderColor).toBe(o.SODA_BLUE)}};var f,S,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    altText: 'Strawberry Pink',
    imageSize: '120px',
    src: 'thumbnail.png'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Strawberry Pink');
    await expect(args.borderColor).toBe(CCLVividColor.STRAWBERRY_PINK);
  }
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var P,h,x;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    altText: 'Pineapple Yellow',
    imageSize: '120px',
    src: 'thumbnail.png'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Pineapple Yellow');
    await expect(args.borderColor).toBe(CCLVividColor.PINEAPPLE_YELLOW);
  }
}`,...(x=(h=p.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var L,B,R;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    altText: 'Soda Blue',
    imageSize: '120px',
    src: 'thumbnail.png'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Soda Blue');
    await expect(args.borderColor).toBe(CCLVividColor.SODA_BLUE);
  }
}`,...(R=(B=y.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const G=["Default","Yellow","Blue"];export{y as Blue,d as Default,p as Yellow,G as __namedExportsOrder,K as default};
