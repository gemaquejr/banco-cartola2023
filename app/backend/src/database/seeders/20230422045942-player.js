'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const players = [
      {
        name: 'Jogador 1',
        age: 25,
        club: 'Remo',
        position: 'Atacante',
        starter: true,
        value: 100.50,
        last_score: 19.50,
        min_value_to_increase: 2.30,
        soccer_match: 'Time A x Time B',
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