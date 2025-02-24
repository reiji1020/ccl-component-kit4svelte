import{T as E}from"./Table-a0b7c5b9.js";import{C as a}from"./config-e4d7b61a.js";import{e as n}from"./index-ea2a2f54.js";import"./index-edc2d624.js";import"./lifecycle-4aaf5bd1.js";const B={title:"CommonComponents/Table",component:E,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{tableColor:{control:{type:"select"},options:[a.STRAWBERRY_PINK,a.PINEAPPLE_YELLOW,a.SODA_BLUE,a.MELON_GREEN,a.GRAPE_PURPLE,a.WRAP_GREY]}}},o={args:{tableColor:a.STRAWBERRY_PINK,dataHeader:["更新日","お知らせ内容","カテゴリ"],tableData:[["2024/03/19","イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"],["2024/03/19","イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"],["2024/03/19","イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"],["2024/03/19","イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"],["2024/03/19","イベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"],["2024/03/19","イベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"]]},play:async({args:e,step:t})=>{await t("メインカラーとして指定した色が正しいこと",async()=>{await n(e.tableColor).toBe("--strawberry-pink")})}},r={args:{tableColor:a.PINEAPPLE_YELLOW,dataHeader:["更新日","お知らせ内容","カテゴリ"],tableData:[["2024/03/19","イベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"],["2024/03/19","イベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"]]},play:async({args:e,step:t})=>{await t("メインカラーとして指定した色が正しいこと",async()=>{await n(e.tableColor).toBe("--pineapple-yellow")})}},s={args:{tableColor:a.SODA_BLUE,dataHeader:["更新日","お知らせ内容","カテゴリ"],tableData:[["2024/03/19","イベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"],["2024/03/19","イベント参加のお知らせ","イベント"],["2024/03/19","商業誌出版のお知らせ","出版物"]]},play:async({args:e,step:t})=>{await t("メインカラーとして指定した色が正しいこと",async()=>{await n(e.tableColor).toBe("--soda-blue")})}};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tableColor: CCLVividColor.STRAWBERRY_PINK,
    dataHeader: ['更新日', 'お知らせ内容', 'カテゴリ'],
    tableData: [['2024/03/19', 'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物'], ['2024/03/19', 'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物'], ['2024/03/19', 'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物'], ['2024/03/19', 'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物'], ['2024/03/19', 'イベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物'], ['2024/03/19', 'イベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物']]
  },
  play: async ({
    args,
    step
  }) => {
    await step('メインカラーとして指定した色が正しいこと', async () => {
      await expect(args.tableColor).toBe('--strawberry-pink');
    });
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,d,C;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tableColor: CCLVividColor.PINEAPPLE_YELLOW,
    dataHeader: ['更新日', 'お知らせ内容', 'カテゴリ'],
    tableData: [['2024/03/19', 'イベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物'], ['2024/03/19', 'イベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物']]
  },
  play: async ({
    args,
    step
  }) => {
    await step('メインカラーとして指定した色が正しいこと', async () => {
      await expect(args.tableColor).toBe('--pineapple-yellow');
    });
  }
}`,...(C=(d=r.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var m,b,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tableColor: CCLVividColor.SODA_BLUE,
    dataHeader: ['更新日', 'お知らせ内容', 'カテゴリ'],
    tableData: [['2024/03/19', 'イベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物'], ['2024/03/19', 'イベント参加のお知らせ', 'イベント'], ['2024/03/19', '商業誌出版のお知らせ', '出版物']]
  },
  play: async ({
    args,
    step
  }) => {
    await step('メインカラーとして指定した色が正しいこと', async () => {
      await expect(args.tableColor).toBe('--soda-blue');
    });
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const R=["withScroll","Yellow","Blue"];export{s as Blue,r as Yellow,R as __namedExportsOrder,B as default,o as withScroll};
//# sourceMappingURL=Table.stories-936cf785.js.map
