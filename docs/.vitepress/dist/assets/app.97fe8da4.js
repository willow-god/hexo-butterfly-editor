import{a1 as p,s as o,a2 as u,a3 as c,a4 as l,a5 as d,a6 as f,a7 as m,a8 as h,a9 as A,aa as y,ab as g,V as P,d as v,u as w,j as C,y as R,ac as _,ad as b,ae as D}from"./chunks/framework.18efe07a.js";import{t as r}from"./chunks/theme.43ec00af.js";const E={extends:r,Layout:()=>p(r.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(E),L=v({name:"VitePressApp",setup(){const{site:e}=w();return C(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),_(),b(),D(),s.setup&&s.setup(),()=>p(s.Layout)}});async function T(){const e=x(),a=j();a.provide(c,e);const t=l(e.route);return a.provide(d,t),a.component("Content",f),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function j(){return A(L)}function x(){let e=o,a;return y(t=>{let n=g(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),P(()=>import(n),[])):null},s.NotFound)}o&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{T as createApp};
