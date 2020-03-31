const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/multer');
//controllers
const AboutMeController = require('./controllers/aboutMe');
const AboutPortifolio = require('./controllers/aboutPortifolio');
const ContactsController = require('./controllers/contacts');
const EducationController = require('./controllers/education');
const JobController = require('./controllers/jobs');
const SkillsController = require('./controllers/skills');
const AuthController = require('./controllers/auth');
const AdmController = require('./controllers/adm');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/aboutme/:id', AboutMeController.index);
routes.post('/aboutme', upload.single('filename'), AboutMeController.store);
routes.put('/aboutme/:id', AboutMeController.update);

routes.get('/aboutportifolio', AboutPortifolio.index);
routes.post('/aboutportifolio', AboutPortifolio.store);
routes.put('/aboutportifolio', AboutPortifolio.update);

routes.get('/contacts', ContactsController.index);
routes.post('/contact/:id', ContactsController.store);
routes.put('/contact/:id', ContactsController.update);
routes.delete('/contact/:id', ContactsController.delete);

routes.get('/education', EducationController.index);
routes.post('/education/:id', EducationController.store);
routes.put('/education/:id', EducationController.update);
routes.delete('/education/:id', EducationController.delete);

routes.get('/jobs', JobController.index);
routes.post('/job/:id', JobController.store);
routes.put('/job/:id', JobController.update);

routes.post('/auth', AuthController.authenticate);
routes.post('/new_adm', AdmController.store);

routes.get('/skills', SkillsController.index);
routes.post('/skill/:id', SkillsController.store);
routes.put('/skill/:id', SkillsController.update);
routes.delete('/skill/:id', SkillsController.delete);
module.exports = routes;