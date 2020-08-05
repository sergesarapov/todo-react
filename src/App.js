import React, { Component } from "react";
import Todolist from "./components/Todolist.js";

export default class App extends Component {
  state = {
    todos: [],
    textInput: "",
  };

  componentDidMount() {
    if (window.localStorage.getItem("todos")) {
      this.setState({
        todos: JSON.parse(window.localStorage.getItem("todos")),
      });
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  handleChange = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.checked = !todo.checked;
          }
          return todo;
        }),
      ],
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  handleEdit = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.edit = true;
          }
          return todo;
        }),
      ],
    });
  };

  handleConfirm = (id, editText) => {
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.text = editText;
            todo.edit = false;
          }
          return todo;
        }),
      ],
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const todo = {
      id: this.state.todos.length === 0 ? 0 : this.state.todos[0].id + 1,
      text: this.state.textInput,
      checked: false,
    };
    this.setState({
      todos: [todo, ...this.state.todos],
      textInput: "",
    });
  };

  render() {
    return (
      <>
        <header className="header">
          <form>
            <label>Type your todo here: </label>
            <input
              className="text-to-add header__input"
              id="input"
              type="text"
              placeholder="Buy skunk essence"
              value={this.state.textInput}
              onChange={(e) => this.setState({ textInput: e.target.value })}
            ></input>
            <button
              onClick={this.handleAdd}
              type="submit"
              className="header__button"
            >
              Create
            </button>
          </form>
        </header>
        <section className="todos-container">
          <Todolist
            todos={this.state.todos}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleConfirm={this.handleConfirm}
          />
        </section>
      </>
    );
  }
}
