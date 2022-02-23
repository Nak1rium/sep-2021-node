const users = require("../db/users");

class singInController {
    singInRender(req, res) {
        res.render('singIn');
    }
    singIn(req,res) {
        const user = users.find(user => user.email === req.body.email && user.password === req.body.password);

        if (user) {
            res.redirect(`/users/${user.id}`);
            return
        }

        res.redirect('notFound');
    }
}

module.exports = new singInController();