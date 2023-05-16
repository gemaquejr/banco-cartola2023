import { DataTypes, Model } from 'sequelize';
import db from '.';

import Team from './team';

class Stadium extends Model {
  public id!: number;
  public name!: string;
  public teamId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Stadium.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'stadiums',
  timestamps: false,
});

Stadium.belongsTo(Team, { foreignKey: 'team_id' });

export default Stadium;