'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const rounds = [
      {
        number: 1,
        name: "Primeira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 2,
        name: "Segunda Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 3,
        name: "Terceira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 4,
        name: "Quarta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 5,
        name: "Quinta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 6,
        name: "Sexta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 7,
        name: "Sétima Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 8,
        name: "Oitava Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 9,
        name: "Nona Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 10,
        name: "Nona Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('rounds', rounds, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('rounds', null, {});
  }
};