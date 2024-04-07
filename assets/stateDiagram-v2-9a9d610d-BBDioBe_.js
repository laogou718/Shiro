import{p as J,d as v,s as Q,D as M,a as X,S as Z,b as F,c as I}from"./styles-d20c7d72-DdDmeXZH.js";import{G as tt}from"./graph-Df8SElwm.js";import{l as d,c as m,h as $,u as ot,i as et,j as R}from"./mermaid.core-DwW6SswV.js";import{r as st}from"./index-fc10efb0-Y-lkxhIS.js";import"./request-Dvxzfn2d.js";import"./layout-BwPsOKWm.js";import"./index-nF_wCK1r.js";import"./clone-Q4lpq8tI.js";import"./edges-d32062c0-C2nU2CcR.js";import"./createText-6b48ae7d-D3xc8V4p.js";import"./index.demo-CFvig53B.js";import"./use-is-dark-CJO-PkqK.js";import"./provider-BUtgg37I.js";import"./toast-Chh6E_fL.js";import"./helper-CaAdfMs7.js";import"./StyledButton-CK4R3Ym7.js";import"./motion-minimal-C5G6keSu.js";import"./viewport-BDVF2Gj8.js";import"./env-DbhK1WeT.js";import"./use-is-unmounted-COb3ZqWs.js";import"./spring-BiPrtYZ-.js";import"./use-event-callback-DnsSYCaj.js";import"./dom-XXNktKeO.js";import"./use-animation-qbd_nTG8.js";import"./visual-element-Dnypw6uW.js";import"./index-DutLeCek.js";import"./Gallery-Dx96vPpy.js";import"./image-DQb-nafv.js";import"./lodash-B3VVwmZe.js";import"./use-is-client-DG1h4Qsx.js";import"./FormInput-D-ja7cay.js";import"./LinkCard-B3HAW6DI.js";import"./use-motion-template-CjueUuV6.js";import"./AutoResizeHeight-CEiC6SjW.js";import"./alert-pXv1LbLZ.js";import"./FloatPopover-Dmg6o-Xy.js";import"./SocialSourceLink-CUr4Eyci.js";import"./CodeHighlighter-Cdp1QkIs.js";import"./Collapse-CJYshjnS.js";import"./useQuery-cAKdxXmX.js";import"./CodeEditor-CZpWvLP6.js";import"./index-LAI3pait.js";import"./Mermaid-BDXvwpqn.js";import"./line-B6PGnzha.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";const h="rect",x="rectWithTitle",nt="start",it="end",rt="divider",ct="roundedWithTitle",lt="note",at="noteGroup",_="statediagram",pt="state",dt=`${_}-${pt}`,H="transition",Et="note",St="note-edge",Tt=`${H} ${St}`,_t=`${_}-${Et}`,ut="cluster",Dt=`${_}-${ut}`,bt="cluster-alt",ft=`${_}-${bt}`,U="parent",V="note",At="state",G="----",ht=`${G}${V}`,B=`${G}${U}`,Y="fill:none",W="fill: #333",z="c",j="text",q="normal";let y={},p=0;const yt=function(t){const n=Object.keys(t);for(const o of n)t[o]},mt=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function gt(t){return t==null?"":t.classes?t.classes.join(" "):""}function C(t="",n=0,o="",i=G){const r=o!==null&&o.length>0?`${i}${o}`:"";return`${At}-${t}${r}-${n}`}const A=(t,n,o,i,r,c)=>{const e=o.id,u=gt(i[e]);if(e!=="root"){let S=h;o.start===!0&&(S=nt),o.start===!1&&(S=it),o.type!==M&&(S=o.type),y[e]||(y[e]={id:e,shape:S,description:R.sanitizeText(e,m()),classes:`${u} ${dt}`});const s=y[e];o.description&&(Array.isArray(s.description)?(s.shape=x,s.description.push(o.description)):s.description.length>0?(s.shape=x,s.description===e?s.description=[o.description]:s.description=[s.description,o.description]):(s.shape=h,s.description=o.description),s.description=R.sanitizeTextOrArray(s.description,m())),s.description.length===1&&s.shape===x&&(s.shape=h),!s.type&&o.doc&&(d.info("Setting cluster for ",e,w(o)),s.type="group",s.dir=w(o),s.shape=o.type===X?rt:ct,s.classes=s.classes+" "+Dt+" "+(c?ft:""));const T={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:e,dir:s.dir,domId:C(e,p),type:s.type,padding:15};if(T.centerLabel=!0,o.note){const l={labelStyle:"",shape:lt,labelText:o.note.text,classes:_t,style:"",id:e+ht+"-"+p,domId:C(e,p,V),type:s.type,padding:15},a={labelStyle:"",shape:at,labelText:o.note.text,classes:s.classes,style:"",id:e+B,domId:C(e,p,U),type:"group",padding:0};p++;const D=e+B;t.setNode(D,a),t.setNode(l.id,l),t.setNode(e,T),t.setParent(e,D),t.setParent(l.id,D);let E=e,b=l.id;o.note.position==="left of"&&(E=l.id,b=e),t.setEdge(E,b,{arrowhead:"none",arrowType:"",style:Y,labelStyle:"",classes:Tt,arrowheadStyle:W,labelpos:z,labelType:j,thickness:q})}else t.setNode(e,T)}n&&n.id!=="root"&&(d.trace("Setting node ",e," to be child of its parent ",n.id),t.setParent(e,n.id)),o.doc&&(d.trace("Adding nodes children "),$t(t,o,o.doc,i,r,!c))},$t=(t,n,o,i,r,c)=>{d.trace("items",o),o.forEach(e=>{switch(e.stmt){case F:A(t,n,e,i,r,c);break;case M:A(t,n,e,i,r,c);break;case Z:{A(t,n,e.state1,i,r,c),A(t,n,e.state2,i,r,c);const u={id:"edge"+p,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Y,labelStyle:"",label:R.sanitizeText(e.description,m()),arrowheadStyle:W,labelpos:z,labelType:j,thickness:q,classes:H};t.setEdge(e.state1.id,e.state2.id,u,p),p++}break}})},w=(t,n=I)=>{let o=n;if(t.doc)for(let i=0;i<t.doc.length;i++){const r=t.doc[i];r.stmt==="dir"&&(o=r.value)}return o},xt=async function(t,n,o,i){d.info("Drawing state diagram (v2)",n),y={},i.db.getDirection();const{securityLevel:r,state:c}=m(),e=c.nodeSpacing||50,u=c.rankSpacing||50;d.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),d.info(i.db.getRootDocV2());const S=i.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:w(i.db.getRootDocV2()),nodesep:e,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,i.db.getRootDocV2(),S,i.db,!0);let T;r==="sandbox"&&(T=$("#i"+n));const l=r==="sandbox"?$(T.nodes()[0].contentDocument.body):$("body"),a=l.select(`[id="${n}"]`),D=l.select("#"+n+" g");await st(D,s,["barb"],_,n);const E=8;ot.insertTitle(a,"statediagramTitleText",c.titleTopMargin,i.db.getDiagramTitle());const b=a.node().getBBox(),N=b.width+E*2,L=b.height+E*2;a.attr("class",_);const P=a.node().getBBox();et(a,L,N,c.useMaxWidth);const O=`${P.x-E} ${P.y-E} ${N} ${L}`;d.debug(`viewBox ${O}`),a.attr("viewBox",O);const K=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const g of K){const k=g.getBBox(),f=document.createElementNS("http://www.w3.org/2000/svg",h);f.setAttribute("rx",0),f.setAttribute("ry",0),f.setAttribute("width",k.width),f.setAttribute("height",k.height),g.insertBefore(f,g.firstChild)}},Ct={setConf:yt,getClasses:mt,draw:xt},ho={parser:J,db:v,renderer:Ct,styles:Q,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,v.clear()}};export{ho as diagram};