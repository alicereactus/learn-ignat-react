(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={navbarList:"Header_navbarList__2XJox",navbarItem:"Header_navbarItem__23ZiU",activeLink:"Header_activeLink__13irt"}},,function(e,t,a){e.exports={messageWrapper:"Message_messageWrapper__1DU2b",avatar:"Message_avatar__1JV2c",messageInfo:"Message_messageInfo__36eHY",messagePersonName:"Message_messagePersonName__2DNXw",messageText:"Message_messageText__j7m0N",messageTime:"Message_messageTime__VdTt3"}},,,,function(e,t,a){e.exports={todoListWrapper:"Affairs_todoListWrapper__22GrS",todo:"Affairs_todo__yOpe-",btnDelete:"Affairs_btnDelete__1aiOf"}},function(e,t,a){e.exports={right:"Greeting_right__2Rl1P",error:"Greeting_error__2lbs1",errorText:"Greeting_errorText__36Myx",btnAddUser:"Greeting_btnAddUser__1A_w-"}},,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__9D2s7",errorInput:"SuperInputText_errorInput__2A5ZC",error:"SuperInputText_error__lgrOt"}},function(e,t,a){e.exports={default:"SuperButton_default__3iZv9"}},,,,,,function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1SlgB",spanClassName:"SuperCheckbox_spanClassName__2DYfy"}},function(e,t,a){e.exports={Input:"Input_Input__2aO7t",Wrapper:"Input_Wrapper__2XUMx"}},,,,function(e,t,a){e.exports={App:"App_App__349Z-"}},,function(e,t,a){e.exports={column:"HW4_column__1C6QH"}},function(e,t,a){e.exports={Select:"Select_Select__1wpah","select-css":"Select_select-css__3F4cE"}},function(e,t,a){e.exports={error:"Error404_error__2FFg9"}},function(e,t,a){e.exports={appWrapper:"HW5_appWrapper__2bzBl"}},function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=(a(38),a(27)),u=a.n(o),i=a(7),s=a(6),m=a.n(s);var p=function(){return r.a.createElement("div",{className:m.a.navbarList},r.a.createElement("div",{className:m.a.navbarItem},r.a.createElement(i.b,{to:"/pre-junior",activeClassName:m.a.activeLink},"Pre-Junior")),r.a.createElement("div",{className:m.a.navbarItem},r.a.createElement(i.b,{to:"/junior",activeClassName:m.a.activeLink},"Junior")),r.a.createElement("div",{className:m.a.navbarItem},r.a.createElement(i.b,{to:"/junior-plus",activeClassName:m.a.activeLink},"Junior-Plus")))},E=a(2),d=a(8),f=a.n(d);var v=function(e){return r.a.createElement("div",{className:f.a.messageWrapper},r.a.createElement("div",{className:f.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:f.a.messageInfo},r.a.createElement("div",{className:f.a.messagePersonName},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:f.a.messageText},r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:f.a.messageTime},r.a.createElement("span",null,e.time))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Alesia",_="My quest began by searching for some REST API projects that use the Express framework.",b="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:h,name:g,message:_,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=a(1),O=a(12),j=a.n(O);var N=function(e){return r.a.createElement("div",{className:j.a.todo},r.a.createElement("div",{key:e.affair._id},r.a.createElement("span",null,e.affair._id," "),r.a.createElement("span",null,e.affair.name," "),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{className:j.a.btnDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var w=function(e){var t=e.data.map((function(t){return r.a.createElement(N,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,r.a.createElement("div",{className:j.a.todoListWrapper},t),r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"Html & Css",priority:"middle"}];var x=function(){var e=Object(n.useState)(y),t=Object(k.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(k.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=a(9),D=a(13),I=a.n(D),T=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?I.a.error:I.a.right;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",{className:I.a.errorText},l),r.a.createElement("button",{onClick:n,className:I.a.btnAddUser},"ADD USER"),r.a.createElement("span",null,c))},A=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(k.a)(i,2),m=s[0],p=s[1],E=t.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){var e=o.trim();""!==e?(alert("Hello, ".concat(e,"!")),a(e),u(""),p("")):p("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430=)")},error:m,totalUsers:E})},M=a(46);var W=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:a,addUserCallback:function(e){var t={_id:Object(M.a)(),name:e};l([t].concat(Object(S.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=a(3),P=a(15),H=a.n(P),L=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(H.a.error," ").concat(o||""),s="".concat(c?H.a.errorInput:H.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},u)),c&&r.a.createElement("span",{className:i},c))},U=a(29),J=a.n(U),B=a(16),G=a.n(B),X=function(e){var t=e.red,a=e.className,n=Object(F.a)(e,["red","className"]);t=G.a.red?!0===t:!1===t;var l="".concat(t?G.a.red:G.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},Z=a(22),R=a.n(Z),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(R.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:R.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(k.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(L,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(X,{red:!0,onClick:o},"delete "),r.a.createElement(Y,{checked:s,onChangeChecked:m},"some text1 "),r.a.createElement(Y,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}},"some text2")),r.a.createElement("hr",null),r.a.createElement("hr",null))},q=a(23),z=a.n(q),V=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(k.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,E=m.onDoubleClick,d=m.className,f=Object(F.a)(m,["children","onDoubleClick","className"]),v="".concat(z.a.Input," ").concat(d);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!0),a&&a()}},c)):r.a.createElement("div",{className:z.a.Wrapper},r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:v},f),p||c.value)))};function Q(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function $(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}Q("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(X,{onClick:function(){Q("editable-span-value",a)}},"save"),r.a.createElement(X,{onClick:function(){var e=$("editable-span-value",a);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(x,null),r.a.createElement(W,null),r.a.createElement(K,null),r.a.createElement(ee,null))},ae=a(30),ne=a.n(ae),re=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(F.a)(e,["options","onChange","onChangeOption"]),l=t?t.map((function(e,t){return r.a.createElement("option",{key:t},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value)}},n,{className:ne.a.Select}),l)},le=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{type:"radio",name:t,checked:!0,value:n,onChange:c}),e)})):[];return r.a.createElement("div",null,o)},ce=["x","y","z"];var oe=function(){var e=Object(n.useState)(ce[1]),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(re,{options:ce,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(le,{name:"radio",options:ce,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ue=a(17),ie=function(e,t){switch(t.type){case"sort":if("up"===t.payload)return Object(S.a)(e).map((function(e){return Object(ue.a)({},e)})).sort((function(e,t){return e.name>t.name?1:-1}));if("down"===t.payload)return Object(S.a)(e).map((function(e){return Object(ue.a)({},e)})).sort((function(e,t){return e.name<t.name?1:-1}));case"check":return Object(S.a)(e).map((function(e){return Object(ue.a)({},e)})).filter((function(e){return e.age>=t.payload}));default:return e}},se=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(n.useState)(se),t=Object(k.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},"name: ".concat(e.name,", age: ").concat(e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){return l(ie(se,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){return l(ie(se,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){return l(ie(se,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var pe=function(){var e=Object(n.useState)(0),t=Object(k.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(k.a)(c,2),u=(o[0],o[1]),i=Object(n.useState)(!1),s=Object(k.a)(i,2),m=s[0],p=s[1],E=function(){clearInterval(a)},d=(new Date).getHours()<10?"0".concat((new Date).getHours()):"".concat((new Date).getHours()),f=(new Date).getMinutes()<10?"0".concat((new Date).getMinutes()):"".concat((new Date).getMinutes()),v=(new Date).getSeconds()<10?"0".concat((new Date).getSeconds()):"".concat((new Date).getSeconds()),h=(new Date).getDate()<10?"0".concat((new Date).getDate()):"".concat((new Date).getDate()),g=(new Date).getMonth()+1<10?"0".concat((new Date).getMonth()+1):"".concat((new Date).getMonth()+1),_="".concat((new Date).getFullYear()),b="".concat(d,":").concat(f,":").concat(v),C="".concat(h,"-").concat(g,"-").concat(_);return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)}},b),m&&r.a.createElement("div",null,C),r.a.createElement(X,{onClick:function(){E();var e=window.setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(X,{onClick:E},"stop"))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(pe,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var de=function(){return r.a.createElement("div",null,r.a.createElement(oe,null),r.a.createElement(me,null),r.a.createElement(Ee,null))};var fe=function(){return r.a.createElement("div",null)},ve=a(31),he=a.n(ve);var ge=function(){return r.a.createElement("div",{className:he.a.error},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},_e="/pre-junior",be="/junior",Ce="/junior-plus";var ke=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:_e})}}),r.a.createElement(E.b,{path:_e,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(E.b,{path:be,render:function(){return r.a.createElement(de,null)}}),r.a.createElement(E.b,{path:Ce,render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(ge,null)}})))},Oe=a(32),je=a.n(Oe);var Ne=function(){return r.a.createElement("div",{className:je.a.appWrapper},r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement(ke,null)))};var we=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.654f94f9.chunk.js.map