'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Teams', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
       },
       teamName: {
        type: Sequelize.STRING,
        allowNull: false,
       },
    });  
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Teams');
  }
};