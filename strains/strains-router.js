const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../data/helper');
const restricted = require('../auth/restriction');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    db.getStrains()
        .then(strains => {
            const refractored = strains.map(strain => {
                return {
                    ...strain,
                    strain_effects: strain.strain_effects.split(','),
                    strain_flavors: strain.strain_flavors.split(',')
                }
            });
            res.send(refractored);
        });
});

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    db.findStrain(id)
        .then(strain => res.send(strain))
        .catch(() => res.status(404).json({message: 'Strain not found'}))
});

module.exports = router;
