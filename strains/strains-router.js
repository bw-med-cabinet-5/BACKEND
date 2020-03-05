const express = require('express');
const db = require('../data/helper');
const restricted = require('../auth/restricted');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    db.getStrains()
        .then(strains => {
                res.json(strains)
        });
        
            
});


router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    db.findStrain(id)
        .then(strain => res.send(strain))
        .catch(() => res.status(404).json({message: 'Strain not found'}))
});

module.exports = router;
