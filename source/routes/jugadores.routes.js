const { Router } = require("express");
const { getPlayer } = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/kevin", getPlayer);

module.exports = router;
