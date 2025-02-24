import{T as E}from"./Thumbnail-a59979bc.js";import{C as a}from"./config-e4d7b61a.js";import{w as c,e as t}from"./index-ea2a2f54.js";import"./index-edc2d624.js";import"./lifecycle-4aaf5bd1.js";const R={title:"CommonComponents/Thumbnail",component:E,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{borderColor:{control:{type:"select"},options:[a.STRAWBERRY_PINK,a.PINEAPPLE_YELLOW,a.SODA_BLUE,a.MELON_GREEN,a.GRAPE_PURPLE,a.WRAP_GREY]},altText:{control:{type:"text"}},imageSize:{control:{type:"text"}},src:{control:{type:"text"}}}},s={args:{borderColor:a.STRAWBERRY_PINK,altText:"Strawberry Pink",imageSize:"120px",src:"thumbnail.png"},play:async({args:n,canvasElement:r,step:e})=>{await e("画像にalt属性が存在し、データが設定されていていること",async()=>{const o=c(r);await t(o.getByRole("img")).toHaveAttribute("alt","Strawberry Pink")}),await e("ふちどり用として指定した色が正しいこと",async()=>{await t(n.borderColor).toBe("--strawberry-pink")})}},l={args:{borderColor:a.PINEAPPLE_YELLOW,altText:"Pineapple Yellow",imageSize:"120px",src:"thumbnail.png"},play:async({args:n,canvasElement:r,step:e})=>{await e("画像にalt属性が存在し、データが設定されていていること",async()=>{const o=c(r);await t(o.getByRole("img")).toHaveAttribute("alt","Pineapple Yellow")}),await e("ふちどり用として指定した色が正しいこと",async()=>{await t(n.borderColor).toBe("--pineapple-yellow")})}},i={args:{borderColor:a.SODA_BLUE,altText:"Soda Blue",imageSize:"120px",src:"thumbnail.png"},play:async({args:n,canvasElement:r,step:e})=>{await e("画像にalt属性が存在し、データが設定されていていること",async()=>{const o=c(r);await t(o.getByRole("img")).toHaveAttribute("alt","Soda Blue")}),await e("ふちどり用として指定した色が正しいこと",async()=>{await t(n.borderColor).toBe("--soda-blue")})}};var p,m,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    altText: 'Strawberry Pink',
    imageSize: '120px',
    src: 'thumbnail.png'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('画像にalt属性が存在し、データが設定されていていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Strawberry Pink');
    });
    await step('ふちどり用として指定した色が正しいこと', async () => {
      await expect(args.borderColor).toBe('--strawberry-pink');
    });
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var w,g,u;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    altText: 'Pineapple Yellow',
    imageSize: '120px',
    src: 'thumbnail.png'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('画像にalt属性が存在し、データが設定されていていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Pineapple Yellow');
    });
    await step('ふちどり用として指定した色が正しいこと', async () => {
      await expect(args.borderColor).toBe('--pineapple-yellow');
    });
  }
}`,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,b,C;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    altText: 'Soda Blue',
    imageSize: '120px',
    src: 'thumbnail.png'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('画像にalt属性が存在し、データが設定されていていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Soda Blue');
    });
    await step('ふちどり用として指定した色が正しいこと', async () => {
      await expect(args.borderColor).toBe('--soda-blue');
    });
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const L=["Default","Yellow","Blue"];export{i as Blue,s as Default,l as Yellow,L as __namedExportsOrder,R as default};
//# sourceMappingURL=Thumbnail.stories-c68fd418.js.map
