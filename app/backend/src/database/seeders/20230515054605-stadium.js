'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {

    const team = await queryInterface.rawSelect('teams', {
      where: {
        team_name: 'Flamengo'
      }
    }, ['id']);

    const stadiums = [
      {
        name: 'Independência',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arena MRV',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arena da Baixada',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arena Fonte Nova',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nilton Santos',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nabi Abi Chedid',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Neo Química Arena',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Major Antônio Couto Pereira',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mineirão',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arena Pantanal',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maracanã',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arena Castelão',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Serrinha',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arena do Grêmio',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beira-Rio',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Allianz Parque',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Morumbi',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'São Januário',
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('stadiums', stadiums, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('stadiums', null, {});
  }
};