import{S as q,i as z,s as J,e as m,l as P,t as S,c as A,a as b,m as w,b as I,d as f,f as n,o as N,g as D,h as Q,j as C,k as O,n as R}from"./index-5bf62044.js";import{C as h,a as x}from"./config-9a519810.js";import"./lifecycle-4aaf5bd1.js";function X(s){let e,t,d,p,l,o,i,c,r,y,B;return{c(){e=m("div"),t=m("img"),p=P(),l=m("div"),o=m("div"),i=m("h2"),c=S(s[4]),r=P(),y=m("span"),B=S(s[5]),this.h()},l(a){e=A(a,"DIV",{class:!0,style:!0});var u=b(e);t=A(u,"IMG",{class:!0,src:!0,alt:!0}),p=w(u),l=A(u,"DIV",{class:!0,style:!0});var T=b(l);o=A(T,"DIV",{class:!0});var g=b(o);i=A(g,"H2",{class:!0});var k=b(i);c=I(k,s[4]),k.forEach(f),r=w(g),y=A(g,"SPAN",{class:!0});var L=b(y);B=I(L,s[5]),L.forEach(f),g.forEach(f),T.forEach(f),u.forEach(f),this.h()},h(){n(t,"class","CardImage svelte-1fsl7jx"),N(t.src,d=s[2])||n(t,"src",d),n(t,"alt",s[3]),n(i,"class","CardTitle svelte-1fsl7jx"),n(y,"class","CardText svelte-1fsl7jx"),n(o,"class","CardTextWrapper svelte-1fsl7jx"),n(l,"class","CardInfo svelte-1fsl7jx"),D(l,"--background-color","var("+s[1]+")"),n(e,"class","CardWrapper svelte-1fsl7jx"),D(e,"--border-color","var("+s[0]+")")},m(a,u){Q(a,e,u),C(e,t),C(e,p),C(e,l),C(l,o),C(o,i),C(i,c),C(o,r),C(o,y),C(y,B)},p(a,[u]){u&4&&!N(t.src,d=a[2])&&n(t,"src",d),u&8&&n(t,"alt",a[3]),u&16&&O(c,a[4]),u&32&&O(B,a[5]),u&2&&D(l,"--background-color","var("+a[1]+")"),u&1&&D(e,"--border-color","var("+a[0]+")")},i:R,o:R,d(a){a&&f(e)}}}function Z(s,e,t){let{borderColor:d}=e,{bgColor:p}=e,{src:l}=e,{altText:o}=e,{title:i}=e,{cardText:c}=e;return s.$$set=r=>{"borderColor"in r&&t(0,d=r.borderColor),"bgColor"in r&&t(1,p=r.bgColor),"src"in r&&t(2,l=r.src),"altText"in r&&t(3,o=r.altText),"title"in r&&t(4,i=r.title),"cardText"in r&&t(5,c=r.cardText)},[d,p,l,o,i,c]}class M extends q{constructor(e){super(),z(this,e,Z,X,J,{borderColor:0,bgColor:1,src:2,altText:3,title:4,cardText:5})}}M.__docgen={version:3,name:"Card.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"枠線の色",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"--peach-pink"},{name:"type",description:"string"}],visibility:"public",description:"説明文の背景色",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"画像ソース",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"alt属性に指定する値",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"記事の見出し",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"カードの詳細テキスト(140字程度推奨)",name:"cardText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const re={title:"Common/Card",component:M,tags:["autodocs"],parameters:{layout:"fullscreen"}},E={args:{borderColor:h.STRAWBERRY_PINK,bgColor:x.PEACH_PINK,src:"thumbnail.png",altText:"Strawberry Pink",title:"プライマリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"}},_={args:{borderColor:h.PINEAPPLE_YELLOW,bgColor:x.LEMON_YELLOW,src:"thumbnail.png",altText:"Pineapple Yellow",title:"セカンダリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"}},v={args:{borderColor:h.SODA_BLUE,bgColor:x.SUGAR_BLUE,src:"thumbnail.png",altText:"Soda Blue",title:"その他のプライマリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"}};var W,Y,j;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    bgColor: CCLPastelColor.PEACH_PINK,
    src: "thumbnail.png",
    altText: "Strawberry Pink",
    title: "プライマリカラーのカードです",
    cardText: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
}`,...(j=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var F,V,U;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    bgColor: CCLPastelColor.LEMON_YELLOW,
    src: "thumbnail.png",
    altText: "Pineapple Yellow",
    title: "セカンダリカラーのカードです",
    cardText: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
}`,...(U=(V=_.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var K,G,H;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    bgColor: CCLPastelColor.SUGAR_BLUE,
    src: "thumbnail.png",
    altText: "Soda Blue",
    title: "その他のプライマリカラーのカードです",
    cardText: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ue=["Default","SecondColor","ThirdColor"];export{E as Default,_ as SecondColor,v as ThirdColor,ue as __namedExportsOrder,re as default};
