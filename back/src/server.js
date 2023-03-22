const http = require("http");
const characters = require("./utils/data")

http.createServer((req, res) => {
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hola Mundo!");
    }
    if(url.includes('rickandmorty/character')) {   //Esto es lo mismo que poner barra al comienzo
        // console.log(url.split('/').at(-1)) //pop o at(-1)
        let id = url.split("/").at(-1);
        // let characterFilter = characters.filter(char => char.id === Number(id))
        let characterFilter = characters.find(char => char.id === Number(id))

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(characterFilter)); //Si fuese con filter pondriamos characterFilter[0]
    }

}).listen(3001, "localhost");