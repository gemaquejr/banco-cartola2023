'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const teams = [
      {
        team_name: 'Remo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Paysandu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Tuna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('teams', teams, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('teams', null, {});
  }
};