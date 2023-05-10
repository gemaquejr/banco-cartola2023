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
    ];

    await queryInterface.bulkInsert('rounds', rounds, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('rounds', null, {});
  }
};