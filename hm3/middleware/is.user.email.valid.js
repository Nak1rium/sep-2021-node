const users = require("../db/users");

function isUserEmailValid(req, res, next) {
    try {
        const {email} = req.body;

        const userEmail = users.find(user => user.email === email);

        if (!userEmail) {
            throw new Error('invalid email');
        }

        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isUserEmailValid;