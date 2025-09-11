import{w as u,e as n}from"./index-CrmC1JuE.js";import{B as w}from"./Breadcrumb-B40iveZ1.js";import{C as c,a as B}from"./config-kcBgQwvH.js";import"./props-3HJCWkym.js";import"./runtime-gABUAsI6.js";import"./render-B8lLeNvm.js";import"./if-B7kPsuPf.js";import"./each-Bi0pIGDH.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CwLrNkg5.js";import"./style-DvJ3IcV1.js";import"./class-B-bVKzaY.js";import"./lifecycle-Cmteo-47.js";import"./colorMap-1NqL52rF.js";const O={title:"CommonComponents/Breadcrumb",component:w,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{items:{control:"object",description:"パンくず項目の配列"},separator:{control:"text",description:"区切り文字（slot優先）"},ariaLabel:{control:"text"},lastItemClickable:{control:"boolean"},activeColor:{control:{type:"select"},options:[void 0,...Object.values(c),...Object.values(B)]}}},l=[{label:"Home",href:"#"},{label:"Library",href:"#"},{label:"Data"}],s={args:{items:l,separator:"/",ariaLabel:"Breadcrumb"},play:async({canvasElement:o,step:t})=>{const e=u(o);await t("navのaria-labelが指定通りであること",async()=>{const a=e.getByLabelText("Breadcrumb");await n(a).toBeInTheDocument()}),await t("最後の要素が現在地としてマークされていること",async()=>{const a=await e.findByText("Data");await n(a).toHaveAttribute("aria-current","page")}),await t("セパレータが表示されていること",async()=>{const a=e.getAllByText("/",{exact:!0});await n(a.length).toBe(l.length-1)})}},r={args:{items:[{label:"Home",href:"#"},{label:"Projects",href:"#"},{label:"Svelte",href:"#"}],lastItemClickable:!0,activeColor:c.SODA_BLUE},play:async({canvasElement:o,step:t})=>{const e=u(o);await t("最後の要素がリンクであること",async()=>{const a=e.getByText("Svelte");await n(a.tagName).toBe("A")}),await t("最後の要素にaria-currentが付与されていないこと",async()=>{const a=e.getByText("Svelte");await n(a).not.toHaveAttribute("aria-current")}),await t("アクティブ要素の色が指定通りであること",async()=>{const a=e.getByText("Svelte");await n(a.getAttribute("style")).toContain(`var(${c.SODA_BLUE})`)})}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: baseItems,
    separator: '/',
    ariaLabel: 'Breadcrumb'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('navのaria-labelが指定通りであること', async () => {
      const nav = canvas.getByLabelText('Breadcrumb');
      await expect(nav).toBeInTheDocument();
    });
    await step('最後の要素が現在地としてマークされていること', async () => {
      const last = await canvas.findByText('Data');
      await expect(last).toHaveAttribute('aria-current', 'page');
    });
    await step('セパレータが表示されていること', async () => {
      const seps = canvas.getAllByText('/', {
        exact: true
      });
      await expect(seps.length).toBe(baseItems.length - 1);
    });
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,b,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Projects',
      href: '#'
    }, {
      label: 'Svelte',
      href: '#'
    }],
    lastItemClickable: true,
    activeColor: CCLVividColor.SODA_BLUE
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('最後の要素がリンクであること', async () => {
      const last = canvas.getByText('Svelte');
      await expect(last.tagName).toBe('A');
    });
    await step('最後の要素にaria-currentが付与されていないこと', async () => {
      const last = canvas.getByText('Svelte');
      await expect(last).not.toHaveAttribute('aria-current');
    });
    await step('アクティブ要素の色が指定通りであること', async () => {
      const last = canvas.getByText('Svelte') as HTMLElement;
      await expect(last.getAttribute('style')).toContain(\`var(\${CCLVividColor.SODA_BLUE})\`);
    });
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const _=["Default","WithClickableLast"];export{s as Default,r as WithClickableLast,_ as __namedExportsOrder,O as default};
//# sourceMappingURL=Breadcrumb.stories-BohY3cd2.js.map
