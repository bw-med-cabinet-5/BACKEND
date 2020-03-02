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
    return db('Users')
        .insert(user);
}

function getUsers() {
    return db('Users');
}

function findUserByEmail(email) {
    return db('Users')
        .where('email', email)
        .first();
}

function findUserByID(id) {
    return db('Users')
        .where('user_id', id)
        .first();
}

function updateUser(id, updateUser) {
    return db('Users')
        .where('user_id', id)
        .update(updateUser)
}

function getStrains() {
    return db('Strains');
}

function findStrain(id) {
    return db('Strains')
        .where('strain_id', id)
        .first();
}

function saveStrain(userID, strainID) {
    return db('Saved_Strains')
        .insert({
            user: userID,
            strain: strainID
        });
}

function getSavedStrains(userID) {
    return db.select('strain_id', 'strain_name', 'strain_type', 'strain_rating', 'strain_description', 'strain_positive_effect', 'strain_negative_effect', 'strain_medical_effect', 'strain_flavors')
        .from('Strains')
        .join('Saved_Strains', 'Strains.strain_id', 'Saved_Strains.strain')
        .where('user', userID);
}

function removeSavedStrain(userID, strainID) {
    return db('Saved_Strains')
        .where('user', userID)
        .where('strain', strainID)
        .del()
}