import React, { Component, Fragment, useEffect, useState } from "react";

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
              <tr>
                <td>{todo.description}</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
