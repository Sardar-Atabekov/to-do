(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/editIcon.f19a6f3e.svg"},27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjSURBVHgBlc9bDYAwDAXQiwMkTAISkDIJSEACEnCAFCRMwiR0d8myLNmzTfrT9qTtJiIWgIEuXhAappP1eDJP2C+gr9rN4jHBP3NvHs7G2UEuXjX8mgNWjQp8qVGB7/h3rx8AXQDQZISkE20AAAAASUVORK5CYII="},28:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,s=a(7),i=a(1),m=a(11),u=a(12),d=a(14),p=a(13),f=(a(33),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"NotFound"},r.a.createElement("div",{className:"nf_block"},r.a.createElement("p",{className:"nf_p"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438..."),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"nf_button"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))))}}]),a}(n.Component)),E=a(3),h=a(9),b=a.n(h),g=a(15),v="https://uxcandy.com/~shapoval/test-task-backend/v2/";function N(e,t){return A.apply(this,arguments)}function A(){return(A=Object(g.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.append("token",l),e.next=3,fetch("".concat(v).concat(t),{method:"POST",body:a});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t),{method:"POST",body:a});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}localStorage.getItem("tokenData")&&(l=JSON.parse(localStorage.getItem("tokenData")).token);var j={0:"\u0437\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",1:"\u0437\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0430\u0434\u043c\u0438\u043d\u043e\u043c",10:"\u0437\u0430\u0434\u0430\u0447\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",11:"\u0437\u0430\u0434\u0430\u0447\u0430 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0430\u0434\u043c\u0438\u043d\u043e\u043c \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430"},O=a(16),w=a.n(O);function y(e){w.a.fire({width:500,height:500,showConfirmButton:!0,icon:"error",showCancelButton:!0,confirmButtonColor:"#32b482",cancelButtonColor:"#3085d6",confirmButtonText:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443",cancelButtonText:"\u041e\u041a",title:e}).then((function(e){e.value&&setTimeout((function(){window.location.href="/"}),1e3)}))}var C=function(){w.a.fire({title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#32b482",cancelButtonColor:"#d33",cancelButtonText:"\u041d\u0435\u0442",confirmButtonText:"\u0414\u0430, \u0432\u044b\u0439\u0442\u0438"}).then((function(e){e.value&&(localStorage.removeItem("tokenData"),window.location.href="/")}))},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#32b482";w.a.fire({showConfirmButton:!0,icon:t,width:500,title:e,timer:2e3,confirmButtonColor:a})},I=(a(39),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"nest5"})}}]),a}(n.Component)),B=a(25),T=a.n(B),F=a(26),q=a.n(F),J=function(e){var t=e.data,a=e.getTasks,c=Object(n.useState)(!1),o=Object(E.a)(c,2),l=o[0],s=o[1],i=Object(n.useState)(t.text),m=Object(E.a)(i,2),u=m[0],d=m[1];return r.a.createElement("div",null,l?r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"dialog"},r.a.createElement("form",{className:"modal-form",onSubmit:function(e){e.preventDefault();var n=new FormData(e.target),r=0===t.status?1:10===t.status?11:t.status;n.append("status",r),u!==t.text?N("edit/".concat(t.id,"?developer=Sardar"),n).then((function(e){console.log("response",e),"ok"===e.status?(a(),D("\u0417\u0430\u0434\u0430\u0447\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430"),s(!1)):D("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","error")})).catch((function(){return y("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043c\u044b \u0432\u0441\u0451 \u043f\u043e\u0447\u0438\u043d\u0438\u043c.")})):s(!1)}},r.a.createElement("h2",null,"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"),r.a.createElement("textarea",{type:"text",name:"text",defaultValue:t.text,className:"form-control",onChange:function(e){return d(e.target.value)},id:"text",required:!0}),r.a.createElement("div",{className:"btn-block"},r.a.createElement("input",{type:"submit",className:"btn add-btn w-50 mt-2",value:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"}),r.a.createElement("button",{className:"btn",onClick:function(){return s(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430")))))):r.a.createElement("img",{src:q.a,onClick:function(){return s(!0)},alt:"editImg"}))},X=a(27),M=a.n(X),P=function(e){var t=e.name,a=e.sortField,c=e.sortDirection,o=e.setSortDirection,l=e.setSortingOptions,s=Object(n.useState)(c),i=Object(E.a)(s,2),m=i[0],u=i[1];return r.a.createElement("div",{className:"sort-block"},r.a.createElement("span",null,t," "),r.a.createElement("img",{src:M.a,alt:"sortImg",onClick:function(){l(a),u("desc"===c?"asc":"desc"),o("desc"===c?"asc":"desc")},className:"desc"===m?"rotateImg":"sortImg"}))},Q=function(e){var t=e.data,a=e.getTasks,n=0!==t.status&&1!==t.status;return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){var n,r=new FormData;0===t.status?n=10:10===t.status?n=0:1===t.status?n=11:11===t.status&&(n=1),r.append("status",n),r.append("text",t.text),console.log("status",n),N("edit/".concat(t.id,"?developer=Sardar"),r).then((function(e){console.log("response",e),"ok"===e.status?a():D("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","error")})).catch((function(){return y("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043c\u044b \u0432\u0441\u0451 \u043f\u043e\u0447\u0438\u043d\u0438\u043c.")}))},className:"checkbox"}))},R=(a(40),function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(1),l=Object(E.a)(o,2),i=l[0],m=l[1],u=Object(n.useState)([]),d=Object(E.a)(u,2),p=d[0],f=d[1],h=Object(n.useState)(0),b=Object(E.a)(h,2),g=b[0],v=b[1],N=Object(n.useState)("ask"),A=Object(E.a)(N,2),k=A[0],S=A[1],O=Object(n.useState)("username"),w=Object(E.a)(O,2),D=w[0],B=w[1],F=function(){(function(e){return x.apply(this,arguments)})("?developer=Sardar&&page=".concat(g,"&&sort_field=").concat(D,"&&sort_direction=").concat(k)).then((function(e){m(Math.ceil(e.message.total_task_count/3)),f(e.message.tasks),c(!0)})).catch((function(){return y("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043c\u044b \u0432\u0441\u0451 \u043f\u043e\u0447\u0438\u043d\u0438\u043c.")}))};Object(n.useEffect)((function(){F()}),[g,D,k]);return console.log("tasksData",i,p),r.a.createElement("div",{className:"wrapper main-container"},r.a.createElement("div",{className:"btn-block"},r.a.createElement(s.b,{to:"/create-task/",className:"add-btn btn"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),localStorage.getItem("tokenData")?r.a.createElement("button",{className:"btn",onClick:C},"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement(s.b,{to:"/login/",className:"login-btn btn"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")),a?r.a.createElement("div",null,r.a.createElement("table",{className:"tables"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"thead-item"},r.a.createElement(P,{name:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",sortField:"username",sortDirection:k,setSortDirection:S,setSortingOptions:B})),r.a.createElement("th",{className:"thead-item"},r.a.createElement(P,{name:"Email",sortField:"email",sortDirection:k,setSortDirection:S,setSortingOptions:B})),r.a.createElement("th",{className:"thead-item"},r.a.createElement("span",null,"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438")),r.a.createElement("th",{className:"thead-item"},r.a.createElement(P,{name:"\u0421\u0442\u0430\u0442\u0443\u0441",sortField:"status",sortDirection:k,setSortDirection:S,setSortingOptions:B})),localStorage.getItem("tokenData")?r.a.createElement("th",{colSpan:"2",className:"thead-item"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"):null)),r.a.createElement("tbody",{className:"tbody"},p.length>0?p.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{"data-th":"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"tbody-item"},e.username),r.a.createElement("td",{"data-th":"Email",className:"tbody-item"},e.email),r.a.createElement("td",{"data-th":"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",className:"tbody-item text-block"},e.text),r.a.createElement("td",{"data-th":"\u0421\u0442\u0430\u0442\u0443\u0441",className:"tbody-item"},j[e.status]),localStorage.getItem("tokenData")?r.a.createElement("td",{"data-th":"\u0421\u0442\u0430\u0442\u0443\u0441",className:"tbody-item"},r.a.createElement(Q,{data:e,getTasks:F})):null,localStorage.getItem("tokenData")?r.a.createElement("td",{"data-th":"\u0421\u0442\u0430\u0442\u0443\u0441",className:"tbody-item edit-task"},r.a.createElement(J,{data:e,getTasks:F})):null)})):r.a.createElement("tr",{className:"text-center"},r.a.createElement("td",{colSpan:"6"},"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u044d\u0442\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c")))),i>1?r.a.createElement(T.a,{pageCount:i,initialPage:g,onPageChange:function(e){var t=e.selected+1;console.log("selected",t),v(t)},activeClassName:"active-btn",pageClassName:"btn",containerClassName:"pagination"}):null):r.a.createElement(I,null))}),U=(a(41),function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"login"},r.a.createElement("form",{className:"loginForm",onSubmit:function(t){t.preventDefault(),k("login?developer=Sardar",new FormData(t.target)).then((function(t){console.log("response",t),"ok"===t.status?(D("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"),localStorage.setItem("tokenData",JSON.stringify(t.message)),setTimeout((function(){return e.history.push("/")}),1400)):o(!0)})).catch((function(){return y("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043c\u044b \u0432\u0441\u0451 \u043f\u043e\u0447\u0438\u043d\u0438\u043c.")}))}},r.a.createElement("input",{className:"loginInput",type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d",name:"username",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{className:"loginInput",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0}),c?r.a.createElement("div",{className:"loginErrorMessage"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"):r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"loginInput loginBtn",value:"\u0412\u043e\u0439\u0442\u0438",type:"submit"}))))}),_=(a(42),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(s.b,{to:"/"},"\u0417\u0430\u0434\u0430\u0447\u0438"))}),V=(a(43),function(e){return r.a.createElement("div",{className:"main-container"},r.a.createElement("form",{className:"input-blocks",onSubmit:function(t){t.preventDefault(),k("create?developer=Sardar",new FormData(t.target)).then((function(t){console.log("response",t),"ok"===t.status?(D("\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),setTimeout((function(){return e.history.push("/")}),1400)):D("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","error")})).catch((function(){return y("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043c\u044b \u0432\u0441\u0451 \u043f\u043e\u0447\u0438\u043d\u0438\u043c.")}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("input",{type:"text",name:"username",className:"form-control",id:"username",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u044f"),r.a.createElement("textarea",{type:"text",name:"text",required:!0,className:"form-control",id:"text"})),r.a.createElement("div",{className:"text-right"},r.a.createElement("input",{type:"submit",className:"btn add-btn w-50 mt-5",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}))))});var W=function(){return r.a.createElement(s.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:R}),r.a.createElement(i.a,{path:"/login/",exact:!0,component:U}),r.a.createElement(i.a,{path:"/create-task/",exact:!0,component:V}),r.a.createElement(i.a,{path:"*",exact:!0,component:f}))))};a(44),a(45),a(46);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.264a0c05.chunk.js.map