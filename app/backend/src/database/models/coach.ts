import { DataTypes, Model } from 'sequelize';
import db from '.';

import Team from './team';

class Coach extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public teamId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Coach.init({
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
}, {
underscored: true,
sequelize: db,
modelName: 'coaches',
timestamps: false,
});

Coach.belongsTo(Team, { foreignKey: 'team_id' });

export default Coach;