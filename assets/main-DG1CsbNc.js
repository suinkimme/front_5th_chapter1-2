import{c as l,r as s,a as t,g as r,H as d,U as h,b as a,P as b,F as w,L as p}from"./render-QWKt6pVs.js";const f="/front_5th_chapter1-2",P=e=>{const{subscribe:i,notify:o}=l(),n=()=>window.location.pathname,c=()=>e[n()],g=u=>{window.history.pushState(null,null,`${f}${u}`),o()};return window.addEventListener("popstate",()=>o()),{get path(){return n()},push:g,subscribe:i,getTarget:c}};s.set(P({"/":d,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new w;return a(p,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new h;return a(b,null)}}));function m(){s.get().subscribe(t),r.subscribe(t),t()}m();
