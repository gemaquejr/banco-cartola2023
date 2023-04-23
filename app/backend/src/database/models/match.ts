import { DataTypes, Model } from 'sequelize';
import db from '.';

class Match extends Model {
  public id!: number;
  public homeTeam!: string;
  public awayTeam!: string;
  public homeScore!: number;
  public awayScore!: number;
  public date!: string;
  public stadium!: string;

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
}, {
underscored: true,
sequelize: db,
modelName: 'matches',
timestamps: false,
});

export default Match;