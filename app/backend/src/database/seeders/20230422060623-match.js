'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const matches = [
      {
        homeTeam: 'Remo',
        awayTeam: 'Paysandu',
        homeScore: 4,
        awayScore: 0,
        date: new Date(),
        stadium: 'Mangueirão',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Matches', matches, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Matches', null, {});
  }
};