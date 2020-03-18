const { Model, DataTypes } = require('sequelize');

class Jobs extends Model {
    static init(sequelize) {
        super.init({
            company: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: 'company is required'
                },
                validate: {
                    notEmpty: {
                        msg: "Company name can't be empty"
                    },
                }
            },
            department: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: 'department is required'
                },
            },
            role: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: 'role is required'
                },
            }, start: {
                type: DataTypes.INTEGER,
                allowNull: {
                    args: false,
                    msg: 'date is required'
                },
            }, end: {
                type: DataTypes.INTEGER,
                allowNull: {
                    args: false,
                    msg: 'date is required'
                },
            },
        }, {
            sequelize,
            modelName: 'Jobs',
            tableName: 'jobs',
            freezeTableName: true
        })
    }
    static associate(models) {
        this.belongsTo(models.Carlos, { foreignKey: 'carlos_id', as: 'jobs' });
    }
};
module.exports = Jobs;