const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

//midleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("Server has started on port: " + port)
});