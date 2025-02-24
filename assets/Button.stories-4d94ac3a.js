import{B as V}from"./Button-37bab43c.js";import{C as e}from"./config-e4d7b61a.js";import{f as r,w as c,u as l,e as t}from"./index-ea2a2f54.js";import"./index-edc2d624.js";import"./lifecycle-4aaf5bd1.js";const q={title:"CommonComponents/Button",component:V,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{bgColor:{control:{type:"select"},options:[e.STRAWBERRY_PINK,e.PINEAPPLE_YELLOW,e.SODA_BLUE,e.MELON_GREEN,e.GRAPE_PURPLE,e.WRAP_GREY]},onClick:r()}},i={args:{bgColor:e.STRAWBERRY_PINK,label:"Strawberry Pink",onClick:r()},play:async({args:n,canvasElement:o,step:a})=>{await a("ボタンが存在するかどうかをチェックする",async()=>{const s=c(o);await l.click(s.getByRole("button"))}),await a("ボタンの色がプロパティの通りに設定されている",async()=>{await t(n.bgColor).toBe("--strawberry-pink")}),await a("ボタンのテキストがプロパティの通りに設定されている",async()=>{await t(n.label).toBe("Strawberry Pink")})}},p={args:{bgColor:e.PINEAPPLE_YELLOW,label:"Pineapple Yellow",onClick:r()},play:async({args:n,canvasElement:o,step:a})=>{await a("ボタンが存在するかどうかをチェックする",async()=>{const s=c(o);await l.click(s.getByRole("button"))}),await a("ボタンの色がプロパティの通りに設定されている",async()=>{await t(n.bgColor).toBe("--pineapple-yellow")}),await a("ボタンのテキストがプロパティの通りに設定されている",async()=>{await t(n.label).toBe("Pineapple Yellow")})}},w={args:{bgColor:e.SODA_BLUE,label:"Soda Blue",onClick:r()},play:async({args:n,canvasElement:o,step:a})=>{await a("ボタンが存在するかどうかをチェックする",async()=>{const s=c(o);await l.click(s.getByRole("button"))}),await a("ボタンの色がプロパティの通りに設定されている",async()=>{await t(n.bgColor).toBe("--soda-blue")}),await a("ボタンのテキストがプロパティの通りに設定されている",async()=>{await t(n.label).toBe("Soda Blue")})}},y={args:{bgColor:e.MELON_GREEN,label:"Melon Green",onClick:r()},play:async({args:n,canvasElement:o,step:a})=>{await a("ボタンが存在するかどうかをチェックする",async()=>{const s=c(o);await l.click(s.getByRole("button"))}),await a("ボタンの色がプロパティの通りに設定されている",async()=>{await t(n.bgColor).toBe("--melon-green")}),await a("ボタンのテキストがプロパティの通りに設定されている",async()=>{await t(n.label).toBe("Melon Green")})}},g={args:{bgColor:e.GRAPE_PURPLE,label:"Grape Purple",onClick:r()},play:async({args:n,canvasElement:o,step:a})=>{await a("ボタンが存在するかどうかをチェックする",async()=>{const s=c(o);await l.click(s.getByRole("button"))}),await a("ボタンの色がプロパティの通りに設定されている",async()=>{await t(n.bgColor).toBe("--grape-purple")}),await a("ボタンのテキストがプロパティの通りに設定されている",async()=>{await t(n.label).toBe("Grape Purple")})}},b={args:{bgColor:e.WRAP_GREY,label:"Wrap Grey",onClick:r()},play:async({args:n,canvasElement:o,step:a})=>{await a("ボタンが存在するかどうかをチェックする",async()=>{const s=c(o);await l.click(s.getByRole("button"))}),await a("ボタンの色がプロパティの通りに設定されている",async()=>{await t(n.bgColor).toBe("--wrap-grey")}),await a("ボタンのテキストがプロパティの通りに設定されている",async()=>{await t(n.label).toBe("Wrap Grey")})}};var u,m,C,E,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: 'Strawberry Pink',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('ボタンが存在するかどうかをチェックする', async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button'));
    });
    await step('ボタンの色がプロパティの通りに設定されている', async () => {
      await expect(args.bgColor).toBe('--strawberry-pink');
    });
    await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
      await expect(args.label).toBe('Strawberry Pink');
    });
  }
}`,...(C=(m=i.parameters)==null?void 0:m.docs)==null?void 0:C.source},description:{story:`サービス、サークルのメインカラー

意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。

Services, main colours of the circle.

Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.`,...(d=(E=i.parameters)==null?void 0:E.docs)==null?void 0:d.description}}};var B,v,P,k,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: 'Pineapple Yellow',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('ボタンが存在するかどうかをチェックする', async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button'));
    });
    await step('ボタンの色がプロパティの通りに設定されている', async () => {
      await expect(args.bgColor).toBe('--pineapple-yellow');
    });
    await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
      await expect(args.label).toBe('Pineapple Yellow');
    });
  }
}`,...(P=(v=p.parameters)==null?void 0:v.docs)==null?void 0:P.source},description:{story:`意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。

Used when presenting information to help or assist users in decision-making. Neutral colour.`,...(R=(k=p.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};var G,L,S,_,f;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: 'Soda Blue',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('ボタンが存在するかどうかをチェックする', async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button'));
    });
    await step('ボタンの色がプロパティの通りに設定されている', async () => {
      await expect(args.bgColor).toBe('--soda-blue');
    });
    await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
      await expect(args.label).toBe('Soda Blue');
    });
  }
}`,...(S=(L=w.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:`意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。

Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.`,...(f=(_=w.parameters)==null?void 0:_.docs)==null?void 0:f.description}}};var x,A,Y;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: 'Melon Green',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('ボタンが存在するかどうかをチェックする', async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button'));
    });
    await step('ボタンの色がプロパティの通りに設定されている', async () => {
      await expect(args.bgColor).toBe('--melon-green');
    });
    await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
      await expect(args.label).toBe('Melon Green');
    });
  }
}`,...(Y=(A=y.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var N,h,W;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: 'Grape Purple',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('ボタンが存在するかどうかをチェックする', async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button'));
    });
    await step('ボタンの色がプロパティの通りに設定されている', async () => {
      await expect(args.bgColor).toBe('--grape-purple');
    });
    await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
      await expect(args.label).toBe('Grape Purple');
    });
  }
}`,...(W=(h=g.parameters)==null?void 0:h.docs)==null?void 0:W.source}}};var O,U,M;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: 'Wrap Grey',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('ボタンが存在するかどうかをチェックする', async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button'));
    });
    await step('ボタンの色がプロパティの通りに設定されている', async () => {
      await expect(args.bgColor).toBe('--wrap-grey');
    });
    await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
      await expect(args.label).toBe('Wrap Grey');
    });
  }
}`,...(M=(U=b.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};const z=["Pink","Yellow","Blue","Green","Purple","Grey"];export{w as Blue,y as Green,b as Grey,i as Pink,g as Purple,p as Yellow,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Button.stories-4d94ac3a.js.map
