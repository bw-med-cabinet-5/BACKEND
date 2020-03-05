const db = require('./dbConfig');

module.exports = {
    insertUser,
    getUsers,
    findUserByEmail,
    findUserByID,
    updateUser,
    getStrains,
    findStrain,
    saveStrain,
    getSavedStrains,
    removeSavedStrain
}

function insertUser(user) {
    return db('users')
        .insert(user);
}

function getUsers() {
    return db('users');
}

function findUserByEmail(email) {
    return db('users')
        .where('email', email)
        .first();
}

function findUserByID(id) {
    return db('users')
        .where('user_id', id)
        .first();
}

function updateUser(id, updateUser) {
    return db('users')
        .where('user_id', id)
        .update(updateUser)
}

function getStrains() {
    return db('strains');
}

function findStrain(id) {
    return db('strains')
        .where('strain_id', id)
        .first();
}

function saveStrain(userID, strainID) {
    return db('saved_strains')
        .insert({
            user: userID,
            strain: strainID
        });
}

function getSavedStrains(userID) {
    return db.select('strain_id', 'name', 'race', 'description', 'positive', 'negative', 'medical', 'flavors')
        .from('strains')
        .join('saved_strains', 'strains.strain_id', 'saved_strains.strain')
        .where('user', userID);
}

function removeSavedStrain(userID, strainID) {
    return db('saved_strains')
        .where('user', userID)
        .where('strain', strainID)
        .del()
}