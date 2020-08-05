import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    editText: "",
  };

  componentDidMount() {
    this.setState({
      editText: this.props.todo.text,
    });
  }
  render() {
    const {
      todo,
      handleChange,
      handleDelete,
      handleEdit,
      handleConfirm,
    } = this.props;
    const { id } = todo;
    return (
      <div
        className={todo.checked ? "todo todo_done" : "todo"}
        data-id={todo.id}
      >
        <input
          id={"checkbox" + todo.id}
          className="todo__radio"
          type="checkbox"
          defaultChecked={todo.checked}
          onChange={handleChange.bind(this, id)}
        />
        <label htmlFor={"checkbox" + todo.id} className="label"></label>
        <div className="wrap">
          {todo.edit ? (
            <input
              className="edit"
              type="text"
              defaultValue={todo.text}
              onChange={(e) =>
                this.setState({
                  editText: e.target.value,
                })
              }
            />
          ) : (
            <p
              className={todo.checked ? "todo__text text_lined" : "todo__text"}
            >
              {todo.text}
            </p>
          )}
        </div>
        {todo.edit ? (
          <button
            className="todo__edit-button"
            onClick={handleConfirm.bind(this, id, this.state.editText)}
          >
            Confirm
          </button>
        ) : (
          <button
            className="todo__edit-button"
            onClick={handleEdit.bind(this, id)}
          >
            Edit
          </button>
        )}
        <button
          className="todo__delete-button"
          onClick={handleDelete.bind(this, id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
