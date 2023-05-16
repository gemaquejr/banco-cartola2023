'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('stadiums',
     [
      {
        stadium_name: 'Independência',
        team_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Arena MRV',
        team_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Arena da Baixada',
        team_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Arena Fonte Nova',
        team_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Nilton Santos',
        team_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Nabi Abi Chedid',
        team_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Neo Química Arena',
        team_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Major Antônio Couto Pereira',
        team_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Mineirão',
        team_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Arena Pantanal',
        team_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Maracanã',
        team_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Arena Castelão',
        team_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Serrinha',
        team_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Arena do Grêmio',
        team_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Alfredo Jaconi',
        team_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Beira-Rio',
        team_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Allianz Parque',
        team_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Vila Belmiro',
        team_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'Morumbi',
        team_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stadium_name: 'São Januário',
        team_id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('stadiums', null, {});
  }
};