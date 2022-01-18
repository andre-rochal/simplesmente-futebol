const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/:postid', function(req, res) {
    res.send({
        conteudo: "Gostei muito!",
        autor: "desconhecido"
    })
})

module.exports = router