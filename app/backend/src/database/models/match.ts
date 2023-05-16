import { DataTypes, Model } from 'sequelize';
import db from '.';

import Round from './round';
import Stadium from './stadium';

class Match extends Model {
  public id!: number;
  public homeTeam!: string;
  public awayTeam!: string;
  public homeScore!: number;
  public awayScore!: number;
  public date!: string;
  public roundId!: number;
  public stadiumId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Match.init({
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    home_team: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    away_team: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    home_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    away_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rounds',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    stadium_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stadiums',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
}, {
underscored: true,
sequelize: db,
modelName: 'matches',
timestamps: false,
});

Match.belongsTo(Round, { foreignKey: 'round_id' });
Match.belongsTo(Stadium, { foreignKey: 'stadium_id' });

export default Match;