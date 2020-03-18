'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carlos_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'carlos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      institution_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      course: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      start: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      end: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('education');
  }
};