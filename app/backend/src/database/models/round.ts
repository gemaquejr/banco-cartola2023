import { DataTypes, Model } from 'sequelize';
import db from '.';

class Round extends Model {
  public id!: number;
  public number!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Round.init({
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
}, {
underscored: true,
sequelize: db,
modelName: 'rounds',
timestamps: false,
});

export default Round;