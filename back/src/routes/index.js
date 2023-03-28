const { Router } = require("express");
const router = Router();
let favorites = require("../utils/favs");
const getCharById = require("../controllers/getCharById");
const getCharByDetail = require("../controllers/getCharDetail");

router.get("/onsearch/:id", getCharById); //(req, res) => getCharById(); similar a esto!

router.get("/detail/:id", getCharByDetail);

router.get("/rickandmorty/fav", (req, res) => {
  if (favorites.length > 0) {
    res.status(200).json(favorites);
  } else {
    res.status(404).json({ error: "No hay personajes favoritos" });
  }
});

router.post("/rickandmorty/fav", (req, res) => {
  const character = req.body;
  if (character.name) {
    favorites.push(character);
    res.status(201).json(character);
  } else {
    res.status(404).json({ error: "no se agrego ningún personaje" });
  }
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const favFilter = favorites.filter((char) => char.id !== Number(id));
  if (favFilter.length !== favorites.length) {
    favorites = favFilter;
    return res.status(204).json({ success: true });
  }
  res.status(404).json({ error: "No se eliminó ningún personaje" });
});

module.exports = router;
