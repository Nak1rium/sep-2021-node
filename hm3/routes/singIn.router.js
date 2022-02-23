const {Router} = require('express');
const singInController = require('../controllers/singIn.controller');
const isUserEmailValid = require('../middleware/is.user.email.valid');

const singInRouter = Router();

singInRouter.get('/', singInController.singInRender);

singInRouter.post('/',isUserEmailValid, singInController.singIn);

module.exports = singInRouter;