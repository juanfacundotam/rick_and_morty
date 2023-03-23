const http = require("http");
require("dotenv").config();
const getCharById =require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");


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



