const axios = require("axios");
const { URL } = process.env;

const getCharById = (res, id) => {
  // axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  // .then((response) => response.data)
  //     .catch((err) => console.log(err.response.data));

  // fetch(`${URL}/character/${id}`)
  //   .then((response) => response.json())
    axios.get(`${URL}/character/${id}`)
  .then((response) => response.data)
    .then((data) => {
      console.log(data);
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
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(JSON.stringify(`${error}`));
    })
};

module.exports = getCharById;

// res.writeHead(200, {"Content-Type": "application/json"});
// res.end(JSON.stringify(characterFilter)); //Si fuese con filter pondriamos characterFilter[0]
