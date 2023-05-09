const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ejs = require("ejs");
const port = 2500;

app.get("/Actividad-4.js", (req, res) => {
    res.render("/crearProducto.ejs", {
        electrodomesticos[10]:push({tipo: "auto", origen: "china", precio: 100.000, stock: 65})
    });
});

app.listen(port, () => {
    console.log(
        `se esta corriendo el servidor correctamente en el puerto: ${port}`
    );
});