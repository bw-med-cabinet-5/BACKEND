const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const logger = require("../middleware/logger");

//routers 

const userRoutes = require("../users/user-router");

const strainRoutes = require("../strains/strains-router");
// const authenticate = require

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger)

server.use('/api/users', userRoutes);
server.use('/api/strains', strainRoutes);



server.get("/",  (req, res) => {
    res.send("<h1>rocket</h1>")
})



module.exports = server 