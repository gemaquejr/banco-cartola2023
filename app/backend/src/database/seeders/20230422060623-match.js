'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {

    const round = await queryInterface.rawSelect('rounds', {
      where: {
        name: 'Primeira Rodada'
      }
    }, ['id']);

    const matches = [
      {
        home_team: 'Flamengo',
        away_team: 'Fluminense',
        home_score: 4,
        away_score: 0,
        date: '22-04-2023',
        stadium: 'Maracanã',
        round_id: round,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        home_team: 'Grêmio',
        away_team: 'Internacional',
        home_score: 1,
        away_score: 0,
        date: '22-04-2023',
        stadium: 'Maracanã',
        round_id: round,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        home_team: 'Corinthians',
        away_team: 'Santos',
        home_score: 2,
        away_score: 0,
        date: '22-04-2023',
        stadium: 'Maracanã',
        round_id: round,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        home_team: 'Atlético-MG',
        away_team: 'Cruzeiro',
        home_score: 2,
        away_score: 1,
        date: '22-04-2023',
        stadium: 'Maracanã',
        round_id: round,
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