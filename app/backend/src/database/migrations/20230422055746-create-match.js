'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      home_team: {
        type: Sequelize.STRING
      },
      away_team: {
        type: Sequelize.STRING
      },
      home_score: {
        type: Sequelize.INTEGER
      },
      away_score: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      round_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'rounds',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      stadium_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'stadiums',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matches');
  }
};