(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7Qib":function(e,a,t){"use strict";t.d(a,"a",(function(){return n.a})),t.d(a,"b",(function(){return r.b})),t.d(a,"c",(function(){return i}));var n=t("ElpU"),r=t("BYIe"),i=(t("E9XD"),{getImageMap:function(e,a,t,n){return void 0===t&&(t=!1),void 0===n&&(n=3),e.reduce((function(e,r){var i=r.node.relativePath.match(a)[0];if(t)if(e.hasOwnProperty(i))e[i].length<=n&&e[i].push(r.node.childImageSharp.fluid);else{var l=[];l.push(r.node.childImageSharp.fluid),e[i]=l}else e[i]=r.node.childImageSharp.fluid;return e}),{})}})},F2CN:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),i=t("Kvkj"),l=t("7Qib"),c=t("IP2g"),o=t("7vrA");a.default=function(e){var a=e.data,t=a.allMarkdownRemark.edges||[],n=a.allFile.edges||[],d=l.c.getImageMap(n,/\/[work].*\/|$/);return r.a.createElement(i.b,null,r.a.createElement(l.a,{title:"Experience"}),r.a.createElement(i.c,{title:"Experience"}," ",r.a.createElement("a",{href:"https://drive.google.com/file/d/1vg62MZC0NULnb1ROBaKhiVRnzzR2Thu-/view?usp=sharing",target:"_blank",download:!0},r.a.createElement(c.a,{style:{fontSize:"2rem"},icon:["fas","file-download"],className:"icons file"}))),r.a.createElement(o.a,{className:"mt-5 pt-3",fluid:!0},t.map((function(e){var a=e.node;return r.a.createElement("div",{key:a.id},r.a.createElement(i.e,{frontmatter:a.frontmatter,image:d[a.fields.slug],html:a.html}),r.a.createElement("hr",{className:"w-75"}))}))))}}}]);
//# sourceMappingURL=component---src-pages-resume-js-b7c474ac96674bdcc19f.js.map