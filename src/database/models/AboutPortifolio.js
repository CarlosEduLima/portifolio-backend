const { Model, DataTypes } = require('sequelize');

class AboutPortifolio extends Model {
    static init(sequelize) {
        super.init({
            description: {
                type: DataTypes.TEXT,
                allowNull: {
                    args: false,
                    msg: 'Description is required'
                },
                validate: { 
                    notEmpty: {
                        msg: "Description can't be empty"
                    },
                }
            },
        }, {
            sequelize,
            modelName: 'AboutPortifolio',
            tableName:'about_portifolio',
            freezeTableName: true
        })
    }
};
module.exports = AboutPortifolio;