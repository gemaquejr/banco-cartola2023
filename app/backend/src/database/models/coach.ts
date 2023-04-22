import { DataTypes, Model } from 'sequelize';
import db from '.';

class Coach extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public club!: string;

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
    club: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
}, {
underscored: true,
sequelize: db,
modelName: 'coach',
timestamps: false,
});

export default Coach;