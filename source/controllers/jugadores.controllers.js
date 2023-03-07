const getPlayer = (req, res) => {
  res.status(200).json({
    nombre: "Kevin Luciano",
    dorsal: 12,
    posicion: "Lateral",
    equipo: "UNID",
    estatura: 170,
    peso: 72,
    nacionalidad: "Mexicana",
  });
};

module.exports = { getPlayer };
