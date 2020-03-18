const { Model, DataTypes } = require('sequelize');

class Contacts extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: {
                    args: true,
                    msg: 'Contacts are required'
                },
                validate: {
                    notEmpty: {
                        msg: "Contacts can't be empty"
                    },
                }
            },
        }, {
            sequelize,
            modelName: 'Contacts',
            tableName:'contacts',
            freezeTableName: true
        })
    }
    static associate(models) {
        this.belongsTo(models.Carlos, { foreignKey: 'carlos_id', as: 'contacts' });
    }
};
module.exports = Contacts;