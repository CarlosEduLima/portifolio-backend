const { Model, DataTypes } = require('sequelize');

class Carlos extends Model {
    static init(sequelize) {
        super.init({
            address: {
                type: DataTypes.STRING,
                allowNull: {
                    args: true,
                    msg: 'Address is required'
                },
                validate: {
                    notEmpty: {
                        msg: "Address can't be empty"
                    },
                }
            },
            about_me: {
                type: DataTypes.TEXT,
                allowNull: {
                    args: false,
                    msg: 'Description is required'
                },
                validate: {
                    notEmpty: {
                        msg: 'the description cannot be empty'
                    },
                }
            },
            img_url: {
                type: DataTypes.STRING,
                allowNull: true
            },
        }, {
            sequelize,
            modelName: 'Carlos',
            tableName:'carlos',
            freezeTableName: true
        })
    }
    static associate(models) {
        this.hasMany(models.Education, { foreignKey: 'carlos_id', as: 'education' });
        this.hasMany(models.Skills, { foreignKey: 'carlos_id', as: 'skills' });
        this.hasMany(models.Contacts, { foreignKey: 'carlos_id', as: 'contacts' });
        this.hasMany(models.Jobs, { foreignKey: 'carlos_id', as: 'jobs' });
    }
};
module.exports = Carlos;