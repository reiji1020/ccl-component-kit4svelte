import{_ as a}from"./iframe-b7834a3e.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-fb6bf9b1.js").then(r=>r.D),["./DocsRenderer-K4EAMTCU-fb6bf9b1.js","./iframe-b7834a3e.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-d8983a70.js","./index-56666618.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};