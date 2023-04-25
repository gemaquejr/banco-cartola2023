import { DataTypes, Model } from 'sequelize';
import db from '.';

class Player extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public club!: string;
  public position!: string;
  public starter!: string;

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
    club: {
      type: DataTypes.STRING(100),
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
}, {
underscored: true,
sequelize: db,
modelName: 'players',
timestamps: false,
});

export default Player;