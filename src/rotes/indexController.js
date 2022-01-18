const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

module.exports = app => {
    app.use('/', router);
    app.use('/postagens', require('./postagensController'))
    app.use('/comentarios', require('./comentariosController'))
}