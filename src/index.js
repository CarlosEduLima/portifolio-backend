require('dotenv').config()
const express = require('express');
const cors = require('cors');
require('./database');
//rotas
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});