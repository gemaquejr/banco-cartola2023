'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const teams = [
      {
        team_name: 'América-MG',
        logo_name: 'america-mg.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Atlético-MG',
        logo_name: 'atletico-mg.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Atlético-PR',
        logo_name: 'atletico-pr.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Bahia',
        logo_name: 'bahia.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Botafogo',
        logo_name: 'botafogo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Bragantino',
        logo_name: 'bragantino.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Corinthians',
        logo_name: 'corinthians.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Coritiba',
        logo_name: 'coritiba.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Cruzeiro',
        logo_name: 'cruzeiro.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Cuiabá',
        logo_name: 'cuiaba.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Flamengo',
        logo_name: 'flamengo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Fluminense',
        logo_name: 'fluminense.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Fortaleza',
        logo_name: 'fortaleza.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Goiás',
        logo_name: 'goias.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Grêmio',
        logo_name: 'gremio.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Internacional',
        logo_name: 'internacional.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Palmeiras',
        logo_name: 'palmeiras.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Santos',
        logo_name: 'santos.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'São Paulo',
        logo_name: 'sao-paulo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        team_name: 'Vasco da Gama',
        logo_name: 'vasco.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('teams', teams, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('teams', null, {});
  }
};