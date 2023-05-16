'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('coaches',
     [
      {
        name: 'Vagner Carmo Mancini',
        age: 56,
        team_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eduardo Germán Coudet',
        age: 48,
        team_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paulo César Turra',
        age: 49,
        team_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Renato Manuel Alves Paiva',
        age: 53,
        team_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luís Manuel Ribeiro de Castro',
        age: 61,
        team_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pedro Miguel Faria Caixinha',
        age: 52,
        team_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fernando Lázaro Rodrigues Alves',
        age: 41,
        team_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'António José Cardoso de Oliveira',
        age: 40,
        team_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pedro Miguel Marques da Costa Filipe',
        age: 42,
        team_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ivo Ricardo Abreu Vieira',
        age: 47,
        team_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mário Jorge dos Santos Silva',
        age: 45,
        team_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fernando Diniz Silva',
        age: 49,
        team_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juan Pablo Vojvoda Rizzo',
        age: 48,
        team_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emerson Rodrigues Ávila',
        age: 55,
        team_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Renato Portaluppi',
        age: 60,
        team_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luiz Antônio Venker Menezes',
        age: 60,
        team_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Abel Fernando Moreira Ferreira',
        age: 44,
        team_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Odair Hellmann',
        age: 46,
        team_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rogério Mücke Ceni',
        age: 50,
        team_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maurício Nogueira Barbieri',
        age: 41,
        team_id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leomir de Souza',
        age: 61,
        team_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dorival Silvestre Júnior',
        age: 61,
        team_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jorge Luis Sampaoli Moya',
        age: 63,
        team_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alexi Stival',
        age: 59,
        team_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Danilo Gabriel de Andrade',
        age: 43,
        team_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vanderlei Luxemburgo da Silva',
        age: 71,
        team_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('coaches', null, {});
  }
};