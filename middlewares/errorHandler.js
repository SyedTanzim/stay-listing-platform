const expressError = require('../errors/expressError')

module.exports = (err, req, res, next)=> {
    const {statusCode = 500, message = 'something went wrong'} = err
    res.status(statusCode).render('pages/error.ejs', {message});
}