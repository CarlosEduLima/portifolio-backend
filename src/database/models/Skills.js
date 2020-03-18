const { Model, DataTypes } = require('sequelize');

class Skills extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: 'Name of skill is required'
                },
                validate: {
                    notEmpty: {
                        msg: "The name can't be empty"
                    },
                }
            },
        }, {
            sequelize,
            modelName: 'Skills',
            tableName:'skills',
            freezeTableName: true
        })
    }
    static associate(models) {
        this.belongsTo(models.Carlos, { foreignKey: 'carlos_id', as: 'skills' });
    }
};
module.exports = Skills;