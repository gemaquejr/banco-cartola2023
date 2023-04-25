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