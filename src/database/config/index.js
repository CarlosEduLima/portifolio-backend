const production_enviroment = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}
const local_enviroment = {
    username: 'postgres',
    password: '',
    database: 'portifolio',
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    },
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}

module.exports = local_enviroment; 