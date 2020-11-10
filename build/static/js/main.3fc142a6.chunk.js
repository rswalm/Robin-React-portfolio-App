(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},26:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(25),a(26),a(2)),i=a(3),m=a(5),s=a(4),u=a(1),h=a.n(u),p={name:"Robin Swalm",headerTagline:["Robin Swalm","Full Stack Web Developer","from Toronto"],contactEmail:"robin.swalm@gmail.com",resume:"./resume.zip",abouttext:"I love to solve problems. Whether its finding the most elegant way to write a code, or make a website stand out, i love the challenge of discovering a way.",aboutImage:"./2.PNG",ShowAboutImage:!0,projects:[{id:1,title:"Progressive Budget",service:"A Program to Track your finances",imageSrc:"./2.png",url:" https://github.com/rswalm/RobindBudgetTracker"},{id:2,title:"Flyjet",service:"Search for Flights, flight times, and tickets",imageSrc:"./3.png",url:"https://github.com/rswalm/flightmaster.git"},{id:3,title:"Employee Management System",service:"manage departments, roles, and employees",imageSrc:"./4.png",url:"https://github.com/rswalm/RobinCMDApplication.git"},{id:4,title:"Team Profile Generator",service:"Gather Information About Team Memebers",imageSrc:"./5.png",url:"https://github.com/rswalm/RobinProfileGenerator.git"},{id:5,title:"Reverse Engineering Authentication",service:"Reverse Engineering Authentication",imageSrc:"./6.png",url:"https://docs.google.com/document/d/1lTyQmm_LLEYCCLHv27Y-CWFfY_0fDj-Bz4ejQzi4CO8/edit?usp=sharing"},{id:6,title:"Note Taker",service:"home",imageSrc:"./7.png",url:"https://robinnotetracker2.herokuapp.com/"}],social:[{name:"Github",url:"https://github.com/rswalm"},{name:"Linkedin",url:"https://www.linkedin.com/in/robin-swalm-75b7b91a7/"},{name:"Gitlab",url:"https://utoronto.bootcampcontent.com/robinswalm"}]},b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading-background"},"C NEILL"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0},p.name))),r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",{className:"header-title"},p.headerTagline[0],r.a.createElement("br",null),p.headerTagline[1],r.a.createElement("br",null),p.headerTagline[2],r.a.createElement("br",null),r.a.createElement("button",null,r.a.createElement("a",{href:"mailto:".concat(p.contactEmail),rel:"Contact"},"Contact")),r.a.createElement("button",null,r.a.createElement("a",{href:"".concat(p.resume),rel:"Resume"},"Resume")))))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0},"About.")),r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",null,p.abouttext))),p.ShowAboutImage?r.a.createElement("img",{src:p.aboutImage,alt:"about iamge"}):null)}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:this.props.url},r.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title})),r.a.createElement("h1",null,this.props.title),r.a.createElement("span",null,this.props.service)))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},r.a.createElement(h.a,{bottom:!0,cascade:!0},"Work.")),r.a.createElement("div",{className:"work-content"},p.projects.map(function(e){return r.a.createElement(v,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})})))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(h.a,{bottom:!0,cascade:!0}," Contact.")),r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"contact-content"},r.a.createElement("a",{href:"mailto:".concat(p.contactEmail),className:"email"},p.contactEmail),r.a.createElement("ul",null,p.social.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{target:"_blank",rel:"Robin",href:e.url},e.name))})))))}}]),a}(n.Component),f=a(7),w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.scrollToTop=function(){f.animateScroll.scrollToTop()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home")),r.a.createElement("li",null,r.a.createElement(f.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",null,r.a.createElement(f.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),r.a.createElement("li",null,r.a.createElement(f.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))}}]),a}(n.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement("div",{className:"App-header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"About"},r.a.createElement(E,null)),r.a.createElement("div",{className:"work"},r.a.createElement(d,null)),r.a.createElement("div",{className:"contact"},r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.3fc142a6.chunk.js.map