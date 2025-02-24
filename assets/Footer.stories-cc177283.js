import{F as B}from"./Footer-1b26d005.js";import{C as o}from"./config-e4d7b61a.js";import{e as t}from"./index-ea2a2f54.js";import"./index-edc2d624.js";import"./lifecycle-4aaf5bd1.js";const N={title:"CommonComponents/Footer",component:B,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{bgColor:{control:{type:"select"},options:[o.STRAWBERRY_PINK,o.PINEAPPLE_YELLOW,o.SODA_BLUE,o.MELON_GREEN,o.GRAPE_PURPLE,o.WRAP_GREY]}}},e={args:{bgColor:o.STRAWBERRY_PINK},play:async({args:a,step:r})=>{await r("背景色に指定した色がセットされていること",async()=>{await t(a.bgColor).toBe("--strawberry-pink")})}},s={args:{bgColor:o.PINEAPPLE_YELLOW},play:async({args:a,step:r})=>{await r("背景色に指定した色がセットされていること",async()=>{await t(a.bgColor).toBe("--pineapple-yellow")})}},n={args:{bgColor:o.SODA_BLUE},play:async({args:a,step:r})=>{await r("背景色に指定した色がセットされていること",async()=>{await t(a.bgColor).toBe("--soda-blue")})}};var p,c,i,l,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色に指定した色がセットされていること', async () => {
      await expect(args.bgColor).toBe('--strawberry-pink');
    });
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:`通常カラー、基本的にはこの色を使用する

必ずHeaderコンポーネントの色と揃えて使用する`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var g,m,y,C,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色に指定した色がセットされていること', async () => {
      await expect(args.bgColor).toBe('--pineapple-yellow');
    });
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:`サブカラー、ピンクが使用できない時に使う

必ずHeaderコンポーネントの色と揃えて使用する`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var w,L,P,b,u;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色に指定した色がセットされていること', async () => {
      await expect(args.bgColor).toBe('--soda-blue');
    });
  }
}`,...(P=(L=n.parameters)==null?void 0:L.docs)==null?void 0:P.source},description:{story:`ピンク、イエローが使えない時に使う

必ずHeaderコンポーネントの色と揃えて使用する`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.description}}};const O=["Pink","Yellow","Blue"];export{n as Blue,e as Pink,s as Yellow,O as __namedExportsOrder,N as default};
//# sourceMappingURL=Footer.stories-cc177283.js.map
