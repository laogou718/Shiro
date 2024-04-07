function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-Ko7e8OUB.js","./index-nF_wCK1r.js","./index-CCbQNvj8.css","./viewport-BDVF2Gj8.js","./request-Dvxzfn2d.js","./toast-Chh6E_fL.js","./helper-CaAdfMs7.js","./StyledButton-CK4R3Ym7.js","./motion-minimal-C5G6keSu.js","./env-DbhK1WeT.js","./index-CVtgijuZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,j as e}from"./index-nF_wCK1r.js";import{I as r}from"./Gallery-Dx96vPpy.js";import"./image-DQb-nafv.js";import"./helper-CaAdfMs7.js";import"./lodash-B3VVwmZe.js";import"./request-Dvxzfn2d.js";import"./toast-Chh6E_fL.js";import"./StyledButton-CK4R3Ym7.js";import"./motion-minimal-C5G6keSu.js";import"./env-DbhK1WeT.js";import"./viewport-BDVF2Gj8.js";import"./use-is-unmounted-COb3ZqWs.js";const o={AvatarImg:t=>e.jsx(r,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(r,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function v({id:t}){const{Tweet:m}=await a(()=>import("./index.client-Ko7e8OUB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(m,{id:t,components:o})})}export{v as default};
