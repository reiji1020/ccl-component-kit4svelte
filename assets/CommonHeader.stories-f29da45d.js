import{e as t,w as r}from"./index-ea2a2f54.js";import{C as ta}from"./CommonHeader-25c4d544.js";import{C as o,H as s}from"./config-e4d7b61a.js";import"./index-edc2d624.js";import"./lifecycle-4aaf5bd1.js";const ga={title:"CommonComponents/CommonHeader",component:ta,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{bgColor:{control:{type:"select"},options:[o.STRAWBERRY_PINK,o.PINEAPPLE_YELLOW,o.SODA_BLUE,o.MELON_GREEN,o.GRAPE_PURPLE,o.WRAP_GREY]},height:{control:{type:"select"},options:[s.NALLOW,s.NORMAL,s.WIDE]},logo:{control:{type:"text"}},logoHeight:{control:{type:"text"}}}},i={args:{bgColor:o.STRAWBERRY_PINK,height:s.NORMAL,logo:"beace.svg",logoHeight:"50px"},play:async({args:e,step:a,canvasElement:n})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--strawberry-pink")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-normal")}),await a("Headerに指定したsvg画像が埋め込まれていること",async()=>{const ea=r(n);await t(ea.getByRole("img")).toHaveAttribute("src","beace.svg")}),await a("Headerに指定したsvg画像のheightが正しく指定されていること",async()=>{await t(e.logoHeight).toBe("50px")})}},g={args:{bgColor:o.PINEAPPLE_YELLOW,height:s.NORMAL,logo:"beace.svg",logoHeight:"50px"},play:async({args:e,step:a})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--pineapple-yellow")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-normal")}),await a("Headerに指定したsvg画像が埋め込まれていること",async()=>{const n=r(canvasElement);await t(n.getByRole("img")).toHaveAttribute("src","beace.svg")}),await a("Headerに指定したsvg画像のheightが正しく指定されていること",async()=>{await t(e.logoHeight).toBe("50px")})}},c={args:{bgColor:o.SODA_BLUE,height:s.NORMAL,logo:"beace.svg",logoHeight:"50px"},play:async({args:e,step:a})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--soda-blue")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-normal")}),await a("Headerに指定したsvg画像が埋め込まれていること",async()=>{const n=r(canvasElement);await t(n.getByRole("img")).toHaveAttribute("src","beace.svg")}),await a("Headerに指定したsvg画像のheightが正しく指定されていること",async()=>{await t(e.logoHeight).toBe("50px")})}},l={args:{bgColor:o.MELON_GREEN,height:s.NORMAL,logo:"beace.svg",logoHeight:"50px"},play:async({args:e,step:a})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--melon-green")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-normal")}),await a("Headerに指定したsvg画像が埋め込まれていること",async()=>{const n=r(canvasElement);await t(n.getByRole("img")).toHaveAttribute("src","beace.svg")}),await a("Headerに指定したsvg画像のheightが正しく指定されていること",async()=>{await t(e.logoHeight).toBe("50px")})}},p={args:{bgColor:o.GRAPE_PURPLE,height:s.NORMAL,logo:"beace.svg",logoHeight:"50px"},play:async({args:e,step:a})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--grape-purple")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-normal")}),await a("Headerに指定したsvg画像が埋め込まれていること",async()=>{const n=r(canvasElement);await t(n.getByRole("img")).toHaveAttribute("src","beace.svg")}),await a("Headerに指定したsvg画像のheightが正しく指定されていること",async()=>{await t(e.logoHeight).toBe("50px")})}},h={args:{bgColor:o.WRAP_GREY,height:s.NORMAL,logo:"beace.svg",logoHeight:"50px"},play:async({args:e,step:a})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--wrap-grey")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-normal")}),await a("Headerに指定したsvg画像が埋め込まれていること",async()=>{const n=r(canvasElement);await t(n.getByRole("img")).toHaveAttribute("src","beace.svg")}),await a("Headerに指定したsvg画像のheightが正しく指定されていること",async()=>{await t(e.logoHeight).toBe("50px")})}},d={args:{bgColor:o.STRAWBERRY_PINK,height:s.WIDE,logo:"beace.svg",logoHeight:"50px"},play:async({args:e,step:a})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--strawberry-pink")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-wide")})}},w={args:{bgColor:o.STRAWBERRY_PINK,height:s.NALLOW,logo:"beace.svg",logoHeight:"30px"},play:async({args:e,step:a})=>{await a("背景色にセットした色が渡されていること",async()=>{await t(e.bgColor).toBe("--strawberry-pink")}),await a("Headerの高さがセットした大きさになっていること",async()=>{await t(e.height).toBe("--hd-nallow")})}};var y,H,v,m,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.NORMAL,
    logo: 'beace.svg',
    logoHeight: '50px'
  },
  play: async ({
    args,
    step,
    canvasElement
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--strawberry-pink');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-normal');
    });
    await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('src', 'beace.svg');
    });
    await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
      await expect(args.logoHeight).toBe('50px');
    });
  }
}`,...(v=(H=i.parameters)==null?void 0:H.docs)==null?void 0:v.source},description:{story:`メインカラー、通常はこの幅・このカラーのヘッダーを使用する。

