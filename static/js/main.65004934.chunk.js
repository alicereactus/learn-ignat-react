(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={navbarList:"Header_navbarList__2XJox",navbarItem:"Header_navbarItem__23ZiU",activeLink:"Header_activeLink__13irt"}},,function(e,a,t){e.exports={messageWrapper:"Message_messageWrapper__1DU2b",avatar:"Message_avatar__1JV2c",messageInfo:"Message_messageInfo__36eHY",messagePersonName:"Message_messagePersonName__2DNXw",messageText:"Message_messageText__j7m0N",messageTime:"Message_messageTime__VdTt3"}},,,function(e,a,t){e.exports={todoListWrapper:"Affairs_todoListWrapper__22GrS",todo:"Affairs_todo__yOpe-",btnDelete:"Affairs_btnDelete__1aiOf"}},function(e,a,t){e.exports={right:"Greeting_right__2Rl1P",error:"Greeting_error__2lbs1",errorText:"Greeting_errorText__36Myx",btnAddUser:"Greeting_btnAddUser__1A_w-"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__9D2s7",errorInput:"SuperInputText_errorInput__2A5ZC",error:"SuperInputText_error__lgrOt"}},function(e,a,t){e.exports={default:"SuperButton_default__3iZv9"}},,,,,function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1SlgB",spanClassName:"SuperCheckbox_spanClassName__2DYfy"}},function(e,a,t){e.exports={Input:"Input_Input__2aO7t",Wrapper:"Input_Wrapper__2XUMx"}},,,,function(e,a,t){e.exports={App:"App_App__349Z-"}},,function(e,a,t){e.exports={column:"HW4_column__1C6QH"}},function(e,a,t){e.exports={error:"Error404_error__2FFg9"}},function(e,a,t){e.exports={appWrapper:"HW5_appWrapper__2bzBl"}},,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(36),t(25)),s=t.n(o),i=t(7),u=t(6),m=t.n(u);var p=function(){return r.a.createElement("div",{className:m.a.navbarList},r.a.createElement("div",{className:m.a.navbarItem},r.a.createElement(i.b,{to:"/pre-junior",activeClassName:m.a.activeLink},"Pre-Junior")),r.a.createElement("div",{className:m.a.navbarItem},r.a.createElement(i.b,{to:"/junior",activeClassName:m.a.activeLink},"Junior")),r.a.createElement("div",{className:m.a.navbarItem},r.a.createElement(i.b,{to:"/junior-plus",activeClassName:m.a.activeLink},"Junior-Plus")))},d=t(1),E=t(8),f=t.n(E);var v=function(e){return r.a.createElement("div",{className:f.a.messageWrapper},r.a.createElement("div",{className:f.a.avatar},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:f.a.messageInfo},r.a.createElement("div",{className:f.a.messagePersonName},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:f.a.messageText},r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:f.a.messageTime},r.a.createElement("span",null,e.time))))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Alesia",b="My quest began by searching for some REST API projects that use the Express framework.",g="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:_,name:h,message:b,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(2),C=t(11),x=t.n(C);var j=function(e){return r.a.createElement("div",{className:x.a.todo},r.a.createElement("div",{key:e.affair._id},r.a.createElement("span",null,e.affair._id," "),r.a.createElement("span",null,e.affair.name," "),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{className:x.a.btnDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var O=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,r.a.createElement("div",{className:x.a.todoListWrapper},a),r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"Html & Css",priority:"middle"}];var S=function(){var e=Object(n.useState)(y),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),s=o[0],i=o[1],u=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(O,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(30),w=t(12),A=t.n(w),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?A.a.error:A.a.right;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",{className:A.a.errorText},l),r.a.createElement("button",{onClick:n,className:A.a.btnAddUser},"ADD USER"),r.a.createElement("span",null,c))},W=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(""),u=Object(N.a)(i,2),m=u[0],p=u[1],d=a.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){var e=o.trim();""!==e?(alert("Hello, ".concat(e,"!")),t(e),s(""),p("")):p("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430=)")},error:m,totalUsers:d})},P=t(44);var F=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(W,{users:t,addUserCallback:function(e){var a={_id:Object(P.a)(),name:e};l([a].concat(Object(I.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=t(5),D=t(14),L=t.n(D),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(L.a.error," ").concat(o||""),u="".concat(c?L.a.errorInput:L.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},s)),c&&r.a.createElement("span",{className:i},c))},M=t(27),J=t.n(M),B=t(15),G=t.n(B),X=function(e){var a=e.red,t=e.className,n=Object(U.a)(e,["red","className"]);a=G.a.red?!0===a:!1===a;var l="".concat(a?G.a.red:G.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Z=t(20),R=t.n(Z),K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(R.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:R.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(N.a)(s,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(X,{red:!0,onClick:o},"delete "),r.a.createElement(K,{checked:u,onChangeChecked:m},"some text1 "),r.a.createElement(K,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}},"some text2")),r.a.createElement("hr",null),r.a.createElement("hr",null))},q=t(21),V=t.n(q),z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(U.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(N.a)(o,2),i=s[0],u=s[1],m=l||{},p=m.children,d=m.onDoubleClick,E=m.className,f=Object(U.a)(m,["children","onDoubleClick","className"]),v="".concat(V.a.Input," ").concat(E);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!0),t&&t()}},c)):r.a.createElement("div",{className:V.a.Wrapper},r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),d&&d(e)},className:v},f),p||c.value)))};function Q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function $(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Q("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(X,{onClick:function(){Q("editable-span-value",t)}},"save"),r.a.createElement(X,{onClick:function(){var e=$("editable-span-value",t);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(Y,null),r.a.createElement(ee,null))};var te=function(){return r.a.createElement("div",null)};var ne=function(){return r.a.createElement("div",null)},re=t(28),le=t.n(re);var ce=function(){return r.a.createElement("div",{className:le.a.error},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},oe="/pre-junior",se="/junior",ie="/junior-plus";var ue=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:oe})}}),r.a.createElement(d.b,{path:oe,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(d.b,{path:se,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(d.b,{path:ie,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(ce,null)}})))},me=t(29),pe=t.n(me);var de=function(){return r.a.createElement("div",{className:pe.a.appWrapper},r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement(ue,null)))};var Ee=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.65004934.chunk.js.map