const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/multer');

//controllers
const AboutMeController = require('./controllers/aboutMe');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/aboutme', AboutMeController.index);
routes.post('/aboutme', upload.single('filename'), AboutMeController.store);

module.exports = routes;