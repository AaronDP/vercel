(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{258:function(e,t,n){"use strict";n.r(t);n(22);var r=n(2),s=n(81),c=n(248),i=n(0);var a=Object(r.connect)((function(e){var t=e.state,n=e.item,r=t.source.author[n.author],a=new Date(n.date);return Object(i.jsxs)("article",{children:[Object(i.jsx)(s.a,{link:n.link,children:Object(i.jsx)(o,{dangerouslySetInnerHTML:{__html:n.title.rendered}})}),Object(i.jsxs)("div",{children:[r&&Object(i.jsx)(l,{link:r.link,children:Object(i.jsxs)(d,{children:["By ",Object(i.jsx)("b",{children:r.name})]})}),Object(i.jsxs)(j,{children:[" ","on ",Object(i.jsx)("b",{children:a.toDateString()})]})]}),t.theme.featured.showOnList&&Object(i.jsx)(c.a,{id:n.featured_media}),n.excerpt&&Object(i.jsx)(b,{dangerouslySetInnerHTML:{__html:n.excerpt.rendered}})]})})),o=Object(r.styled)("h1",{target:"e1p5zhim4"})({name:"1vwysmt",styles:"font-size:2rem;color:rgba(12, 17, 43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box"}),d=Object(r.styled)("span",{target:"e1p5zhim3"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),l=Object(r.styled)(s.a,{target:"e1p5zhim2"})({name:"1k93czn",styles:"padding:15px 0"}),j=Object(r.styled)("span",{target:"e1p5zhim1"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),b=Object(r.styled)("div",{target:"e1p5zhim0"})({name:"1xhvlt7",styles:"line-height:1.6em;color:rgba(12, 17, 43, 0.8)"}),h=n(1);var O=Object(r.connect)((function(e){var t=e.state,n=e.actions,r=t.source.get(t.router.link),c=r.next,a=r.previous;return Object(h.useEffect)((function(){c&&n.source.fetch(c)}),[]),Object(i.jsxs)("div",{children:[c&&Object(i.jsx)(s.a,{link:c,children:Object(i.jsx)(x,{children:"← Older posts"})}),a&&c&&" - ",a&&Object(i.jsx)(s.a,{link:a,children:Object(i.jsx)(x,{children:"Newer posts →"})})]})})),x=Object(r.styled)("em",{target:"esft81u0"})({name:"vxgo1h",styles:"display:inline-block;margin-top:16px"});t.default=Object(r.connect)((function(e){var t=e.state,n=t.source.get(t.router.link);return Object(i.jsxs)(m,{children:[n.isTaxonomy&&Object(i.jsxs)(u,{children:[n.taxonomy,":"," ",Object(i.jsx)("b",{children:Object(r.decode)(t.source[n.taxonomy][n.id].name)})]}),n.isAuthor&&Object(i.jsxs)(u,{children:["Author: ",Object(i.jsx)("b",{children:Object(r.decode)(t.source.author[n.id].name)})]}),n.items.map((function(e){var n=e.type,r=e.id,s=t.source[n][r];return Object(i.jsx)(a,{item:s},s.id)})),Object(i.jsx)(O,{})]})}));var m=Object(r.styled)("section",{target:"exiu6z11"})({name:"1uk7fhg",styles:"width:800px;margin:0;padding:24px;list-style:none"}),u=Object(r.styled)("h3",{target:"exiu6z10"})({name:"eigqg2",styles:"font-weight:300;text-transform:capitalize;color:rgba(12, 17, 43, 0.9)"})}}]);