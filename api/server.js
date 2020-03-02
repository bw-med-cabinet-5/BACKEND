const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const logger = require("../middleware/logger");

//routers 

const usersRouter = require("../users/user-router");
const loginRouter = require("../auth/login-router.js");
const registerRouter = require("../auth/register-router.js");

// const authenticate = require

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger)

server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);


server.get("/",  (req, res) => {
    res.send("<h1>rocket</h1>")
})


// server.use("/api/auth", authRouter)
// server.use("/api/strains", authenticate, strainsRouter)

module.exports = server 