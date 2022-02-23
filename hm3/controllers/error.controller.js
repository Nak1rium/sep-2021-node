class ErrorController {
    errorRender(req, res) {
        res.render('error');
    }
}

module.exports = new ErrorController();