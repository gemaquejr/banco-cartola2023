import { DataTypes, Model } from 'sequelize';
import db from '.';

class Match extends Model {
  public id!: number;
  public homeTeam!: string;
  public awayTeam!: string;
  public homeScore!: number;
  public awayScore!: number;
  public date!: Date;
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
    homeTeam: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    homeScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
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