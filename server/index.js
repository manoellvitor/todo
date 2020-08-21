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

        res.json(getTodos);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a ToDo

//Update a ToDo

//Delete a ToDo



app.listen(port, () => {
    console.log("Server has started on port: " + port)
});