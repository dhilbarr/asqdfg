(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),s=a.n(r),c=(a(12),a(15));const o=e=>{let{fixedPages:t,morePagesGetter:a,currentPage:r,setCurrentPage:s}=e;const[o,m]=Object(l.useState)(!1),i=a();return n.a.createElement("nav",{className:"flex flex-wrap justify-between items-center mb-8"},n.a.createElement("span",{className:"text-lg font-semibold mr-6"},"Your Name"),n.a.createElement("div",{className:"flex items-center space-x-4"},t.map(e=>n.a.createElement("button",{key:e,onClick:()=>s(e),className:`text-gray-600 hover:text-gray-900 transition-colors duration-200 ${r===e?"font-semibold":""}`},e.charAt(0).toUpperCase()+e.slice(1))),i.length>0&&n.a.createElement("div",{className:"relative"},n.a.createElement("button",{onClick:()=>m(!o),className:"text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200"},"More ",n.a.createElement(c.a,{size:16,className:`ml-1 transform transition-transform duration-200 ${o?"rotate-180":""}`})),n.a.createElement("div",{className:`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 overflow-hidden transition-all duration-200 ease-in-out ${o?"max-h-96 opacity-100":"max-h-0 opacity-0"}`},i.map(e=>n.a.createElement("button",{key:e,onClick:()=>{s(e),m(!1)},className:"block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"},e))))))},m=e=>{let{block:t,level:a=0}=e;const l=t.children&&t.children.length>0;return n.a.createElement("div",{className:`mb-4 ${a>0?"ml-6":""}`},n.a.createElement("p",{className:"text-gray-900"},t.content),l&&n.a.createElement("div",{className:"mt-2"},t.children.map((e,t)=>n.a.createElement(m,{key:t,block:e,level:a+1}))))},i=e=>{let{onSelectPost:t}=e;const[a,r]=Object(l.useState)([]);return Object(l.useEffect)(()=>{Promise.resolve([{id:1,title:"First Post",excerpt:"This is the first post."},{id:2,title:"Second Post",excerpt:"This is the second post."}]).then(r)},[]),n.a.createElement("div",null,n.a.createElement("h1",{className:"text-3xl font-semibold mb-6"},"Posts"),a.map(e=>n.a.createElement("div",{key:e.id,className:"mb-8"},n.a.createElement("h2",{className:"text-xl font-semibold mb-2"},n.a.createElement("button",{onClick:()=>t(e.id),className:"text-blue-600 hover:underline transition-colors duration-200"},e.title)),n.a.createElement("p",{className:"text-gray-600"},e.excerpt))))},u=e=>{let{postId:t}=e;const[a,r]=Object(l.useState)(null);return Object(l.useEffect)(()=>{(e=>Promise.resolve({id:e,title:`Post ${e}`,blocks:[{content:"This is the content of the post.",children:[]},{content:"It can have multiple blocks.",children:[]}]}))(t).then(r)},[t]),a?n.a.createElement("div",null,n.a.createElement("h1",{className:"text-3xl font-semibold mb-6"},a.title),n.a.createElement("div",{className:"prose"},a.blocks.map((e,t)=>n.a.createElement(m,{key:t,block:e})))):n.a.createElement("div",null,"Loading...")},d=()=>{const[e,t]=Object(l.useState)([]);return Object(l.useEffect)(()=>{Promise.resolve([{title:"Book 1",author:"Author 1",recommendation:"Great read!"},{title:"Book 2",author:"Author 2",recommendation:"Highly recommended."}]).then(t)},[]),n.a.createElement("div",null,n.a.createElement("h1",{className:"text-3xl font-semibold mb-6"},"My Bookshelf"),n.a.createElement("div",{className:"space-y-6"},e.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("h2",{className:"text-xl font-semibold"},e.title),n.a.createElement("p",{className:"text-gray-600"},"by ",e.author),n.a.createElement("p",{className:"mt-2"},e.recommendation)))))},b=e=>{let{page:t}=e;const[a,r]=Object(l.useState)(null);return Object(l.useEffect)(()=>{(e=>Promise.resolve({title:e.charAt(0).toUpperCase()+e.slice(1),blocks:[{content:`This is the ${e} page content.`,children:[]}]}))(t).then(r)},[t]),a?n.a.createElement("div",null,n.a.createElement("h1",{className:"text-3xl font-semibold mb-6"},a.title),n.a.createElement("div",{className:"prose"},a.blocks.map((e,t)=>n.a.createElement(m,{key:t,block:e})))):n.a.createElement("div",null,"Loading...")};var h=()=>{const[e,t]=Object(l.useState)("posts"),[a,r]=Object(l.useState)(null),s=["posts","about","bookshelf"],c=[...s,"travel","food","projects","contact"];return n.a.createElement("div",{className:"max-w-2xl mx-auto px-4 py-8 font-serif"},n.a.createElement(o,{fixedPages:s,morePagesGetter:()=>c.filter(e=>!s.includes(e)),currentPage:e,setCurrentPage:e=>{t(e),r(null)}}),n.a.createElement("main",null,(()=>{switch(e){case"posts":return a?n.a.createElement(u,{postId:a}):n.a.createElement(i,{onSelectPost:r});case"bookshelf":return n.a.createElement(d,null);default:return n.a.createElement(b,{page:e})}})()),n.a.createElement("footer",{className:"mt-16 text-center text-gray-500 text-sm"},"\xa9 ",(new Date).getFullYear()," Your Name"))};var p=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:s}=t;a(e),l(e),n(e),r(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),p()},3:function(e,t,a){e.exports=a(13)}},[[3,1,2]]]);
//# sourceMappingURL=main.dea8bec1.chunk.js.map