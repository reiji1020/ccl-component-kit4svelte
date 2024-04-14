import{S as eu,i as tu,s as au,e as y,l as R,t as F,c as m,a as b,m as S,b as I,d as v,f as c,o as N,g as w,h as ru,j as A,k as Y,n as O}from"./index-5bf62044.js";import{a as E,C as a}from"./config-38d8c761.js";import{w as T,e as i}from"./index-000460d8.js";import"./lifecycle-4aaf5bd1.js";function ou(e){let u,t,B,s,l,C,d,p,r,D,P;return{c(){u=y("div"),t=y("img"),s=R(),l=y("div"),C=y("div"),d=y("h2"),p=F(e[3]),r=R(),D=y("span"),P=F(e[4]),this.h()},l(n){u=m(n,"DIV",{class:!0,style:!0});var o=b(u);t=m(o,"IMG",{class:!0,src:!0,alt:!0}),s=S(o),l=m(o,"DIV",{class:!0,style:!0});var L=b(l);C=m(L,"DIV",{class:!0});var x=b(C);d=m(x,"H2",{class:!0});var h=b(d);p=I(h,e[3]),h.forEach(v),r=S(x),D=m(x,"SPAN",{class:!0});var k=b(D);P=I(k,e[4]),k.forEach(v),x.forEach(v),L.forEach(v),o.forEach(v),this.h()},h(){c(t,"class","CardImage svelte-lkp34v"),N(t.src,B=e[1])||c(t,"src",B),c(t,"alt",e[2]),c(d,"class","CardTitle svelte-lkp34v"),c(D,"class","CardText svelte-lkp34v"),c(C,"class","CardTextWrapper svelte-lkp34v"),c(l,"class","CardInfo svelte-lkp34v"),w(l,"--background-color","var("+e[5]+")"),c(u,"class","CardWrapper svelte-lkp34v"),w(u,"--border-color","var("+e[0]+")")},m(n,o){ru(n,u,o),A(u,t),A(u,s),A(u,l),A(l,C),A(C,d),A(d,p),A(C,r),A(C,D),A(D,P)},p(n,[o]){o&2&&!N(t.src,B=n[1])&&c(t,"src",B),o&4&&c(t,"alt",n[2]),o&8&&Y(p,n[3]),o&16&&Y(P,n[4]),o&32&&w(l,"--background-color","var("+n[5]+")"),o&1&&w(u,"--border-color","var("+n[0]+")")},i:O,o:O,d(n){n&&v(u)}}}function su(e,u,t){let{borderColor:B}=u,s;switch(B){case a.STRAWBERRY_PINK:s=E.PEACH_PINK;break;case a.PINEAPPLE_YELLOW:s=E.LEMON_YELLOW;break;case a.SODA_BLUE:s=E.SUGAR_BLUE;break;case a.MELON_GREEN:s=E.MATCHA_GREEN;break;case a.GRAPE_PURPLE:s=E.AKEBI_PURPLE;break;case a.WRAP_GREY:s=E.CLOUD_GREY;break;default:s=E.PEACH_PINK;break}let{src:l}=u,{altText:C}=u,{title:d}=u,{cardText:p}=u;return e.$$set=r=>{"borderColor"in r&&t(0,B=r.borderColor),"src"in r&&t(1,l=r.src),"altText"in r&&t(2,C=r.altText),"title"in r&&t(3,d=r.title),"cardText"in r&&t(4,p=r.cardText)},[B,l,C,d,p,s]}class uu extends eu{constructor(u){super(),tu(this,u,su,ou,au,{borderColor:0,src:1,altText:2,title:3,cardText:4})}}uu.__docgen={version:3,name:"Card.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"枠線の色",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"画像ソース",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"alt属性に指定する値",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"記事の見出し",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"カードの詳細テキスト(140字程度推奨)",name:"cardText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const cu={title:"Common/Card",component:uu,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{borderColor:{control:{type:"select"},options:[a.STRAWBERRY_PINK,a.PINEAPPLE_YELLOW,a.SODA_BLUE,a.MELON_GREEN,a.GRAPE_PURPLE,a.WRAP_GREY]},altText:{control:{type:"text"}},title:{control:{type:"text"}},cardText:{control:{type:"text"}},src:{control:{type:"text"}}}},_={args:{borderColor:a.STRAWBERRY_PINK,src:"thumbnail.png",altText:"Strawberry Pink",title:"プライマリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:e,canvasElement:u})=>{const t=T(u);await i(t.getByRole("img")).toHaveAttribute("alt","Strawberry Pink"),await i(e.borderColor).toBe(a.STRAWBERRY_PINK),await i(e.title).toBe("プライマリカラーのカードです"),await i(e.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}},g={args:{borderColor:a.PINEAPPLE_YELLOW,src:"thumbnail.png",altText:"Pineapple Yellow",title:"セカンダリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:e,canvasElement:u})=>{const t=T(u);await i(t.getByRole("img")).toHaveAttribute("alt","Pineapple Yellow"),await i(e.borderColor).toBe(a.PINEAPPLE_YELLOW),await i(e.title).toBe("セカンダリカラーのカードです"),await i(e.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}},f={args:{borderColor:a.SODA_BLUE,src:"thumbnail.png",altText:"Soda Blue",title:"汎用的なお知らせ用のカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:e,canvasElement:u})=>{const t=T(u);await i(t.getByRole("img")).toHaveAttribute("alt","Soda Blue"),await i(e.borderColor).toBe(a.SODA_BLUE),await i(e.title).toBe("汎用的なお知らせ用のカードです"),await i(e.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}};var W,U,G,H,V;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    src: 'thumbnail.png',
    altText: 'Strawberry Pink',
    title: 'プライマリカラーのカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Strawberry Pink');
    await expect(args.borderColor).toBe(CCLVividColor.STRAWBERRY_PINK);
    await expect(args.title).toBe('プライマリカラーのカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(G=(U=_.parameters)==null?void 0:U.docs)==null?void 0:G.source},description:{story:`イベント出展などのお知らせはプライマリカラーを使用します。

Primary colour for notices of event exhibits, etc.`,...(V=(H=_.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var K,M,q,j,z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    src: 'thumbnail.png',
    altText: 'Pineapple Yellow',
    title: 'セカンダリカラーのカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Pineapple Yellow');
    await expect(args.borderColor).toBe(CCLVividColor.PINEAPPLE_YELLOW);
    await expect(args.title).toBe('セカンダリカラーのカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:q.source},description:{story:`書籍の出版などのオフライン活動に関してはセカンダリカラーを使用します。

For offline activities such as book publishing, a secondary colour is used.`,...(z=(j=g.parameters)==null?void 0:j.docs)==null?void 0:z.description}}};var J,Q,X,Z,$;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    src: 'thumbnail.png',
    altText: 'Soda Blue',
    title: '汎用的なお知らせ用のカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Soda Blue');
    await expect(args.borderColor).toBe(CCLVividColor.SODA_BLUE);
    await expect(args.title).toBe('汎用的なお知らせ用のカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`その他の汎用的なお知らせとしてサードカラーを使用します。

Use third colour for other generic notices.`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};const du=["Default","SecondColor","ThirdColor"];export{_ as Default,g as SecondColor,f as ThirdColor,du as __namedExportsOrder,cu as default};
