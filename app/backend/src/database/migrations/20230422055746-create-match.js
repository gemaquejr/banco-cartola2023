'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      home_team: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      away_team: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      home_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      in_progress: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matches');
  }
};