const enviroment_test = {
    username: "nirujjhqggcltx",
    password:  "e309d1729ba7f5dae8ed723dd855906eaccceac7ba6d4134a7b669ceba2101f9",
    database: "d12li4kkg6ot5c",
    host: "ec2-35-168-54-239.compute-1.amazonaws.com",
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

module.exports = enviroment_test; 