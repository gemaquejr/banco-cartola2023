'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const coaches = [
      {
        name: 'Givanildo Oliveira',
        age: 52,
        club: 'Remo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Coaches', coaches, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Coaches', null, {});
  }
};