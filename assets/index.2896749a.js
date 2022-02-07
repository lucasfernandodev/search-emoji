import{s as y,j as E,r as u,W as N,R as T,a as z}from"./vendor.ee955fcf.js";const V=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const F of n.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&a(F)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};V();const x=y.footer`
  background: #E9C46A;
  display: flex;
  height: 180px;
  width: 100vw;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  a{
    text-decoration: none;
    color: #383838;
    font-size: 18px;

    &:hover{
      color: #141414;
      text-decoration: underline;
    }
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`,o=E.exports.jsx,c=E.exports.jsxs,L=E.exports.Fragment,q=()=>c(x,{children:[c("div",{className:"attribution",children:["By ",o("a",{href:"https://github.com/lucasfernandodev",children:"Lucas Fernando"}),"."]}),c("ul",{className:"social",children:[o("li",{className:"social-item",children:o("a",{href:"https://github.com/lucasfernandodev",className:"social-link","aria-label":"Github",children:c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[o("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"})]})})}),o("li",{className:"social-item",children:o("a",{href:"https://www.instagram.com/lucasfernandodev/",className:"social-link","aria-label":"Instagram",children:c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[o("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o("rect",{x:"4",y:"4",width:"16",height:"16",rx:"4"}),o("circle",{cx:"12",cy:"12",r:"3"}),o("line",{x1:"16.5",y1:"7.5",x2:"16.5",y2:"7.501"})]})})})]})]}),K=y.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 45px 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button{
    background: transparent;
    color: #242424;
    border: unset;
    outline: unset;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
  }

  button:hover{
    text-decoration: underline;
  }

  @media (max-width: 550px){
    button{
      font-size: 18px;
    }
  }
`;var M="/search-emoji/imagens/logo.svg";const I=({toggleLanguage:e,lang:r})=>c(K,{children:[o("div",{className:"brand",children:o("img",{src:M,alt:"Search emoji logo"})}),o("div",{className:"language",children:o("button",{onClick:e,children:r})})]}),J=y.main`
  min-height: 100vh;

  & section:last-child {
    margin-bottom: 90px;
  }
`,G=y.section`
  background: #e9c46a;
  height: calc(100vh - 90px);

  display: flex;
  align-items: center;
  justify-content: center;
`,R=y.div`
  width: calc(100vw - 20%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 90px;
  padding-top: 90px;

  h1 {
    font-size: 44px;
    text-align: center;
  }

  @media (max-width: 740px) {
    width: calc(100vw - 24px);
    h1 {
      font-size: 38px;
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 32px;
      text-align: center;
    }
  }

  .search-emoji {
    width: 100%;
    height: auto;
  }

  .search-emoji .form-group {
    position: relative;
    width: 100%;
    max-height: 54px;
  }

  .search-emoji .form-group input {
    width: 100%;
    height: 54px;
    border: 2px solid #242424;
    background: transparent;
    color: #383838;
    padding-left: 54px;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Lora', serif;
    border-radius: 8px;
  }

  .search-emoji .form-group input:active,
  .search-emoji .form-group input:focus {
    outline: none;
  }

  .search-emoji .form-group input::placeholder {
    color: #383838;
    font-weight: 500;
  }

  .search-emoji .form-group img {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }

  .category {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    height: 100%;
    display: flex;
    align-items: center;
  }



  .category label {
    font-size: 18px;
    font-family: 'Lora', serif;
  }



  .category span {
    margin-left: 8px;
    font-weight: 500;
  }

  @media (max-width: 550px) {
    .search-emoji .form-group input {
      font-size: 16px;
      padding-left: 44px;
    }

    .category {
      right: 4px;
    }
    .category label{
      font-size: 16px;
    }
    .category span {
      margin-left: 2px;
      font-size: 14px;
    }
  }

  .category select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: none;
    border: none;
    outline: none;
    font-size: 18px;
    font-family: 'Lora', serif;
    font-weight: 500;
    width: 100%;
    cursor: pointer;
    color: transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    height: 100%;
  }

  .category select option {
    font-size: 16px;
    font-family: 'Lora', serif;
    width: fit-content;
    color: #242424;
    min-height: 46px;
  }
  padding: 0 10%;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 45px;

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    h2 {
      font-size: 32px;
    }

    @media (max-width: 740px) {
      h2 {
        font-size: 26px;
        text-align: center;
      }
    }

    button {
      background: none;
      border: none;
      outline: none;
      color: #aaa;
      font-weight: bold;
      cursor: pointer;
      transition: 350ms linear;

      &:hover {
        color: #383838;
      }
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;

    .emoji {
      font-size: 64px;
      width: 145px;
      height: 145px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      transition: 350ms linear;
      cursor: pointer;

      &:hover {
        position: relative;
        transform: translateY(-10px);
      }
    }
  }

  @media (max-width: 740px) {
    padding: 0 24px;
    padding-top: 45px;
    .container {
      gap: 16px;
    }

    .container .emoji {
      width: 120px;
      height: 120px;
      font-size: 48px;
    }
  }
`;function $(e){return navigator.clipboard.writeText(e)}const Y=y.div`
  position: fixed;
  bottom: 24px;
  right: 18px;
  width: 300px;
  height: 56px;
  border-radius: 16px;
  background: #242424;
  color: #ddd;
  
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;
  animation: show 350ms linear forwards;
  z-index: 1000;

  @keyframes show {
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(0%);
    }
  }

`,Q=({state:e,emoji:r="",show:t,lang:a})=>{const s={sucess:{PT:"Copiado com sucesso!",EN:"Copied successfully!"},error:{PT:"Erro ao copiar emoji",EN:"Error copying emoji"}};return t===!0?o(Y,{children:e===!0?c("span",{children:[r,s.sucess[a]]}):o("span",{children:s.error[a]})}):o("div",{})},B={EN:{presentation:"Find and copy your favorite emojis simply and quickly!",inputPlaceholder:"Search emojis",categoryPlaceholder:"Category",buttonMoreEmoji:"Expand"},PT:{presentation:"Encontre e copie seus emojis favoritos de forma simples e r\xE1pida!",inputPlaceholder:"Pesquisar emojis",categoryPlaceholder:"Categoria",buttonMoreEmoji:"Expandir"}},v=({emojis:e,title:r,index:t,expandShow:a,all:s,lang:n})=>{const[F,d]=u.exports.useState(!1),[b,f]=u.exports.useState(""),[h,i]=u.exports.useState(!1);u.exports.useEffect(()=>{s===!0&&i(!0)},[]);function P(g){$(g),d(!0),f(g),setTimeout(()=>{d(!1)},3e3)}return c(Z,{children:[c("div",{className:"header",children:[o("h2",{className:"title",children:r}),a!==!1&&o("button",{onClick:()=>i(h!==!0),children:B[n].buttonMoreEmoji})]}),o("div",{className:"container",children:e.map((g,l)=>{if(h!==!0){if(l<24)return o("div",{"aria-label":g.name,className:"emoji",onClick:()=>P(g.char),children:g.char},l)}else return o("div",{"aria-label":g.name,className:"emoji",onClick:()=>P(g.char),children:g.char},l)})}),o(Q,{lang:n,state:!0,show:F,emoji:b})]})},w=(e,r)=>{function t(a,s){return a.group===s&&a}return e.filter(a=>t(a,r))};function C(e,r){return e.filter(a=>{if(a.category.includes(r)||a.group.includes(r)||a.name.includes(r)||a.subgroup.includes(r))return a})}const X=({lang:e})=>{const[r,t]=u.exports.useState([]),[a,s]=u.exports.useState(0),[n,F]=u.exports.useState(!1),[d,b]=u.exports.useState(""),[f,h]=u.exports.useState([]),[i,P]=u.exports.useState("Todos"),g={EN:["Smileys & Emotion","Animals & Nature","People & Body","Food & Drink","Travel & Places","Symbols","Flags"],PT:["Sorrisos e Emo\xE7\xF5es","Animais e Natureza","Pessoas & corpo","Comida e bebida","Viagens e lugares","S\xEDmbolos","Bandeira"]},l=u.exports.useRef(null),S=u.exports.useRef(null),A=u.exports.useRef(null);u.exports.useEffect(()=>{console.log("log useEffect, pageCurrent: ",a);const p=new IntersectionObserver(m=>{m.some(D=>D.isIntersecting)&&a<=g[e].length&&s(a+1)});if(l.current!==null)return p.observe(l.current),()=>p.disconnect()},[a]),u.exports.useEffect(()=>{j(d,i)},[d,i]),u.exports.useEffect(()=>{if(P(e==="PT"?"Todos":"All"),e==="PT")return t(W);if(e==="EN")return t(H)},[e]);function j(p,m){let D=e==="PT"?"todos":"all";if(p.length>2)if(m.toLowerCase()!==D.toLowerCase()){F(!0);const k=w(r,m);b(p);const O=C(k,p);h(O)}else{F(!0),b(p);const k=C(r,p);h(k)}else F(!1)}return c(J,{children:[o(G,{children:c(R,{children:[o("h1",{children:B[e].presentation}),o("form",{className:"search-emoji",onSubmit:p=>{p.preventDefault()},children:c("div",{className:"form-group",children:[o("img",{src:U,alt:"search"}),o("input",{type:"text",placeholder:B[e].inputPlaceholder,onChange:p=>b(p.target.value)}),c("div",{className:"category",children:[c("div",{className:"placholder",children:[c("label",{htmlFor:"category",children:[B[e].categoryPlaceholder,":"]}),o("span",{ref:A,children:i})]}),c("select",{name:"category",id:"category",ref:S,onChange:p=>P(p.target.value),children:[o("option",{value:"all",defaultValue:"all",children:e==="PT"?"Todos":"All"}),g[e].map((p,m)=>o("option",{value:p,children:p},m))]})]})]})})]})}),n===!1?g[e].map((p,m)=>{if(m<=a){const D=w(r,p);return o(v,{index:m===0&&!0,emojis:D,title:p,lang:e},m)}}):o(v,{index:!0,emojis:f,title:e==="PT"?`O resultado da busca por "${d}" \xE9`:`Search results for "${d}"`,expandShow:!1,all:!0,lang:e}),o("section",{ref:l})]})};function _(){const[e,r]=u.exports.useState("PT");function t(){if(e==="PT")return r("EN");if(e==="EN")return r("PT")}return c(L,{children:[o(I,{toggleLanguage:t,lang:e}),o(X,{lang:e}),o(q,{})]})}const oo=N`
  *{
    margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  }

  body{
    background: #eee;
    color: #242424;
    width: 100vw;
    height: auto;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Lora', serif;
  }
`;T.render(c(z.StrictMode,{children:[o(oo,{}),o(_,{})]}),document.getElementById("root"));