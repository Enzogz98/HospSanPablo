const express = require("express");

// ---- MODULOS ----//

const logger = require("morgan");
const compression = require ("compression");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express ();





app.use(bodyParser.json());
app.use(compression());
app.use(logger("dev")); 
app.use(cors())





app.get("/", (req, res) => {
    res.send("Welcome <br/> Franco CornejoWeb Dev<br> ");
});


app.listen(8000, () => {
    console.log("escuchando en el puerto",8000);
});