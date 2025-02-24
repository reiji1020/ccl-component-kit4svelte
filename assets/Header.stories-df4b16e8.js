import{e as r}from"./index-ea2a2f54.js";import{H as $}from"./Header-85826238.js";import{C as t,H as o}from"./config-e4d7b61a.js";import"./index-edc2d624.js";import"./lifecycle-4aaf5bd1.js";const na={title:"CommonComponents/Header",component:$,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{bgColor:{control:{type:"select"},options:[t.STRAWBERRY_PINK,t.PINEAPPLE_YELLOW,t.SODA_BLUE,t.MELON_GREEN,t.GRAPE_PURPLE,t.WRAP_GREY]},height:{control:{type:"select"},options:[o.NALLOW,o.NORMAL,o.WIDE]}}},n={args:{bgColor:t.STRAWBERRY_PINK,height:o.NORMAL},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--strawberry-pink")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-normal")})}},s={args:{bgColor:t.PINEAPPLE_YELLOW,height:o.NORMAL},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--pineapple-yellow")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-normal")})}},i={args:{bgColor:t.SODA_BLUE,height:o.NORMAL},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--soda-blue")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-normal")})}},c={args:{bgColor:t.MELON_GREEN,height:o.NORMAL},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--melon-green")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-normal")})}},p={args:{bgColor:t.GRAPE_PURPLE,height:o.NORMAL},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--grape-purple")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-normal")})}},g={args:{bgColor:t.WRAP_GREY,height:o.NORMAL},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--wrap-grey")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-normal")})}},d={args:{bgColor:t.STRAWBERRY_PINK,height:o.WIDE},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--strawberry-pink")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-wide")})}},l={args:{bgColor:t.STRAWBERRY_PINK,height:o.NALLOW},play:async({args:a,step:e})=>{await e("背景色にセットした色が渡されていること",async()=>{await r(a.bgColor).toBe("--strawberry-pink")}),await e("Headerの高さがセットした大きさになっていること",async()=>{await r(a.height).toBe("--hd-nallow")})}};var h,y,w,m,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.NORMAL
  },
  play: async ({
    args,
    step
  }) => {
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe('--strawberry-pink');
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe('--hd-normal');
    });
  }
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`メインカラー、通常はこの幅・このカラーのヘッダーを使用する。

ロゴ部分にはサービストップへのリンクがあることが望ましい。`,...(C=(m=n.parameters)==null?void 0:m.docs)==null?void 0:C.description}}};var R,L,E,B,H;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    height: HeaderHeight.NORMAL
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
  }
}`,...(E=(L=s.parameters)==null?void 0:L.docs)==null?void 0:E.source},description:{story:"セカンドカラー、メインカラーのピンクが使用できない場合に代用する",...(H=(B=s.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};var b,A,u,N,P;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    height: HeaderHeight.NORMAL
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
  }
}`,...(u=(A=i.parameters)==null?void 0:A.docs)==null?void 0:u.source},description:{story:"サービスカラーを変えた場合などに使用、もしくはナイトモードでのプライマリカラーを想定。",...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var O,_,W,x,S;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    height: HeaderHeight.NORMAL
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
  }
}`,...(W=(_=c.parameters)==null?void 0:_.docs)==null?void 0:W.source},description:{story:"あまり活用機会は無いかも",...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.description}}};var Y,M,G,I,T;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    height: HeaderHeight.NORMAL
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
  }
}`,...(G=(M=p.parameters)==null?void 0:M.docs)==null?void 0:G.source},description:{story:"あまり活用機会は無いかも",...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var v,V,k,K,D;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    height: HeaderHeight.NORMAL
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
  }
}`,...(k=(V=g.parameters)==null?void 0:V.docs)==null?void 0:k.source},description:{story:"あまり活用機会は無いかも",...(D=(K=g.parameters)==null?void 0:K.docs)==null?void 0:D.description}}};var U,f,j,q,z;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.WIDE
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
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:"PC向けサービスなどでヘッダーの太さがもっと欲しいときなどに使用する",...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var F,J,Q,X,Z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.NALLOW
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
}`,...(Q=(J=l.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"スマホ向けサービスなどでヘッダーの太さを削りたい時に使用する。",...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};const sa=["Pink","Yellow","ThirdColor","Green","Purple","GREY","WideHeader","NallowHeader"];export{g as GREY,c as Green,l as NallowHeader,n as Pink,p as Purple,i as ThirdColor,d as WideHeader,s as Yellow,sa as __namedExportsOrder,na as default};
//# sourceMappingURL=Header.stories-df4b16e8.js.map
