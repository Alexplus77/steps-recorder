(this["webpackJsonpsteps-recorder"]=this["webpackJsonpsteps-recorder"]||[]).push([[0],{22:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),i=n(11),s=n.n(i),d=n(15),r=n(7),l=n(9),u=n(10),j=(n(5),n(0)),b=function(e){var t=e.handleChange,n=(e.handleSelectDate,e.handleSubmit),a=e.form;return Object(j.jsxs)("form",{onSubmit:n,className:"form",children:[Object(j.jsx)("label",{className:"labelDate",htmlFor:"date",children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(j.jsx)("label",{className:"labelDistance",htmlFor:"distance",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(j.jsx)("input",{onChange:t,type:"date",className:"inputDate",id:"date",name:"date",value:a.date,required:!0,placeholder:"Date"}),Object(j.jsx)("input",{type:"number",onChange:t,required:!0,className:"inputDistance",id:"distance",name:"distance",value:a.distance,placeholder:"Number"}),Object(j.jsx)("button",{onSubmit:n,className:"submit",type:"submit",children:"Ok"})]})},o=function(e){var t=e.id,n=e.date,a=e.distance,c=e.handleRemove,i=e.handleEdit;return Object(j.jsxs)("li",{className:"itemResult",children:[Object(j.jsx)("span",{children:n}),Object(j.jsx)("span",{children:a}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("i",{className:"fa fa-pencil  fa-flip-horizontal","aria-hidden":"true",onClick:function(){return i(t,n,a)}}),"  ",Object(j.jsx)("i",{className:"fa fa-times",onClick:function(){return c(t)},"aria-hidden":"true"})]})]})},m=function(e){var t=e.submit,n=e.handleRemove,a=e.handleEdit;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("div",{className:"titleResult",children:[Object(j.jsx)("span",{children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(j.jsx)("span",{children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(j.jsx)("span",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(j.jsx)("ul",{className:"resultList",children:t.map((function(e){var t=e.date,c=e.distance,i=e.id;return Object(j.jsx)(o,{date:t,handleRemove:n,handleEdit:a,distance:c,id:i},i)}))})]})},h=n(16),O=n(14),f=function(){var e={id:"",date:"",distance:""},t=Object(a.useState)(e),n=Object(u.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)([]),o=Object(u.a)(s,2),f=o[0],x=o[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"title",children:"\u0423\u0447\u0451\u0442 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"}),Object(j.jsx)(b,{handleChange:function(e){var t=e.target;console.log(Object(O.a)(new Date(t.value),"dd/MM/yy")),i(Object(l.a)(Object(l.a)({},c),{},Object(r.a)({},t.name,t.value)))},handleSubmit:function(t){t.preventDefault();var n=f.findIndex((function(e){return e.id===c.id})),a=f.findIndex((function(e){return e.date===c.date})),s=function(e,t){return e.map((function(e){return e.id===t.id?e=t:e.date===t.date&&(e.distance=Number(e.distance)+Number(t.distance)),e}))}(f,c);c.id=Object(h.a)(),-1!==a&&x(f[a]=s),-1!==n&&x(f[n]=s),-1===a&&-1===n&&x([].concat(Object(d.a)(f),[c])),i(e)},form:c}),Object(j.jsx)(m,{handleEdit:function(e,t,n){i({id:e,date:t,distance:n})},handleRemove:function(e){var t=f.filter((function(t){return t.id!==e}));x(t)},submit:f})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},5:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.b7488ec4.chunk.js.map