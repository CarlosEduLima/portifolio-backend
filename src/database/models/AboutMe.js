const { Model, DataTypes } = require('sequelize');

class AboutMe extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: 'Name is required'
                },
                validate: {
                    len: {
                        args: [4, 50],
                        msg: 'the name must have be between 4 and 5 caracters'
                    },
                    notEmpty: {
                        msg: "Name can't be empty"
                    },
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: 'Description is required'
                },
                validate: {
                    len: {
                        args: [30, 250],
                        msg: 'The name must have be between 30 and 250 characters'
                    },
                    notEmpty: {
                        msg: 'the description cannot be empty'
                    },
                }
            },
            profile_url: {
                type: DataTypes.STRING,
                allowNull: true
            },
        }, {
            sequelize,
            modelName: 'AboutMe',
            tableName:'about_me',
            freezeTableName: true
        })
    }
};
module.exports = AboutMe;