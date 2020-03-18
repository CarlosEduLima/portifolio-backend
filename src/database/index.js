const Sequelize = require('sequelize');
const env ='production';
const config = require(__dirname + '/config/index.json')[env];
const Carlos = require('./models/Carlos');
const AboutPortifolio = require('./models/AboutPortifolio');
const Contacts = require('./models/Contacts');
const Education = require('./models/Education');
const Jobs = require('./models/Jobs');
const Skills = require('./models/Skills');
let connection;
if(config.use_env_variable){
  connection = new Sequelize(process.env[config.use_env_variable], config);
}else{
  connection = new Sequelize(config.database, config.username, config.password, config);
}
Carlos.init(connection);
AboutPortifolio.init(connection);
Contacts.init(connection);
Education.init(connection);
Jobs.init(connection);
Skills.init(connection);

Carlos.associate(connection.models);
Education.associate(connection.models);
Jobs.associate(connection.models);
Skills.associate(connection.models);
module.exports = connection;