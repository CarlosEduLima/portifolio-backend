require('dotenv').config()
const express = require('express');
const cors = require('cors');
require('./database');
//rotas

const routes = require('./routes');
const app = express();
const server = require('http').Server(app);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

const port = process.env.PORT || 8080;

server.listen(port);