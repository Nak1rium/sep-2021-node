let users = require("../db/users");

class loginController {
    renderLogin(req, res) {
        res.render('login');
    }
    checkEmail (req,res) {
        const user = users.find(user => user.email === req.body.email);

        if (user) {
            res.redirect('/error');
            return
        }

        users.push({...req.body, id: users.length + 1}) && res.redirect('/users');
    }
}

module.exports = new loginController();