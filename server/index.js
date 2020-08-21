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
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)",[description]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all ToDos


//Get a ToDo

//Update a ToDo

//Delete a ToDo



app.listen(port, () => {
    console.log("Server has started on port: " + port)
});