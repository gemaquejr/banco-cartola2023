'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {

    const team = await queryInterface.rawSelect('teams', {
      where: {
        team_name: 'Flamengo'
      }
    }, ['id']);

    const coaches = [
      {
        name: 'Jorge Luis Sampaoli Moya',
        age: 63,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('coaches', coaches, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('coaches', null, {});
  }
};