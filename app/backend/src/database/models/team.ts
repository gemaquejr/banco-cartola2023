import { DataTypes, Model } from 'sequelize';
import db from '.';

class Team extends Model {
  public id!: number;
  public teamName!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Team.init({
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'teams',
    timestamps: false,
  });

export default Team;