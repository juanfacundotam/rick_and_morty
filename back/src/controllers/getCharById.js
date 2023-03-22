const axios = require("axios");

const getCharById = (res, id) => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/${id}`)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.response.data));

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { id, image, name, gender, species } = data;
      const character = {
        id: id,
        image: image,
        name: name,
        gender: gender,
        species: species,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })

    .catch((error) => {
        res.writeHead(500, { "Content-Type" : "text/plain"})
        res.end(`El personaje con id ${id} no fue encontrado`)
    });

  console.log("Desde la funcion getCharById", id);
};

module.exports = getCharById;

// res.writeHead(200, {"Content-Type": "application/json"});
// res.end(JSON.stringify(characterFilter)); //Si fuese con filter pondriamos characterFilter[0]
