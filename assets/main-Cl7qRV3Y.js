import{c as d,r as i,a as t,g as r,H as h,U as b,b as a,P as p,F as w,L as f}from"./render-QWKt6pVs.js";const s="/front_5th_chapter1-2",P=e=>{const{subscribe:c,notify:o}=d(),n=()=>window.location.pathname.replace(s,""),g=()=>e[n()],l=u=>{window.history.pushState(null,null,`${s}${u}`),o()};return window.addEventListener("popstate",()=>o()),{get path(){return n()},push:l,subscribe:c,getTarget:g}};i.set(P({"/":h,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new w;return a(f,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new b;return a(p,null)}}));function m(){i.get().subscribe(t),r.subscribe(t),t()}m();
