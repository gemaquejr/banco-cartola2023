'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {

    const team = await queryInterface.rawSelect('teams', {
      where: {
        team_name: 'Remo'
      }
    }, ['id']);

    const players = [
      {
        name: 'Jogador 1',
        age: 25,
        position: 'Atacante',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('players', players, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('players', null, {});
  }
};