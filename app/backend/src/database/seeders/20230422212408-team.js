'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const teams = [
      {
        teamName: 'Remo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teamName: 'Paysandu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teamName: 'Tuna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Teams', teams, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};