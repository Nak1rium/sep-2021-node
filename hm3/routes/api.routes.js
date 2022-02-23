const { Router } = require('express');
const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const singInRouter = require('./singIn.router');
const errorRouter = require('./error.routes');

const routes = Router();

routes.use('/users',userRouter);
routes.use('/login',loginRouter);
routes.use('/singIn',singInRouter);
routes.use('/error',errorRouter);
routes.use((req, res) => {
    res.render('notFound');
});


module.exports = routes;