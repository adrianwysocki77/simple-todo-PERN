import React, { Component, Fragment } from "react";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import EditTodo from "./components/EditTodo";
import ListTodos from "./components/ListTodos";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <InputTodo />
          <EditTodo />
          <ListTodos />
        </div>
      </Fragment>
    );
  }
}

export default App;
