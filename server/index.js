const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 5000;

//midleware
app.use(cors());
app.use(express.json());

//Routes
//Create a ToDo
app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all ToDos
app.get("/todos", async(req, res) => {
    try {
        const getTodos = await pool.query("SELECT * FROM todo");

        res.json(getTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a ToDo
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const getTodoById = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(getTodoById.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Update a ToDo
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateToDo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json("ToDo With the ID: " + id + " was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//Delete a ToDo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteToDo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("ToDo With the ID: " + id + " was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(port, () => {
    console.log("Server has started on port: " + port)
});