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
        name: "Décima Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 11,
        name: "Décima Primeira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 12,
        name: "Décima Segunda Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 13,
        name: "Décima Terceira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 14,
        name: "Décima Quarta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 15,
        name: "Décima Quinta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 16,
        name: "Décima Sexta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 17,
        name: "Décima Sétima Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 18,
        name: "Décima Oitava Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 19,
        name: "Décima Nona Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 20,
        name: "Vigésima Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 21,
        name: "Vigésima Primeira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 22,
        name: "Vigésima Segunda Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 23,
        name: "Vigésima Terceira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 24,
        name: "Vigésima Quarta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 25,
        name: "Vigésima Quinta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 26,
        name: "Vigésima Sexta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 27,
        name: "Vigésima Sétima Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 28,
        name: "Vigésima Oitava Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 29,
        name: "Vigésima Nona Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 30,
        name: "Trigésima Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 31,
        name: "Trigésima Primeira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 32,
        name: "Trigésima Segunda Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 33,
        name: "Trigésima Terceira Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 34,
        name: "Trigésima Quarta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 35,
        name: "Trigésima Quinta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 36,
        name: "Trigésima Sexta Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 37,
        name: "Trigésima Sétima Rodada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 38,
        name: "Trigésima Oitava Rodada",
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