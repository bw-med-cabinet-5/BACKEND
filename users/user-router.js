const router = require("express");
const db = require('../data/helper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const restricted = require("../auth/restricted");


const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    db.insertUser(user)
        .then(saved => res.status(201).json(saved))
        .catch(error => res.status(500).json(error))
});

router.post('/login', (req, res) => {
    let {email, password} = req.body;

    db.findUserByEmail(email)
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.first_name}`,
                    token,
                    user: {
                        user_id: user.user_id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    }
                })
            } else {
                res.status(401).json({message: 'Incorrect email or password'})
            }
        })
        .catch(() => res.status(500).json({message: 'error occured'}))
});

router.put('/:id/email', restricted, (req, res) => {
    const id = req.params.id;

    if(req.body.email) {
        db.findUserByID(id)
            .then(user => {
                const updateUser = {
                    ...user,
                    email: req.body.email
                }
                db.updateUser(id, updateUser)
                    .then(() => res.sendStatus(204))
                    .catch(() => res.sendStatus(500));
            })
    } else {
        res.status(400).json({message: 'please provide an email to update with'});
    }
});

router.post('/:id/strains', restricted, (req, res) => {
    const id = req.params.id;

    if(req.body.strainID) {
        db.findStrain(req.body.strainID)
            .then(() => {
                db.saveStrain(id, req.body.strainID)
                    .then(() => res.sendStatus(201))
                    .catch(() => res.sendStatus(500));
            })
            .catch(() => res.sendStatus(404))
    } else {
        res.status(400).json({message: 'please provide strain id'})
    }
})

router.get('/:id/strains', restricted, (req, res) => {
    const id = req.params.id;

    db.getUsers(id)
        .then(() => {
            db.getSavedStrains(id)
                .then(strains => res.send(strains))
                .catch(() => res.sendStatus(500));
        })
        .catch(() => res.sendStatus(404));
})

router.delete('/:id/strains', restricted, (req, res) => {
    const id = req.params.id;

    db.getUsers(id)
        .then(() => {
            if(req.body.strainID) {
                db.removeSavedStrain(id, req.body.strainID)
                    .then(() => res.sendStatus(204))
                    .catch(() => res.sendStatus(500));
            } else {
                res.status(400).json({message: 'please provide strain id'})
            }
        })
        .catch(() => res.sendStatus(404));
})

function generateToken(user) {
    const payload = {
        subject: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name
    }

    const tokenSecret = process.env.JWT_SECRET || 'Keep it secret, keep it safe.';

    const options = {
        expiresIn: '1h',
    };

    return jwt.sign(payload, tokenSecret, options);
}

module.exports = router;