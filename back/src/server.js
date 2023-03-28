const express = require("express");
const server = express();
require("dotenv").config();
const morgan = require("morgan");
const router = require("./routes/index");
const cors = require("cors");
const PORT = 3001;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/", router);

server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
})
