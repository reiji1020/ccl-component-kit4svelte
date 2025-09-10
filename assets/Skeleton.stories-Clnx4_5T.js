import{w as l,e as s}from"./index-CrmC1JuE.js";import{S as B}from"./Skeleton-Dpj7ZNFt.js";import"./props-CUu2VnSM.js";import"./runtime-gABUAsI6.js";import"./if-B7kPsuPf.js";import"./each-Bi0pIGDH.js";import"./attributes-CYWh1Jxy.js";import"./style-DvJ3IcV1.js";import"./class-B-bVKzaY.js";const f={title:"CommonComponents/Skeleton",component:B,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:{type:"radio"},options:["text","rect","circle"]},width:{control:"text"},height:{control:"text"},radius:{control:"text"},lines:{control:{type:"number",min:1,max:10,step:1}}}},o={args:{variant:"text",lines:3,width:"360px",height:"14px"},play:async({canvasElement:i,step:t})=>{const n=l(i);await t("スケルトンが表示されていること",async()=>{const a=n.getByRole("presentation",{hidden:!0});await s(a).toBeInTheDocument()}),await t("指定行数のラインが描画されていること",async()=>{const e=n.getByRole("presentation",{hidden:!0}).querySelectorAll(".line");await s(e.length).toBe(3)})}},r={args:{variant:"rect",width:"240px",height:"120px",radius:"8px"},play:async({canvasElement:i,step:t,args:n})=>{const a=l(i);await t("スケルトンが表示されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e).toBeInTheDocument()}),await t("指定のサイズが適用されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e.style.width).toBe(n.width),await s(e.style.height).toBe(n.height)})}},c={args:{variant:"circle",width:"64px",height:"64px"},play:async({canvasElement:i,step:t,args:n})=>{const a=l(i);await t("スケルトンが表示されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e).toBeInTheDocument()}),await t("指定のサイズが適用されていること",async()=>{const e=a.getByRole("presentation",{hidden:!0});await s(e.style.width).toBe(n.width),await s(e.style.height).toBe(n.height)})}};var p,h,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(h=o.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var y,w,m;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(m=(w=r.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};var g,u,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const k=["TextLines","Rectangle","Circle"];export{c as Circle,r as Rectangle,o as TextLines,k as __namedExportsOrder,f as default};
//# sourceMappingURL=Skeleton.stories-Clnx4_5T.js.map
