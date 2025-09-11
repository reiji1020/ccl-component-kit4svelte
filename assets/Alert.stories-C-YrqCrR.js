import{A as M}from"./Alert-C5NIM6Z9.js";import{w as K,e as a,u as P}from"./index-CrmC1JuE.js";import"./props-3HJCWkym.js";import"./runtime-gABUAsI6.js";import"./index-client-CHQgsneQ.js";import"./render-B8lLeNvm.js";import"./if-B7kPsuPf.js";import"./class-B-bVKzaY.js";import"./style-DvJ3IcV1.js";import"./lifecycle-Cmteo-47.js";import"./config-kcBgQwvH.js";const as={title:"CommonComponents/Alert",component:M,tags:["autodocs"],argTypes:{message:{control:{type:"text"}},type:{control:{type:"select"},options:["success","error","warning","info"]},dismissible:{control:{type:"boolean"}},outline:{control:{type:"boolean"}},onDismiss:{action:"dismiss"}}},r={args:{message:"操作が正常に完了しました。",type:"success",dismissible:!0},play:async({canvasElement:d,args:e,step:n})=>{const s=K(d),y=s.getByText(e.message);await a(y).toBeInTheDocument(),e.dismissible&&(await n("閉じるボタンが表示されていること",async()=>{const t=s.getByLabelText("Dismiss alert");await a(t).toBeInTheDocument()}),await n("閉じるボタンをクリックするとonDismissイベントが発火すること",async()=>{const t=s.getByLabelText("Dismiss alert");await P.click(t),await a(e.onDismiss).toHaveBeenCalled()}))}},i={args:{message:"エラーが発生しました。もう一度お試しください。",type:"error",dismissible:!0}},o={args:{message:"入力内容を確認してください。",type:"warning",dismissible:!0}},c={args:{message:"新しい情報があります。",type:"info",dismissible:!1}},m={args:{message:"このアラートは閉じられません。",type:"info",dismissible:!1},play:async({canvasElement:d,args:e,step:n})=>{const s=K(d),y=s.getByText(e.message);await a(y).toBeInTheDocument(),await n("閉じるボタンが表示されていないこと",async()=>{const t=s.queryByLabelText("Dismiss alert");await a(t).not.toBeInTheDocument()})}},l={args:{message:"操作が正常に完了しました。",type:"success",dismissible:!0,outline:!0}},u={args:{message:"エラーが発生しました。もう一度お試しください。",type:"error",dismissible:!0,outline:!0}},p={args:{message:"入力内容を確認してください。",type:"warning",dismissible:!0,outline:!0}},g={args:{message:"新しい情報があります。",type:"info",dismissible:!1,outline:!0}};var b,B,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: '操作が正常に完了しました。',
    type: 'success',
    dismissible: true
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByText(args.message);
    await expect(alert).toBeInTheDocument();
    if (args.dismissible) {
      await step('閉じるボタンが表示されていること', async () => {
        const dismissButton = canvas.getByLabelText('Dismiss alert');
        await expect(dismissButton).toBeInTheDocument();
      });
      await step('閉じるボタンをクリックするとonDismissイベントが発火すること', async () => {
        const dismissButton = canvas.getByLabelText('Dismiss alert');
        await userEvent.click(dismissButton);
        await expect(args.onDismiss).toHaveBeenCalled();
      });
    }
  }
}`,...(w=(B=r.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var f,D,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    message: 'エラーが発生しました。もう一度お試しください。',
    type: 'error',
    dismissible: true
  }
}`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var T,v,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: '入力内容を確認してください。',
    type: 'warning',
    dismissible: true
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var I,h,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: '新しい情報があります。',
    type: 'info',
    dismissible: false
  }
}`,...(E=(h=c.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var O,L,C;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    message: 'このアラートは閉じられません。',
    type: 'info',
    dismissible: false
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByText(args.message);
    await expect(alert).toBeInTheDocument();
    await step('閉じるボタンが表示されていないこと', async () => {
      const dismissButton = canvas.queryByLabelText('Dismiss alert');
      await expect(dismissButton).not.toBeInTheDocument();
    });
  }
}`,...(C=(L=m.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var W,A,k;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    message: '操作が正常に完了しました。',
    type: 'success',
    dismissible: true,
    outline: true
  }
}`,...(k=(A=l.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var q,H,N;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    message: 'エラーが発生しました。もう一度お試しください。',
    type: 'error',
    dismissible: true,
    outline: true
  }
}`,...(N=(H=u.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,j,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    message: '入力内容を確認してください。',
    type: 'warning',
    dismissible: true,
    outline: true
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var F,G,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    message: '新しい情報があります。',
    type: 'info',
    dismissible: false,
    outline: true
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ns=["Success","Error","Warning","Info","NotDismissible","OutlineSuccess","OutlineError","OutlineWarning","OutlineInfo"];export{i as Error,c as Info,m as NotDismissible,u as OutlineError,g as OutlineInfo,l as OutlineSuccess,p as OutlineWarning,r as Success,o as Warning,ns as __namedExportsOrder,as as default};
//# sourceMappingURL=Alert.stories-C-YrqCrR.js.map
