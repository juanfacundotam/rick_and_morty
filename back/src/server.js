const http = require("http")
const getCharById =require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")


const PORT = 3001

http.createServer((req, res) => {
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = url.split("/").at(-1);

    if(url.includes("onsearch")) {
        getCharById(res, id);
    }

    if(url.includes("detail")) {
        getCharDetail(res, id);
    }
    
}).listen(PORT, "localhost");



    // if(url === "/"){
    //     res.writeHead(200, {"Content-Type": "text/plain"});
    //     res.end("Hola Mundo!");
    //     getCharById(null,3);
    // }
    // if(url.includes('rickandmorty/character')) {   //Esto es lo mismo que poner barra al comienzo
    //     // console.log(url.split('/').at(-1)) //pop o at(-1)
    //     let id = url.split("/").at(-1);
    //     // let characterFilter = characters.filter(char => char.id === Number(id))
    //     let characterFilter = characters.find(char => char.id === Number(id))

    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     res.end(JSON.stringify(characterFilter)); //Si fuese con filter pondriamos characterFilter[0]
    // }
