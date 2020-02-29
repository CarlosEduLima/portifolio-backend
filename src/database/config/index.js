const enviroment_test = {
    username: 'yjultqjnzvmsrb',
    password: '14a70ee6938985acdd00de4519bd08919d25f9a3b405fd9fc577a7e4301c2b72',
    database: 'ddlpvp9s2lj6vc',
    host: 'ec2-174-129-33-147.compute-1.amazonaws.com',
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

const enviroment_local = {
    username: 'postgres',
    password: '',
    database: 'portifolio',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}

module.exports = process.env.PORT ? enviroment_test : enviroment_local