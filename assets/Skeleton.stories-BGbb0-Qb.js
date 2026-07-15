import{w as l,e as s}from"./index-QS0pQwF5.js";import{S as B}from"./Skeleton-B56GCw6t.js";import"./utils-BD5XdJRN.js";import"./runtime-zEBa7sgE.js";import"./if-CfGiC-YB.js";import"./branches-xTPa7yEe.js";import"./each-CfxlAklW.js";import"./attributes-CITH35_k.js";import"./style-BOp-ASFv.js";import"./class-Bpq8mdK_.js";import"./props-rI6kvREJ.js";const q={title:"CommonComponents/Skeleton",component:B,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:{type:"radio"},options:["text","rect","circle"]},width:{control:"text"},height:{control:"text"},radius:{control:"text"},lines:{control:{type:"number",min:1,max:10,step:1}}}},o={args:{variant:"text",lines:3,width:"360px",height:"14px"},play:async({canvasElement:i,step:t})=>{const n=l(i);await t("スケルトンが表示されていること",async()=>{const a=n.getByRole("presentation",{hidden:!0});await s(a).toBeInTheDocument()}),await t("指定行数のラインが描画されていること",async()=>{const e=n.getByRole("presentation",{hidden:!0}).querySelectorAll(".line");await s(e.length).toBe(3)})}},r={args:{variant:"rect",width:"240px",height:"120px",radius:"8px"},play:async({canvasElement:i,step:t,args:n})=>{const a=l(i);await t("スケルトンが表示されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e).toBeInTheDocument()}),await t("指定のサイズが適用されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e.style.width).toBe(n.width),await s(e.style.height).toBe(n.height)})}},c={args:{variant:"circle",width:"64px",height:"64px"},play:async({canvasElement:i,step:t,args:n})=>{const a=l(i);await t("スケルトンが表示されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e).toBeInTheDocument()}),await t("指定のサイズが適用されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e.style.width).toBe(n.width),await s(e.style.height).toBe(n.height)})}};var p,h,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 3,
    width: '360px',
    height: '14px'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('スケルトンが表示されていること', async () => {
      const el = canvas.getByRole('presentation', {
        hidden: true
      });
      await expect(el).toBeInTheDocument();
    });
    await step('指定行数のラインが描画されていること', async () => {
      const el = canvas.getByRole('presentation', {
        hidden: true
      });
      const lines = el.querySelectorAll('.line');
      await expect(lines.length).toBe(3);
    });
  }
}`,...(d=(h=o.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var y,m,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'rect',
    width: '240px',
    height: '120px',
    radius: '8px'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('スケルトンが表示されていること', async () => {
      const el = canvas.getByRole('presentation', {
        hidden: true
      });
      await expect(el).toBeInTheDocument();
    });
    await step('指定のサイズが適用されていること', async () => {
      const el = canvas.getByRole('presentation', {
        hidden: true
      }) as HTMLElement;
      await expect(el.style.width).toBe(args.width);
      await expect(el.style.height).toBe(args.height);
    });
  }
}`,...(w=(m=r.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var g,u,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '64px',
    height: '64px'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('スケルトンが表示されていること', async () => {
      const el = canvas.getByRole('presentation', {
        hidden: true
      });
      await expect(el).toBeInTheDocument();
    });
    await step('指定のサイズが適用されていること', async () => {
      const el = canvas.getByRole('presentation', {
        hidden: true
      }) as HTMLElement;
      await expect(el.style.width).toBe(args.width);
      await expect(el.style.height).toBe(args.height);
    });
  }
}`,...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const A=["TextLines","Rectangle","Circle"];export{c as Circle,r as Rectangle,o as TextLines,A as __namedExportsOrder,q as default};
//# sourceMappingURL=Skeleton.stories-BGbb0-Qb.js.map
