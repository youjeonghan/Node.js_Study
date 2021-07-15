const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello express");
});

app.get("/test", (req, res) => {
    res.send("test express!");
});

app.listen(port, () => {
    console.log("express listening on port", port);
});
