(this.webpackJsonptask_manager=this.webpackJsonptask_manager||[]).push([[0],{20:function(e,t,a){e.exports=a(42)},25:function(e,t,a){},26:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(16),o=a.n(s),i=(a(25),a(5)),l=a(6),c=a(8),u=a(7),d=(a(26),a(17)),m=a.n(d).a.initializeApp({apiKey:"AIzaSyCIQ3hVMLk7CC-RJYMsDOuhPZF1VNMYI7o",authDomain:"task-manager-1a3cb.firebaseapp.com",databaseURL:"https://task-manager-1a3cb.firebaseio.com",projectId:"task-manager-1a3cb",storageBucket:"task-manager-1a3cb.appspot.com",messagingSenderId:"603956923046",appId:"1:603956923046:web:de8e9ab7bbb307ffb68267"}),h=a(12),p=(a(37),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).logIn=function(t){t.preventDefault(),m.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(e){})).catch((function(t){e.state.email="",e.state.password="",e.setState({errMessage:{display:"block",color:"red",fontSize:"18px"},border:"2px solid red"})}))},e.singUp=function(t){t.preventDefault(),m.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(e){})).catch((function(t){e.state.email="",e.state.password="",e.setState({errMessage:{display:"block",color:"red",fontSize:"18px"},border:"2px solid red"})}))},e.inputChanges=function(t){e.setState(Object(h.a)({},t.target.name,"".concat(t.target.value))),localStorage.setItem("name","".concat(e.state.email))},e.state={email:"",password:"",border:"2px solid transparent",errMessage:{display:"none"}},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"box"},r.a.createElement("form",null,r.a.createElement("p",{id:"label"},"  Log In  "),r.a.createElement("input",{name:"email",type:"email",placeholder:" Email...",id:"email",value:this.state.email,style:{border:this.state.border},onChange:this.inputChanges}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password...",id:"password",style:{border:this.state.border},onChange:this.inputChanges,value:this.state.password}),r.a.createElement("p",{id:"errLogin",style:this.state.errMessage},"  Your email or password is incorect !!!"),r.a.createElement("div",{id:"logBtn_wrapper"},r.a.createElement("button",{id:"btn-singIn",onClick:this.logIn}," LogIn "),r.a.createElement("button",{id:"btn-singUp",onClick:this.singUp}," SingUp "))))}}]),a}(r.a.Component)),g=a(19),f=(a(38),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({modalStyle:"block"})},n.closeModal=function(){n.setState({modalStyle:"none",newTask:""})},n.newTask=function(e){n.setState({newTask:e.target.value})},n.addTaskToFolder=function(){n.props.add(n.state.newTask),n.closeModal()},n.state={modalStyle:"none",newTask:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{id:"taskAdd",onClick:this.showModal},"Add new task "),r.a.createElement("div",{id:"modalB_graund",style:{display:this.state.modalStyle}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{id:"close",onClick:this.closeModal},"\xd7 "),r.a.createElement("textarea",{id:"txt",placeholder:"Add your task...",onChange:this.newTask,value:this.state.newTask}),this.state.newTask?r.a.createElement("a",{href:"#",onClick:this.addTaskToFolder,id:"modalBtn"}," add "):r.a.createElement("p",{id:"errorMessage"}," Your task is empty... "))))}}]),a}(r.a.Component)),k=(a(39),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).logOut=function(){m.auth().signOut().then((function(){})).catch((function(e){console.log(e)})),localStorage.setItem("name",null)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.author;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("p",null,"Task Manager"),r.a.createElement("div",{className:"userBlock"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/reviewer-male--v1.png",alt:"user icon"}),r.a.createElement("button",null," ",e,"  "),r.a.createElement("button",{onClick:this.logOut}," LogOut  "))),r.a.createElement("span",{id:"line"}," "))}}]),a}(r.a.Component)),b=a(18),v=(a(40),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeName=function(e){n.setState({newName:e.target.value})},n.startEditing=function(e){var t=e.id,a=e.text;n.setState({newName:a,editingElementId:t})},n.finishEditing=function(){if(null!==n.state.newName){var e=n.state.newName,t=n.props.taskFolder.map((function(t){return t.id===n.state.editingElementId?Object(b.a)({},t,{text:e}):t}));n.props.updateTasks(t),n.setState((function(e){return{newName:null,editingElementId:null}}))}},n.state={editingElementId:null,newName:null},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.taskFolder,n=t.removeTask;return r.a.createElement("section",null,r.a.createElement("div",{id:"taskWrapper"},a.map((function(t){return r.a.createElement("div",{className:"taskCard",key:t.id},r.a.createElement("div",null," ",e.state.editingElementId===t.id?r.a.createElement("textarea",{id:"changeText",onBlur:e.finishEditing,onChange:e.changeName,value:e.state.newName}):r.a.createElement("p",{className:"editTask",onClick:function(){return e.startEditing(t)}}," ",t.text," ")," "),r.a.createElement("span",{className:"uathor"},t.author),r.a.createElement("div",{className:"btnCardBlock"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/filled-message.png",alt:"mail icon"}),r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/multiply.png",alt:"close icon",onClick:function(){n(t)}})))}))))}}]),a}(r.a.Component)),E=(a(41),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).addTaskToFolder=function(t){var a={text:t,author:e.state.author,id:+"".concat(Math.floor(1e3*Math.random()))},n=[].concat(Object(g.a)(e.state.taskFolder),[a]);e.setState({taskFolder:n}),localStorage.setItem("task",JSON.stringify(n))},e.getFromStorageTasks=function(){var t=localStorage.getItem("task");null!==t&&e.setState({taskFolder:JSON.parse(t)})},e.removeTask=function(t){var a=e.state.taskFolder.filter((function(e){return e.id!==t.id}));localStorage.setItem("task",JSON.stringify(a)),e.setState({taskFolder:a})},e.updateTasks=function(t){localStorage.setItem("task",JSON.stringify(t)),e.setState({taskFolder:t})},e.state={taskFolder:[],author:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("name"),t=e?e.slice(0,e.indexOf("@")):"";this.setState({author:t}),this.getFromStorageTasks()}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement(f,{add:this.addTaskToFolder}),r.a.createElement(k,{author:this.state.author}),r.a.createElement(v,{taskFolder:this.state.taskFolder,updateTasks:this.updateTasks,removeTask:this.removeTask}))}}]),a}(r.a.Component)),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).authListener=function(){m.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))},e.state={user:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},null!==this.state.user?r.a.createElement(E,null):r.a.createElement(p,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.c05bbfc8.chunk.js.map