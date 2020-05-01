const spicedPg = require("spiced-pg");

const db = spicedPg(
  process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/simpletodo"
);

exports.newTodo = function(description) {
  return db.query(
    `INSERT INTO todo (description)
        VALUES ($1) RETURNING *`,
    [description]
  );
};

exports.allTodos = function() {
  return db.query(`SELECT * FROM todo`);
};

exports.selectedTodo = function(id) {
  return db.query(`SELECT * FROM todo WHERE todo_id = $1`, [id]);
};

exports.updateTodo = function(description, id) {
  return db.query(
    `UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *`,
    [description, id]
  );
};

exports.deleteTodo = function(id) {
  return db.query(`DELETE FROM todo WHERE todo_id = $1 RETURNING *`, [id]);
};
