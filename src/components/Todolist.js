import React, { Component } from "react";
import Todo from "./Todo.js";

export default class Todolist extends Component {
  render() {
    const {
      todos,
      handleDelete,
      handleChange,
      handleEdit,
      handleConfirm,
    } = this.props;
    return todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        handleDelete={handleDelete}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleConfirm={handleConfirm}
      />
    ));
  }
}
