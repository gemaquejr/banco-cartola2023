'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const matches = [
      {
        home_team: 'Remo',
        away_team: 'Paysandu',
        home_score: 4,
        away_score: 0,
        date: '22-04-2023',
        stadium: 'Mangueirão',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('matches', matches, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('matches', null, {});
  }
};