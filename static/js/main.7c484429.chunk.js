(this["webpackJsonpsteps-recorder"]=this["webpackJsonpsteps-recorder"]||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(10),s=a.n(i),d=a(9),r=a(6),l=a(3),u=(a(4),a(19)),j=a(0),b=function(e){var t=e.handleDate,a=e.handleSubmit,n=e.handleSteps,c=e.steps,i=e.date,s=e.edit;return Object(j.jsxs)("form",{onSubmit:a,className:"form",children:[Object(j.jsx)("label",{className:"labelDate",htmlFor:"date",children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(j.jsx)("label",{className:"labelDistance",htmlFor:"distance",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(j.jsx)("input",{onChange:t,type:"date",className:"inputDate",id:"date",name:"date",value:Object(u.a)(new Date(i),"yyyy-MM-dd"),required:!0,readOnly:s&&!0}),Object(j.jsx)("input",{type:"number",onChange:n,required:!0,className:"inputDistance",id:"distance",name:"distance",value:c,placeholder:"Number"}),Object(j.jsx)("button",{onSubmit:a,className:"submit",type:"submit",children:"Ok"})]})},o=a(8),O=a.n(o),h=function(e){var t=e.id,a=e.date,n=e.steps,c=e.handleRemove,i=e.handleEdit,s=e.edit;return Object(j.jsxs)("li",{className:O()("itemResult",{"itemResult activeItem":s}),children:[Object(j.jsx)("span",{children:a}),Object(j.jsx)("span",{children:n}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("i",{className:O()("fa fa-pencil  fa-flip-horizontal",{" fa-pencil-square-o":s}),"aria-hidden":"true",onClick:function(){return i(t,a,n)}}),Object(j.jsx)("i",{className:"fa fa-times",onClick:function(){return!s&&c(t)},"aria-hidden":"true"})]})]})},m=a(11),p=function(e){var t=e.tableData,a=e.handleRemove,n=e.handleEdit;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("div",{className:"titleResult",children:[Object(j.jsx)("span",{children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(j.jsx)("span",{children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(j.jsx)("span",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(j.jsx)("ul",{className:"resultList",children:t.length>0?t.map((function(e){var t=e.date,c=e.steps,i=e.id,s=e.edit;return Object(j.jsx)(h,{date:t,handleRemove:a,handleEdit:n,steps:c,id:i,edit:s},Object(m.a)())})):Object(j.jsx)("li",{className:"noData",children:"No data to display"})})]})},f=function(){var e=Object(n.useState)(new Date),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),s=Object(l.a)(i,2),o=s[0],O=s[1],h=Object(n.useState)(!1),m=Object(l.a)(h,2),f=m[0],v=m[1],x=Object(n.useState)([]),y=Object(l.a)(x,2),N=y[0],D=y[1],M=Object(u.a)(new Date(a),"dd-MM-yyyy");return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"title",children:"\u0423\u0447\u0451\u0442 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"}),Object(j.jsx)(b,{handleDate:function(e){var t=e.target.value;Object(u.a)(new Date(t),"dd-MM-yyyy")>Object(u.a)(new Date,"dd-MM-yyyy")?alert("\u0414\u0430\u0442\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u044b"):c(t)},handleSteps:function(e){var t=e.target;O(t.value)},handleSubmit:function(e){var t;if(e.preventDefault(),!(o<=0)&&a){var n=null===(t=N.find((function(e){return e.id===M})))||void 0===t?void 0:t.id;if(n&&!f)D(function(e){return N.reduce((function(t,a){return a.id===e?[].concat(Object(r.a)(t),[Object(d.a)(Object(d.a)({},a),{},{steps:Number(a.steps)+Number(o)})]):(a.edit=!1,[].concat(Object(r.a)(t),[a]))}),[])}(n));else if(f){var i=N.map((function(e){return e.id===n&&(e.steps=o,e.id=M,e.date=M,e.edit=!1),e}));D(i)}else D([].concat(Object(r.a)(N),[{id:M,date:M,steps:o}]));c(new Date),O(1),v(!1)}},date:a,steps:o,edit:f}),Object(j.jsx)(p,{handleEdit:function(e,t,a){c(Object(u.a)(new Date(t),"dd-MM-yyyy")),N.find((function(t){return t.id===e})).edit=!0,v(!0),O(a)},handleRemove:function(e){var t=N.filter((function(t){return t.id!==e}));D(t)},tableData:N,edit:f})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},4:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.7c484429.chunk.js.map