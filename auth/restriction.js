const db = require('../data/helper');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    const {email, password} = req.headers;

    if(email && password) {
        db.findUserByEmail(email)
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({message: 'Invalid credentials'})
                }
            })
    } else {
        res.status(400).json({message: 'Please provide valid credentials'})
    }
};