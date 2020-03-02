const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const logger = require("../middleware/logger");

// const authenticate = require

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger)


server.get("/",  (req, res) => {
    res.send("<h1>rocket</h1>")
})


// server.use("/api/auth", authRouter)
// server.use("/api/strains", authenticate, strainsRouter)

module.exports = server 