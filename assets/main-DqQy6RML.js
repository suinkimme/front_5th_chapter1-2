import{c as d,B as a,r as i,a as t,g as r,H as b,U as w,b as s,P as h,F as p,L as f}from"./render-BEftAXXF.js";const P=e=>{const{subscribe:g,notify:o}=d(),n=()=>window.location.pathname.replace(a,""),c=()=>e[n()],l=u=>{window.history.pushState(null,null,`${a}${u}`),o()};return window.addEventListener("popstate",()=>o()),{get path(){return n()},push:l,subscribe:g,getTarget:c}};i.set(P({"/":b,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new p;return s(f,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new w;return s(h,null)}}));function m(){i.get().subscribe(t),r.subscribe(t),t()}m();
