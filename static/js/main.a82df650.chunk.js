(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(9),i=a.n(s),c=(a(18),a(13)),o=a(8),l=a(10),d=a(3),u=(a(19),a(23)),j=a(11),m=a(1),b=function(){return Object(m.jsxs)("form",{className:"search",children:[Object(m.jsx)("input",{type:"search",placeholder:"Search in tasks..."}),Object(m.jsx)("button",{className:"btn btn-search",type:"button",children:Object(m.jsx)(j.a,{})})]})},h=function(){return Object(m.jsx)("div",{className:"user-profile",children:Object(m.jsx)("img",{src:"./aang.jpeg",width:"50",height:"50",alt:"user avatar",className:"user-avatar"})})},g=a(6),O=a(12),k=function(e){var t=e.task,a=e.index,r=e.handleDragStart,n=e.deleteTask,s=t.priority.toLowerCase().replace(" ","-");return Object(m.jsxs)("div",{className:"task",draggable:"true",onDragStart:function(){return r(t.id,t.status)},children:[Object(m.jsxs)("div",{className:"task-header",children:[Object(m.jsx)("div",{className:"task-priority "+s,children:t.priority}),Object(m.jsx)("div",{className:"delete-icon",children:Object(m.jsx)(O.a,{onClick:function(){return n(t.id)},style:{color:"#b7bec7",fontSize:20}})})]}),Object(m.jsx)("div",{className:"task-content",children:t.text})]},a)},p=function(e){var t=e.name,a=e.value,r=e.label,n=e.setTaskPriority,s=(e.taskPriority,e.isChecked);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"radio",name:t,value:a,id:a,checked:s,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("label",{htmlFor:a,className:a+"-tag",children:r})]})},x=function(e){var t=e.column,a=e.index,r=e.tasks,n=e.showHide,s=e.open,i=e.addTask,c=e.userInput,o=e.setUserInput,l=e.setTaskPriority,d=(e.isChecked,e.taskPriority),u=e.hoveredColumnName,j=e.handleDragStart,b=e.handleOver,h=e.handleDrop,O=e.deleteTask;return Object(m.jsxs)("div",{className:"column "+t.name,style:{minHeight:u===t.name?150*(r.filter((function(e){return e.status===t.name})).length+1):75,borderColor:t.color},onDragOver:function(e){return b(e,t.name)},onDrop:function(e){return h(e,t.name)},children:[Object(m.jsxs)("h3",{className:"column-title",children:[t.title,0===a&&" \ud83d\ude80"]}),Object(m.jsx)("div",{className:"tasks-list",children:r.filter((function(e){return e.status===t.name})).map((function(e,t){return Object(m.jsx)(k,{index:t,task:e,deleteTask:O,handleDragStart:j},t)}))}),0===a&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("button",{className:"button button-link add-toggle",onClick:n,children:["Add task",s?Object(m.jsx)(g.a,{}):Object(m.jsx)(g.b,{})]}),s&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"priority-options",children:[Object(m.jsx)(p,{setTaskPriority:l,taskPriority:d,name:"priority",value:"low",label:"low",isChecked:"low"===d,onChange:function(){return l("low")}}),Object(m.jsx)(p,{setTaskPriority:l,taskPriority:d,name:"priority",value:"med",label:"medium",isChecked:"med"===d,onChange:function(){return l("med")}}),Object(m.jsx)(p,{setTaskPriority:l,taskPriority:d,name:"priority",value:"high",label:"high",isChecked:"high"===d,onChange:function(){return l("high")}})]}),Object(m.jsxs)("form",{className:"add-form",children:[Object(m.jsx)("textarea",{type:"text",placeholder:"Write your task",onChange:function(e){o(e.target.value)},value:c}),Object(m.jsx)("button",{type:"button",className:"button button-add",onClick:i,children:"Add"})]})]})]})]},t.name)},f=function(e){var t=e.columns,a=e.tasks,r=e.showHide,n=e.open,s=e.addTask,i=e.userInput,c=e.setUserInput,o=e.setTaskPriority,l=e.isChecked,d=e.taskPriority,u=e.draggingItemId,j=e.hoveredColumnName,b=e.setDraggingItemId,h=e.setHoveredColumnName,g=e.setDraggingStartedColumnName,O=e.draggingStartedColumnName,k=e.handleDragStart,p=e.handleOver,f=e.handleDrop,v=e.deleteTask;return Object(m.jsx)(m.Fragment,{children:t.map((function(e,t){return Object(m.jsx)(x,{column:e,index:t,tasks:a,showHide:r,open:n,addTask:s,userInput:i,setUserInput:c,setTaskPriority:o,isChecked:l,taskPriority:d,deleteTask:v,draggingItemId:u,hoveredColumnName:j,draggingStartedColumnName:O,setDraggingItemId:b,setHoveredColumnName:h,setDraggingStartedColumnName:g,handleDragStart:k,handleOver:p,handleDrop:f})}))})};var v=function(){var e,t=Object(r.useState)(!1),a=Object(d.a)(t,2),n=a[0],s=a[1];e=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[{id:1,text:"Project structure",priority:"High Priority",status:"backlog"},{id:2,text:"Visual implementation",priority:"Med Priority",status:"backlog"},{id:3,text:"Blog Component",priority:"Low Priority",status:"backlog"}];var i=function(e){localStorage.setItem("tasks",JSON.stringify(e))},j=Object(r.useState)(e),g=Object(d.a)(j,2),O=g[0],k=g[1],p=Object(r.useState)([{id:1,name:"backlog",title:"Backlog",color:"#c781ff"},{id:2,name:"in-progress",title:"In Progress",color:"#ff9985"},{id:3,name:"done",title:"Done",color:"#7ed492"}]),x=Object(d.a)(p,2),v=x[0],y=(x[1],Object(r.useState)(-1)),N=Object(d.a)(y,2),C=N[0],S=N[1],I=Object(r.useState)(""),D=Object(d.a)(I,2),P=D[0],T=D[1],w=Object(r.useState)(""),H=Object(d.a)(w,2),F=H[0],J=H[1],U=Object(r.useState)(),B=Object(d.a)(U,2),A=B[0],L=B[1],M=Object(r.useState)(""),z=Object(d.a)(M,2),E=z[0],V=z[1],W=Object(r.useState)(!1),q=Object(d.a)(W,2),G=q[0];return q[1],Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)("div",{className:"app-header",children:[Object(m.jsx)(b,{}),Object(m.jsx)(h,{})]}),Object(m.jsx)("div",{className:"app-content",children:Object(m.jsx)("div",{className:"board",children:Object(m.jsx)(f,{columns:v,tasks:O,showHide:function(){return s(!n)},open:n,userInput:A,setUserInput:L,addTask:function(e){if(e.preventDefault(),A&&E){var t={id:Object(u.a)(),text:A,priority:E+" priority",status:"backlog"},a=[].concat(Object(c.a)(O),[t]);k(a),L(""),V(""),i(a)}},setTaskPriority:V,isChecked:G,taskPriority:E,deleteTask:function(e){var t=O.filter((function(t){return t.id!==e}));k(t),i(t)},draggingItemId:C,hoveredColumnName:P,draggingStartedColumnName:F,setDraggingItemId:S,setHoveredColumnName:T,setDraggingStartedColumnName:J,handleDragStart:function(e,t){S(e),J(t)},handleOver:function(e,t){e.stopPropagation(),e.preventDefault(),t!==F&&T(t)},handleDrop:function(e,t){var a,r=[],n=Object(l.a)(O);try{for(n.s();!(a=n.n()).done;){var s=a.value;s.id===C?(console.log(t),r.push(Object(o.a)(Object(o.a)({},s),{},{status:t}))):r.push(s)}}catch(c){n.e(c)}finally{n.f()}k(r),T(""),i(r)}})})})]})};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a82df650.chunk.js.map