const {Router} = require('express');
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middleware/is.user.valid');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);

loginRouter.post('/',loginMiddleware, loginController.checkEmail);

module.exports = loginRouter;