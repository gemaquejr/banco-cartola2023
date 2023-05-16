import { DataTypes, Model } from 'sequelize';
import db from '.';

import Team from './team';

class Player extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public position!: string;
  public starter!: string;
  public teamId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Player.init({
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
    position: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    starter: {
      type: DataTypes.BOOLEAN,
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
modelName: 'players',
timestamps: false,
});

Player.belongsTo(Team, { foreignKey: 'team_id' });

export default Player;