(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{14:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(16),l=a.n(n),r=(a(23),a(14),a(7)),i=a(0);function o(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar  navbar-dark ",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Its Your Boy Prabh"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",style:{backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"10px",paddingLeft:"3%",marginTop:"1%"},children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})}),Object(i.jsxs)("li",{className:"nav-item dropdown",children:[Object(i.jsx)(r.b,{className:"nav-link dropdown-toggle",to:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown"}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",style:{backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"10px",paddingLeft:"3%"},children:[Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:"dropdown-item",to:"/",style:{color:"white"},children:"Action"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:"dropdown-item",to:"/",style:{color:"white"},children:"Another action"})}),Object(i.jsx)("li",{children:Object(i.jsx)("hr",{className:"dropdown-divider",to:"/",style:{color:"white"}})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:"dropdown-item",to:"/",style:{color:"white"},children:"Something else here"})})]})]}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link disabled",to:"/","aria-disabled":"true",children:"Disabled"})})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}var b=a(18);function j(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],n=function(){var e=a.split(/[ ]+/);c(e.join(" "))};return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{style:{textAlign:"center",color:"white",fontWeight:"800"},children:"Text Utilities"}),Object(i.jsx)("h3",{style:{color:"white",fontWeight:"300"},children:"Enter your text here"}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"5",value:a,onChange:function(e){c(e.target.value)}})}),Object(i.jsx)("button",{className:"pushable",style:{background:"black",margin:"1%"},onClick:function(){c(a.toUpperCase())},children:Object(i.jsx)("span",{className:"front",style:{background:"#2e2e2e"},children:"Convert to Uppercase"})}),Object(i.jsx)("button",{className:"pushable",style:{background:"black",margin:"1%"},onClick:function(){c(a.toLowerCase())},children:Object(i.jsx)("span",{className:"front",style:{background:"#2e2e2e"},children:"Convert to Lowercase"})}),Object(i.jsx)("button",{className:"pushable",style:{background:"black",margin:"1%"},onClick:function(){navigator.clipboard.writeText(a)},children:Object(i.jsx)("span",{className:"front",style:{background:"#2e2e2e"},children:"Copy"})}),Object(i.jsx)("button",{className:"pushable",style:{background:"black",margin:"1%"},onClick:n,children:Object(i.jsx)("span",{className:"front",style:{background:"#2e2e2e"},children:"Remove Extra Spaces"})}),Object(i.jsx)("button",{className:"pushable",style:{background:"black",margin:"1%"},onClick:function(){n();var e=a.split(" "),t=[];e.forEach((function(e){t.push(e[0].toUpperCase()+e.slice(1,e.length)),c(t.join(" "))}))},children:Object(i.jsx)("span",{className:"front",style:{background:"#2e2e2e"},children:"Capitalize"})}),Object(i.jsx)("button",{className:"pushable",style:{background:"black",margin:"1%"},onClick:function(){c("")},children:Object(i.jsx)("span",{className:"front",style:{background:"#2e2e2e"},children:"Clear"})}),Object(i.jsxs)("div",{className:"container my-5",style:{color:"white"},children:[Object(i.jsx)("h1",{children:"Facts:-"}),Object(i.jsxs)("h3",{children:[Object(i.jsxs)("span",{style:{color:"Yellow"},children:[0===a.length?0:a[a.length-1].match(/\s/)?a.split(" ").length-1:a.split(" ").length," "]})," Words  & ",Object(i.jsxs)("span",{style:{color:"Yellow"},children:[a.slice("").length," "]})," Letters "]}),Object(i.jsxs)("h3",{children:["It will take ",Object(i.jsxs)("span",{style:{color:"Yellow"},children:[" ",.04*(0===a.length?0:a.slice("").length)," "]}),"Seconds to read"]})]}),Object(i.jsxs)("div",{className:"container my-5",style:{color:"white"},children:[Object(i.jsx)("h1",{children:"Preview:-"}),Object(i.jsx)("h3",{children:""===a?"Enter something above to preview":a})]})]})}function d(){return Object(i.jsxs)("div",{className:"container my-3",style:{color:"white"},children:[Object(i.jsxs)("h3",{className:"text-center my-5",style:{fontFamily:"sans-serif",fontWeight:"900",fontSize:"48px"},children:[Object(i.jsx)("span",{style:{color:"red"},children:"Text"}),"-",Object(i.jsx)("span",{style:{color:"green"},children:"Utilities"})," "]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("h2",{children:["This is Created By  ",Object(i.jsx)("span",{style:{color:"Green",fontSize:"48px;"},children:"Prabh Simar Singh \ud83e\udd20"})]}),Object(i.jsx)("h3",{children:"Prabh is a Full Time  Developer and a part Time Graphic Designer (Better than Nikhil C),Kabhi Kabhi 3D Artist and Animator Bachpan Se \ud83d\ude0e"}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"P.S: FO!!!! \ud83d\udc4a"})]})}var h=a(2);var x=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/about",children:Object(i.jsx)(d,{})}),Object(i.jsx)(h.a,{path:"/",children:Object(i.jsx)(j,{})})]})]})})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.8ba5b04e.chunk.js.map