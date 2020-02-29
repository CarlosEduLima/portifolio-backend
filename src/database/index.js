const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/index.json')[env];
const AboutMe = require('./models/AboutMe');

let connection;
if(config.use_env_variable){
  connection = new Sequelize(process.env[config.use_env_variable], config);
}else{
  connection = new Sequelize(config.database, config.username, config.password, config);
}
AboutMe.init(connection);

module.exports = connection;