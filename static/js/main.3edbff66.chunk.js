(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),d=a(7),i=a.n(d),c=a(5),l=a(1),r=a(2),s=a(3),u=a(4),h=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return(t=e.call.apply(e,[this].concat(o))).state={editText:""},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({editText:this.props.todo.text})}},{key:"render",value:function(){var t=this,e=this.props,a=e.todo,n=e.handleChange,d=e.handleDelete,i=e.handleEdit,c=e.handleConfirm,l=a.id;return o.a.createElement("div",{className:a.checked?"todo todo_done":"todo","data-id":a.id},o.a.createElement("input",{id:"checkbox"+a.id,className:"todo__radio",type:"checkbox",defaultChecked:a.checked,onChange:n.bind(this,l)}),o.a.createElement("label",{htmlFor:"checkbox"+a.id,className:"label"}),o.a.createElement("div",{className:"wrap"},a.edit?o.a.createElement("input",{className:"edit",type:"text",defaultValue:a.text,onChange:function(e){return t.setState({editText:e.target.value})}}):o.a.createElement("p",{className:a.checked?"todo__text text_lined":"todo__text"},a.text)),a.edit?o.a.createElement("button",{className:"todo__edit-button",onClick:c.bind(this,l,this.state.editText)},"Confirm"):o.a.createElement("button",{className:"todo__edit-button",onClick:i.bind(this,l)},"Edit"),o.a.createElement("button",{className:"todo__delete-button",onClick:d.bind(this,l)},"Delete"))}}]),a}(n.Component),m=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var t=this.props,e=t.todos,a=t.handleDelete,n=t.handleChange,d=t.handleEdit,i=t.handleConfirm;return e.map((function(t){return o.a.createElement(h,{key:t.id,todo:t,handleDelete:a,handleChange:n,handleEdit:d,handleConfirm:i})}))}}]),a}(n.Component),p=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return(t=e.call.apply(e,[this].concat(o))).state={todos:[],textInput:""},t.handleChange=function(e){t.setState({todos:Object(c.a)(t.state.todos.map((function(t){return t.id===e&&(t.checked=!t.checked),t})))})},t.handleDelete=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.handleEdit=function(e){t.setState({todos:Object(c.a)(t.state.todos.map((function(t){return t.id===e&&(t.edit=!0),t})))})},t.handleConfirm=function(e,a){t.setState({todos:Object(c.a)(t.state.todos.map((function(t){return t.id===e&&(t.text=a,t.edit=!1),t})))})},t.handleAdd=function(e){e.preventDefault();var a={id:0===t.state.todos.length?0:t.state.todos[0].id+1,text:t.state.textInput,checked:!1};t.setState({todos:[a].concat(Object(c.a)(t.state.todos)),textInput:""})},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){window.localStorage.getItem("todos")&&this.setState({todos:JSON.parse(window.localStorage.getItem("todos"))})}},{key:"componentDidUpdate",value:function(){window.localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("form",null,o.a.createElement("label",null,"Type your todo here: "),o.a.createElement("input",{className:"text-to-add header__input",id:"input",type:"text",placeholder:"Buy skunk essence",value:this.state.textInput,onChange:function(e){return t.setState({textInput:e.target.value})}}),o.a.createElement("button",{onClick:this.handleAdd,type:"submit",className:"header__button"},"Create"))),o.a.createElement("section",{className:"todos-container"},o.a.createElement(m,{todos:this.state.todos,handleChange:this.handleChange,handleDelete:this.handleDelete,handleEdit:this.handleEdit,handleConfirm:this.handleConfirm})))}}]),a}(n.Component),f=(a(13),document.getElementById("root"));i.a.render(o.a.createElement(p,null),f)},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3edbff66.chunk.js.map