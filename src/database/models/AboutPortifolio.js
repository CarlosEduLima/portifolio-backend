const { Model, DataTypes } = require('sequelize');

class AboutPortifolio extends Model {
    static init(sequelize) {
        super.init({
            description: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: 'Description is required'
                },
                validate: { 
                    len: {
                    args: [30, 250],
                    msg: 'The description must have be between 30 and 250 characters'
                },
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