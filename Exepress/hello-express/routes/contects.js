const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("contects 이후 url");
});

router.get("/list", (req, res) => {
    res.send("contects list url");
});

module.exports = router;
