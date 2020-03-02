module.exports = {
    validateUser
};

function validateUser(user) {
    let errors = [];

    if(!user.email || user.email.length < 2) {
        errors.push("email must be greater than 2 characters")
    }
    if(!user.password || user.password.length < 4) {
        errors.push("Password must contain at least 4 characters")
    }

    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    };
}