'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const rounds = [
      {
        number: 1,
        matches: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Rounds', rounds, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Rounds', null, {});
  }
};