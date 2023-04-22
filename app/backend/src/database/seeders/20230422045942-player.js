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
        lastScore: 19.50,
        minValueToIncrease: 2.30,
        soccerMatch: 'Time A x Time B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Players', players, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Players', null, {});
  }
};