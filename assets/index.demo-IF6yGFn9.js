import{j as t}from"./index-nF_wCK1r.js";import{W as i,M as m,G as a}from"./Gallery-Dx96vPpy.js";import"./image-DQb-nafv.js";import"./helper-CaAdfMs7.js";import"./lodash-B3VVwmZe.js";import"./request-Dvxzfn2d.js";import"./toast-Chh6E_fL.js";import"./StyledButton-CK4R3Ym7.js";import"./motion-minimal-C5G6keSu.js";import"./env-DbhK1WeT.js";import"./viewport-BDVF2Gj8.js";import"./use-is-unmounted-COb3ZqWs.js";const n=()=>Math.floor(Math.random()*255).toString(16).padStart(2,"0"),o=Array.from({length:10}).map((r,e)=>({src:`https://loremflickr.com/640/480/city?${e}`,height:480,width:640,type:"image",accent:`#${n()}`})),p=()=>t.jsx("div",{className:"inline-block overflow-hidden border border-accent",style:{width:"600px"},children:t.jsx(i,{children:t.jsx(m,{images:o,children:t.jsx(a,{images:o.map(r=>({...r,url:r.src,name:r.src,footnote:r.src}))})})})});p.meta={title:"Gallery",description:"Gallery component"};export{p as Demo1};