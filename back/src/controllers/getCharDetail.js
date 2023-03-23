const { URL } = process.env;

const getCharDetail = (res, id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { image, name, gender, status, origin, species } = data;
      const character = {
        image: image,
        name: name,
        gender: gender,
        status: status,
        origin: origin,
        species: species,
      };
      //   image, name, gender, status, origin y species.
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`El personaje con id ${id} no fue encontrado`);
    });

  console.log("Desde la funcion getCharById", id);
};

module.exports = getCharDetail;
