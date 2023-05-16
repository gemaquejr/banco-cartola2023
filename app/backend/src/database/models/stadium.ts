import { DataTypes, Model } from 'sequelize';
import db from '.';

import Team from './team';

class Stadium extends Model {
  public id!: number;
  public stadiumName!: string;
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
  stadium_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'stadiums',
  timestamps: false,
});

Stadium.belongsTo(Team, { foreignKey: 'team_id' });

export default Stadium;