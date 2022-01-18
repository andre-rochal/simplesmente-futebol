//declarações
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express();

const port = config.port;

//configurações
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'))

app.listen(port, function(req, res){
    console.log(`Servidor rodandando em: http://localhost:${port}`);
})

//rotas
require('./src/rotes/indexController')(app);