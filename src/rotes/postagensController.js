const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', function(req, res) {
    res.send({
        title: "cruzeirao",
        conteudo: "melhor do brasil é o cruzeiro",
        autor: "andre"
    })
})

module.exports = router