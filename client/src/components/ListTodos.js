import React, { Component, Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("/alltodos");
      const jsonData = await response.json();
      console.log(jsonData);
      setTodos(jsonData.reverse());
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`/todo/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "aplication/json" }
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <Fragment>
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
