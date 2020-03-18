const { Model, DataTypes } = require('sequelize');

class Education extends Model {
    static init(sequelize) {
        super.init({
            institution_name: {
                type: DataTypes.STRING,
                allowNull: {
                    args: true,
                    msg: 'Name of institution is required'
                },
                validate: {
                    notEmpty: {
                        msg: "The name can't be empty"
                    },
                }
            },
            course: {
                type: DataTypes.STRING,
                allowNull: {
                    args: true,
                    msg: 'Description is required'
                },
            },
            start: {
                type: DataTypes.INTEGER,
                 allowNull: {
                    args: true,
                    msg: 'Start date is required'
                },
            },
            end: {
                type: DataTypes.INTEGER,
                 allowNull: {
                    args: true,
                    msg: 'End date is required'
                },
            },
        }, {
            sequelize,
            modelName: 'Education',
            tableName:'education',
            freezeTableName: true
        })
    }
    static associate(models) {
        this.belongsTo(models.Carlos, { foreignKey: 'carlos_id', as: 'education' });
    }
};
module.exports = Education;