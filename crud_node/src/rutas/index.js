const express = require('express');
const rutas = express.Router();

const customerControler = require("../controllers/customerController");

//GET es lo que solicita el navegador del cliente
//rutas.get("/",(req,res) => {
//	res.send("Hola mundo Node");
//});

//
rutas.get("/", customerControler.list);
// rutas.post("/add", customerControler.save);
// rutas.get("/delete", customerControler.delete);
// rutas.get("/update/:id", customerControler.edit);
// rutas.post("/update/:id", customerControler.update);


module.exports = rutas;