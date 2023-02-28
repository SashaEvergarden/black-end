const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/kevin", getPlayers);
router.post("/kevin", createPlayer);

module.exports = router;
