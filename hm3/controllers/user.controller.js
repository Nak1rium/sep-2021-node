let users = require("../db/users");

class userController {
    renderUsers(req,res) {
        res.render('users', {users});
    }

    getUserById(req,res) {
        const {id} = req.params;
        const user = users.find(user => user.id === +id);

        if (user) {
            res.render('user', {user});
            return
        }

        res.redirect('/notFound');
    }

    deleteUserById(req,res) {
        const {id} = req.params;
        users = users.filter(user => user.id !== +id);

        res.redirect('/users');
    }
}

module.exports = new userController();