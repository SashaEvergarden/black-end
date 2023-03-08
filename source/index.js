const express = require("express");
const app = express();
const port = 3000;
//Vamos a hacer algunas importaciones
const cors = require("cors");
require('dotenv').config()

//Middlewers
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido a la API",
    autor: "Kevin Luciano",
    version: "1.0.0",
  });
});

//Rutas de la API
app.use("/api/jugadores", require("./routes/jugadores.routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const{dbConnection }= require("./database/config");

dbConnection();