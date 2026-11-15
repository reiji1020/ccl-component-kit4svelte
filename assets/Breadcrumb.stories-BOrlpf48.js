import{w as u,e as n}from"./index-VcOyZcGC.js";import{B as w}from"./Breadcrumb-BD5wcwGw.js";import{C as c,a as B}from"./config-CTdRYYkh.js";import"./utils-CYv1eXzJ.js";import"./runtime-wsfZMhMn.js";import"./legacy-BwD19ho3.js";import"./render-Bg5rVFe_.js";import"./if-iigMaAYr.js";import"./branches-BA38eCjI.js";import"./each-B9rz6Kal.js";import"./slot-BP_Qo1ZM.js";import"./attributes-AocaKpir.js";import"./style-CzvSAXNl.js";import"./class-DLL6I9hl.js";import"./lifecycle-Ddg4XA08.js";import"./props-CRdl8imZ.js";import"./colorMap-Dl9Jr6T3.js";const k={title:"CommonComponents/Breadcrumb",component:w,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{items:{control:"object",description:"パンくず項目の配列"},separator:{control:"text",description:"区切り文字（slot優先）"},ariaLabel:{control:"text"},lastItemClickable:{control:"boolean"},activeColor:{control:{type:"select"},options:[void 0,...Object.values(c),...Object.values(B)]}}},l=[{label:"Home",href:"#"},{label:"Library",href:"#"},{label:"Data"}],s={args:{items:l,separator:"/",ariaLabel:"Breadcrumb"},play:async({canvasElement:o,step:a})=>{const e=u(o);await a("navのaria-labelが指定通りであること",async()=>{const t=e.getByLabelText("Breadcrumb");await n(t).toBeInTheDocument()}),await a("最後の要素が現在地としてマークされていること",async()=>{const t=await e.findByText("Data");await n(t).toHaveAttribute("aria-current","page")}),await a("セパレータが表示されていること",async()=>{const t=e.getAllByText("/",{exact:!0});await n(t.length).toBe(l.length-1)})}},r={args:{items:[{label:"Home",href:"#"},{label:"Projects",href:"#"},{label:"Svelte",href:"#"}],lastItemClickable:!0,activeColor:c.SODA_BLUE},play:async({canvasElement:o,step:a})=>{const e=u(o);await a("最後の要素がリンクであること",async()=>{const t=e.getByText("Svelte");await n(t.tagName).toBe("A")}),await a("最後の要素にaria-currentが付与されていないこと",async()=>{const t=e.getByText("Svelte");await n(t).not.toHaveAttribute("aria-current")}),await a("アクティブ要素の色が指定通りであること",async()=>{const t=e.getByText("Svelte");await n(t.getAttribute("style")).toContain(`var(${c.SODA_BLUE})`)})}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const U=["Default","WithClickableLast"];export{s as Default,r as WithClickableLast,U as __namedExportsOrder,k as default};
//# sourceMappingURL=Breadcrumb.stories-BOrlpf48.js.map
