const axios = require("axios");
const { URL } = process.env;

const getCharById = (req, res) => {
  const { id } = req.params;
  console.log("entramos controller by Id");
  axios
    .get(`${URL}/character/${id}`)
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

      res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};

module.exports = getCharById;

// res.writeHead(200, {"Content-Type": "application/json"});
// res.end(JSON.stringify(characterFilter)); //Si fuese con filter pondriamos characterFilter[0]
