import{w as s,a as v,e}from"./index-VcOyZcGC.js";import{A as h}from"./Avatar-DPCuIQBa.js";import"./utils-CYv1eXzJ.js";import"./runtime-wsfZMhMn.js";import"./render-Bg5rVFe_.js";import"./if-iigMaAYr.js";import"./branches-BA38eCjI.js";import"./attributes-AocaKpir.js";import"./style-CzvSAXNl.js";import"./class-DLL6I9hl.js";import"./props-CRdl8imZ.js";const x=""+new URL("ccl_pink-33aTNuZY.png",import.meta.url).href,f={title:"CommonComponents/Avatar",component:h,tags:["autodocs"],args:{name:"Aoi Mori"}},o={args:{src:x,alt:"森さんのプロフィール画像"},play:async({canvasElement:a,step:t})=>{await t("画像が読み込まれ、代替テキストで識別できること",async()=>{const n=s(a).getByRole("img",{name:"森さんのプロフィール画像"});await v(()=>{var c;return e((c=n.querySelector("img"))==null?void 0:c.naturalWidth).toBeGreaterThan(0)})})}},r={play:async({canvasElement:a,step:t})=>{await t("画像未設定時にイニシャルが表示されていること",async()=>{await e(s(a).getByText("AM")).toBeVisible(),await e(s(a).getByRole("img",{name:"Aoi Mori"})).toBeVisible()})}},i={args:{src:"data:image/png,invalid",decorative:!0},play:async({canvasElement:a,step:t})=>{await t("読み込みに失敗した画像が隠れ、装飾用のイニシャルが表示されていること",async()=>{const n=s(a);await v(()=>e(a.querySelector("img")).not.toBeVisible()),await e(n.getByText("AM")).toBeVisible(),await e(n.queryByRole("img")).not.toBeInTheDocument()})}};var m,p,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: exampleImage,
    alt: '森さんのプロフィール画像'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('画像が読み込まれ、代替テキストで識別できること', async () => {
      const avatar = within(canvasElement).getByRole('img', {
        name: '森さんのプロフィール画像'
      });
      await waitFor(() => expect(avatar.querySelector('img')?.naturalWidth).toBeGreaterThan(0));
    });
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,y,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    await step('画像未設定時にイニシャルが表示されていること', async () => {
      await expect(within(canvasElement).getByText('AM')).toBeVisible();
      await expect(within(canvasElement).getByRole('img', {
        name: 'Aoi Mori'
      })).toBeVisible();
    });
  }
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var u,B,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: 'data:image/png,invalid',
    decorative: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('読み込みに失敗した画像が隠れ、装飾用のイニシャルが表示されていること', async () => {
      const canvas = within(canvasElement);
      await waitFor(() => expect(canvasElement.querySelector('img')).not.toBeVisible());
      await expect(canvas.getByText('AM')).toBeVisible();
      await expect(canvas.queryByRole('img')).not.toBeInTheDocument();
    });
  }
}`,...(d=(B=i.parameters)==null?void 0:B.docs)==null?void 0:d.source}}};const k=["WithImage","WithoutImage","BrokenImage"];export{i as BrokenImage,o as WithImage,r as WithoutImage,k as __namedExportsOrder,f as default};
//# sourceMappingURL=Avatar.stories-CVCw-RbL.js.map
