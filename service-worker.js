if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const l=e=>s(e,a),d={module:{uri:a},exports:f,require:l};i[a]=Promise.all(c.map((e=>d[e]||l(e)))).then((e=>(r(...e),f)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/01/笔记/index.html",revision:"3c10b3d9680872c73b1acf44293f0b8f"},{url:"2023/07/09/hello-world/index.html",revision:"1cc2c320084465cf8b4f49c7c74581b8"},{url:"archives/2023/07/index.html",revision:"e810b190f2ee7056cddc42b7a133d35d"},{url:"archives/2023/index.html",revision:"16fcdf14f25eafc1ffbfdcd7207f16aa"},{url:"archives/index.html",revision:"7466f0bc151e305b6425abf354fbef23"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"css/index.css",revision:"e9fbb503e763274b697e6766588a1842"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"35032b2a7700c0945cb87b8e789422bf"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
