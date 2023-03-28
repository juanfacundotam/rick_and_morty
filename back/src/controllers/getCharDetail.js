const axios = require("axios");
const { URL } = process.env;

const getCharByDetail = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      const { id, image, name, gender, species, origin } = data;
      const character = {
        id: id,
        image: image,
        name: name,
        gender: gender,
        species: species,
        origin: origin,
      };

      res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).json(error.message)
    });
};

module.exports = getCharByDetail;