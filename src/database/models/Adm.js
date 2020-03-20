const { Model, DataTypes } = require('sequelize');

class Adm extends Model {
    static init(sequelize) {
        super.init({
            user_name: {
                type: DataTypes.STRING,
                allowNull:false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull:false
            },
        }, {
            sequelize,
            modelName: 'Adm',
            tableName:'adm',
            freezeTableName: true
        })
    }
};
module.exports = Adm;