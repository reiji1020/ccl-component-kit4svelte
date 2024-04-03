import{S as $,i as ee,s as ue,e as B,l as x,t as F,c as m,a as _,m as R,b as S,d as D,f as c,o as I,g as T,h as te,j as d,k as N,n as O}from"./index-5bf62044.js";import{a as p,C as t}from"./config-9a519810.js";import"./lifecycle-4aaf5bd1.js";function re(l){let e,u,A,s,n,i,C,E,r,y,P;return{c(){e=B("div"),u=B("img"),s=x(),n=B("div"),i=B("div"),C=B("h2"),E=F(l[3]),r=x(),y=B("span"),P=F(l[4]),this.h()},l(o){e=m(o,"DIV",{class:!0,style:!0});var a=_(e);u=m(a,"IMG",{class:!0,src:!0,alt:!0}),s=R(a),n=m(a,"DIV",{class:!0,style:!0});var g=_(n);i=m(g,"DIV",{class:!0});var k=_(i);C=m(k,"H2",{class:!0});var h=_(C);E=S(h,l[3]),h.forEach(D),r=R(k),y=m(k,"SPAN",{class:!0});var L=_(y);P=S(L,l[4]),L.forEach(D),k.forEach(D),g.forEach(D),a.forEach(D),this.h()},h(){c(u,"class","CardImage svelte-lkp34v"),I(u.src,A=l[1])||c(u,"src",A),c(u,"alt",l[2]),c(C,"class","CardTitle svelte-lkp34v"),c(y,"class","CardText svelte-lkp34v"),c(i,"class","CardTextWrapper svelte-lkp34v"),c(n,"class","CardInfo svelte-lkp34v"),T(n,"--background-color","var("+l[5]+")"),c(e,"class","CardWrapper svelte-lkp34v"),T(e,"--border-color","var("+l[0]+")")},m(o,a){te(o,e,a),d(e,u),d(e,s),d(e,n),d(n,i),d(i,C),d(C,E),d(i,r),d(i,y),d(y,P)},p(o,[a]){a&2&&!I(u.src,A=o[1])&&c(u,"src",A),a&4&&c(u,"alt",o[2]),a&8&&N(E,o[3]),a&16&&N(P,o[4]),a&32&&T(n,"--background-color","var("+o[5]+")"),a&1&&T(e,"--border-color","var("+o[0]+")")},i:O,o:O,d(o){o&&D(e)}}}function ae(l,e,u){let{borderColor:A}=e,s;switch(A){case t.STRAWBERRY_PINK:s=p.PEACH_PINK;break;case t.PINEAPPLE_YELLOW:s=p.LEMON_YELLOW;break;case t.SODA_BLUE:s=p.SUGAR_BLUE;break;case t.MELON_GREEN:s=p.MATCHA_GREEN;break;case t.GRAPE_PURPLE:s=p.AKEBI_PURPLE;break;case t.WRAP_GREY:s=p.CLOUD_GREY;break;default:s=p.PEACH_PINK;break}let{src:n}=e,{altText:i}=e,{title:C}=e,{cardText:E}=e;return l.$$set=r=>{"borderColor"in r&&u(0,A=r.borderColor),"src"in r&&u(1,n=r.src),"altText"in r&&u(2,i=r.altText),"title"in r&&u(3,C=r.title),"cardText"in r&&u(4,E=r.cardText)},[A,n,i,C,E,s]}class Z extends ${constructor(e){super(),ee(this,e,ae,re,ue,{borderColor:0,src:1,altText:2,title:3,cardText:4})}}Z.__docgen={version:3,name:"Card.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"枠線の色",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"画像ソース",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"alt属性に指定する値",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"記事の見出し",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"カードの詳細テキスト(140字程度推奨)",name:"cardText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ne={title:"Common/Card",component:Z,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{borderColor:{control:{type:"select"},options:[t.STRAWBERRY_PINK,t.PINEAPPLE_YELLOW,t.SODA_BLUE,t.MELON_GREEN,t.GRAPE_PURPLE,t.WRAP_GREY]},altText:{control:{type:"text"}},title:{control:{type:"text"}},cardText:{control:{type:"text"}},src:{control:{type:"text"}}}},f={args:{borderColor:t.STRAWBERRY_PINK,src:"thumbnail.png",altText:"Strawberry Pink",title:"プライマリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"}},b={args:{borderColor:t.PINEAPPLE_YELLOW,src:"thumbnail.png",altText:"Pineapple Yellow",title:"セカンダリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"}},v={args:{borderColor:t.SODA_BLUE,src:"thumbnail.png",altText:"Soda Blue",title:"その他のプライマリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"}};var Y,W,w,U,G;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    src: 'thumbnail.png',
    altText: 'Strawberry Pink',
    title: 'プライマリカラーのカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  }
}`,...(w=(W=f.parameters)==null?void 0:W.docs)==null?void 0:w.source},description:{story:`イベント出展などのお知らせはプライマリカラーを使用します。

Primary colour for notices of event exhibits, etc.`,...(G=(U=f.parameters)==null?void 0:U.docs)==null?void 0:G.description}}};var K,V,M,H,q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    src: 'thumbnail.png',
    altText: 'Pineapple Yellow',
    title: 'セカンダリカラーのカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  }
}`,...(M=(V=b.parameters)==null?void 0:V.docs)==null?void 0:M.source},description:{story:`書籍の出版などのオフライン活動に関してはセカンダリカラーを使用します。

For offline activities such as book publishing, a secondary colour is used.`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.description}}};var j,z,J,Q,X;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    src: 'thumbnail.png',
    altText: 'Soda Blue',
    title: 'その他のプライマリカラーのカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  }
}`,...(J=(z=v.parameters)==null?void 0:z.docs)==null?void 0:J.source},description:{story:`その他の汎用的なお知らせとしてサードカラーを使用します。

Use third colour for other generic notices.`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const ie=["Default","SecondColor","ThirdColor"];export{f as Default,b as SecondColor,v as ThirdColor,ie as __namedExportsOrder,ne as default};
