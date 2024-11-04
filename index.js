require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 2904;
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("welcome to about page");
});

app.listen( PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
}); 