ロゴ部分にはサービストップへのリンクがあることが望ましい。`,...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.description}}};var C,B,R,x,E;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    height: HeaderHeight.NORMAL,
    logo: 'beace.svg',
    logoHeight: '50px'
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--pineapple-yellow');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-normal');
    });
    await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('src', 'beace.svg');
    });
    await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
      await expect(args.logoHeight).toBe('50px');
    });
  }
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source},description:{story:"セカンドカラー、メインカラーのピンクが使用できない場合に代用する",...(E=(x=g.parameters)==null?void 0:x.docs)==null?void 0:E.description}}};var A,u,L,N,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    height: HeaderHeight.NORMAL,
    logo: 'beace.svg',
    logoHeight: '50px'
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--soda-blue');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-normal');
    });
    await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('src', 'beace.svg');
    });
    await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
      await expect(args.logoHeight).toBe('50px');
    });
  }
}`,...(L=(u=c.parameters)==null?void 0:u.docs)==null?void 0:L.source},description:{story:"サービスカラーを変えた場合などに使用、もしくはナイトモードでのプライマリカラーを想定。",...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var O,_,W,S,Y;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    height: HeaderHeight.NORMAL,
    logo: 'beace.svg',
    logoHeight: '50px'
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--melon-green');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-normal');
    });
    await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('src', 'beace.svg');
    });
    await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
      await expect(args.logoHeight).toBe('50px');
    });
  }
}`,...(W=(_=l.parameters)==null?void 0:_.docs)==null?void 0:W.source},description:{story:"あまり活用機会は無いかも",...(Y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:Y.description}}};var M,G,I,T,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    height: HeaderHeight.NORMAL,
    logo: 'beace.svg',
    logoHeight: '50px'
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--grape-purple');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-normal');
    });
    await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('src', 'beace.svg');
    });
    await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
      await expect(args.logoHeight).toBe('50px');
    });
  }
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source},description:{story:"あまり活用機会は無いかも",...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var k,K,D,U,f;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    height: HeaderHeight.NORMAL,
    logo: 'beace.svg',
    logoHeight: '50px'
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--wrap-grey');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-normal');
    });
    await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
      const canvas = within(canvasElement);
      await expect(canvas.getByRole('img')).toHaveAttribute('src', 'beace.svg');
    });
    await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
      await expect(args.logoHeight).toBe('50px');
    });
  }
}`,...(D=(K=h.parameters)==null?void 0:K.docs)==null?void 0:D.source},description:{story:"あまり活用機会は無いかも",...(f=(U=h.parameters)==null?void 0:U.docs)==null?void 0:f.description}}};var j,q,z,F,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.WIDE,
    logo: 'beace.svg',
    logoHeight: '50px'
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--strawberry-pink');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-wide');
    });
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"PC向けサービスなどでヘッダーの太さがもっと欲しいときなどに使用する",...(J=(F=d.parameters)==null?void 0:F.docs)==null?void 0:J.description}}};var Q,X,Z,$,aa;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.NALLOW,
    logo: 'beace.svg',
    logoHeight: '30px'
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--strawberry-pink');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-nallow');
    });
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"スマホ向けサービスなどでヘッダーの太さを削りたい時に使用する。",...(aa=($=w.parameters)==null?void 0:$.docs)==null?void 0:aa.description}}};const ca=["Pink","Yellow","ThirdColor","Green","Purple","GREY","WideHeader","NallowHeader"];export{h as GREY,l as Green,w as NallowHeader,i as Pink,p as Purple,c as ThirdColor,d as WideHeader,g as Yellow,ca as __namedExportsOrder,ga as default};
//# sourceMappingURL=CommonHeader.stories-f29da45d.js.map
