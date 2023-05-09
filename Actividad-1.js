const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 2500;

app.get("/", (req, res) => {
    res.send("Servidor Corriendo!");
});

app.listen(port, () => {
    console.log(
        `se esta corriendo el servidor correctamente en el puerto: ${port}`
    );
});
