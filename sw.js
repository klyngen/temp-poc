if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>s(e,t),l={module:{uri:t},exports:o,require:d};i[t]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Kyke158x.js",revision:null},{url:"assets/index-OUO3S0Dw.css",revision:null},{url:"index.html",revision:"19a215e0d78729cccedc73d330dfb1f2"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.png",revision:"89e6eb83d8f156586d458384d2691fb1"},{url:"manifest.webmanifest",revision:"bae45bb4010fb427209901fd67245e20"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
