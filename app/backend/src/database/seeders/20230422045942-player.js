'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {

    const team = await queryInterface.rawSelect('teams', {
      where: {
        team_name: 'Remo'
      }
    }, ['id']);

    const players = [
      {
        name: 'Pedro Guilherme Abreu dos Santos',
        age: 25,
        position: 'Atacante',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gabriel Barbosa',
        age: 26,
        position: 'Atacante',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Giorgian Daniel De Arrascaeta Benedetti',
        age: 28,
        position: 'Meio campo',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Éverton Augusto de Barros Ribeiro',
        age: 34,
        position: 'Meio campo',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gerson Santos da Silva',
        age: 25,
        position: 'Meio campo',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thiago Maia Alencar',
        age: 26,
        position: 'Meio campo',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ayrton Lucas Dantas de Medeiros',
        age: 25,
        position: 'Lateral',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wesley Vinicius França Lima',
        age: 25,
        position: 'Lateral',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leonardo Pereira',
        age: 27,
        position: 'Zagueiro',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fabrício Bruno Soares de Faria',
        age: 27,
        position: 'Zagueiro',
        starter: true,
        team_id: team,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Matheus Cunha Queiroz',
        age: 21,
        position: 'Goleiro',
        starter: true,
        team_id: team,
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