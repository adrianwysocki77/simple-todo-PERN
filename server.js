const express = require("express");
const app = express();
const db = require("./sql/db");
const port = 5000;
const path = require("path");

app.use(express.json()); // req.body

//ROUTES//

//create a todo
app.post("/newtodo", async (req, res) => {
  const newTodo = req.body.description;

  try {
    db.newTodo(newTodo).then(result => {
      console.log(result.rows[0]);
      res.json(result.rows[0]);
    });
  } catch (err) {
    console.error(err.message);
  }
});
//get all todos

app.get("/alltodos", (req, res) => {
  db.allTodos().then(result => {
    res.json(result.rows);
  });
});

//get a todo
app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  db.selectedTodo(id)
    .then(result => {
      // console.log("1: ", result.rows);
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.log(err);
    });
});

//update a todo
app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  // console.log("description: ", description);
  // console.log("id: ", id);

  db.updateTodo(description, id)
    .then(result => {
      res.json("to do was updated");
    })
    .catch(err => {
      console.log(err);
    });
});

//delete a todo
app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  db.deleteTodo(id)
    .then(result => {
      console.log(result);
      res.json("successfully deleted!");
    })
    .catch(err => {
      console.log(err);
    });
});

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || port, () =>
  console.log(`Server running on port ${port}`)
);
