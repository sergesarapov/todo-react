import React, { Component } from "react";
import Todolist from "./components/Todolist.js";

export default class App extends Component {
  state = {
    todosReact: [],
    textInput: "",
  };

  componentDidMount() {
    if (window.localStorage.getItem("todosReact")) {
      this.setState({
        todosReact: JSON.parse(window.localStorage.getItem("todosReact")),
      });
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem(
      "todosReact",
      JSON.stringify(this.state.todosReact)
    );
  }

  handleChange = (id) => {
    this.setState({
      todosReact: [
        ...this.state.todosReact.map((todo) => {
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
      todosReact: [
        ...this.state.todosReact.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  handleEdit = (id) => {
    this.setState({
      todosReact: [
        ...this.state.todosReact.map((todo) => {
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
      todosReact: [
        ...this.state.todosReact.map((todo) => {
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
      id:
        this.state.todosReact.length === 0
          ? 0
          : this.state.todosReact[0].id + 1,
      text: this.state.textInput,
      checked: false,
    };
    this.setState({
      todosReact: [todo, ...this.state.todosReact],
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
        <section className="todosReact-container">
          <Todolist
            todosReact={this.state.todosReact}
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
