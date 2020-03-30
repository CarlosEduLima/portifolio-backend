const Sequelize = require('sequelize');
const config = require('./config/index');
const Carlos = require('./models/Carlos');
const Adm = require('./models/Adm');
const AboutPortifolio = require('./models/AboutPortifolio');
const Contacts = require('./models/Contacts');
const Education = require('./models/Education');
const Jobs = require('./models/Jobs');
const Skills = require('./models/Skills');

const connection = new Sequelize(config.database, config.username, config.password, config);

Carlos.init(connection);
Adm.init(connection);
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