'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('players', 'team_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('players', 'team_id');
  }
};