'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      raza: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.FLOAT
      },
      vacunado: {
        type: Sequelize.BOOLEAN
      },
      dueno: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Gatos');
  }
};