'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('matches', 'round_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'rounds',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('matches', 'round_id');
  }
};