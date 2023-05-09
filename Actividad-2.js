const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ejs = require("ejs");
const port = 2500;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

fs.appendFile("Electrodomesticos.js", "", () => {
    console.log("Saved!");
});

fs.mkdir("Electrodomesticos.js", (err, res) => {
    res.send("creado exitosamente");
});

app.get("/Electrodomesticos.js", (req, res) => {
    res.render("/Electrodomesticos.js", {
        electrodomesticos: [
            { tipo: "televisor", origen: "china", precio: 10000, stock: 12 }, //1
            { tipo: "plancha", origen: "arg", precio: 200, stock: 2 }, //2
            { tipo: "compu", origen: "china", precio: 50, stock: 10 }, //3
            { tipo: "celular", origen: "china", precio: 300, stock: 60 }, //4
            { tipo: "teclado", origen: "usa", precio: 200, stock: 9 }, //5
            { tipo: "mouse", origen: "usa", precio: 150, stock: 6 }, //6
            { tipo: "procesador", origen: "francia", precio: 670, stock: 25 }, //7
            { tipo: "monitor", origen: "china", precio: 3000, stock: 4 }, //8
            { tipo: "pelota", origen: "arg", precio: 100, stock: 1000 }, //9
            { tipo: "bicicleta", origen: "usada", precio: 5000, stock: 8 }, //10
        ],
    });
});

//ejemplo
app.get('/Electrodomesticos', (req,res) => {
    res.send("el electrodomestico es "+ electrodomesticos.tipo)
    res.send("su origen es "+ electrodomesticos.origen)
    res.send("su precio es de "+ electrodomesticos.precio + "pesos")
    res.send("tenemos en stock "+ electrodomesticos.stock+"productos")
})

app.listen(port, () => {
    console.log(
        `se esta corriendo el servidor correctamente en el puerto: ${port}`
    );
});