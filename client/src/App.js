import React, { Component, Fragment } from "react";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <InputTodo />
          <ListTodos />
        </div>
      </Fragment>
    );
  }
}

export default App;
