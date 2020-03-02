const router = require("express").Router();

const Users = require("./user-model.js");

const restricted = require("../auth/restriction");

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => res.send(err))
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    if(!id) {
        res.status(404).json({message: "The user with the specified id does not exist"})
    } else {
        Users.findById(id)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({message: "The user information could not be retrieved, we failed you"})
        })
    }
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.status(404).json({message: "The user with the specidied ID does not exist."})
    }
    Users.remove(id)
    .then( user => {
        res.json(user)
    })
    .catch( err => {
        res.status(500).json({ message: "The user could not be removed, we failed you"})
    })
})

module.exports = router;