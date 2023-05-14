import { DataTypes, Model } from 'sequelize';
import db from '.';

import Stadium from './stadium';

class Team extends Model {
  public id!: number;
  public teamName!: string;
  public logoName!: string;
  public stadiumId!: string;

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
    logo_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stadium_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'teams',
    timestamps: false,
  });

  Team.belongsTo(Stadium, { foreignKey: 'stadium_id' });

export default Team;