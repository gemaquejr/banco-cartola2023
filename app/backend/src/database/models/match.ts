import { DataTypes, Model } from 'sequelize';
import db from '.';

import Round from './round';

class Match extends Model {
  public id!: number;
  public homeTeam!: string;
  public awayTeam!: string;
  public homeScore!: number;
  public awayScore!: number;
  public date!: string;
  public stadium!: string;
  public roundId!: number;

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
    stadium: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rounds',
        key: 'id'
      }
    }
}, {
underscored: true,
sequelize: db,
modelName: 'matches',
timestamps: false,
});

Match.belongsTo(Round, { foreignKey: 'round_id' });

export default Match;