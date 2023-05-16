import { Op } from 'sequelize';
import Stadium from '../database/models/stadium';
import Team from '../database/models/team';

export default class StadiumService {
    public StadiumModel = Stadium;

    public async createStadium(stadiumData: any) {
        const stadium = await this.StadiumModel.create(stadiumData)
        return stadium
    }

    public async getAllStadiums() {
        const result = await this.StadiumModel.findAll({
            include: [Team],
        });
        return result;
    }

    public async getStadiumById(stadiumId: number) {
        const stadium = await this.StadiumModel.findByPk(stadiumId, {
            include: [Team],
        });
        return stadium
    }

    public async getStadiumsByTeam(teamId: number) {
        const team = await this.StadiumModel.findAll({
            where: {
                teamId: {
                  [Op.eq]: teamId,
                },
              },
              include: [Team],
            });
        return team;
    }

    public async updateStadiumById(stadiumId: number, stadiumData: any) {
        const stadium = await this.StadiumModel.findByPk(stadiumId);
        if (!stadium) {
          throw new Error('Stadium not found');
        }
        await stadium.update(stadiumData);
        return stadium;
      }

    public async deleteStadiumById(stadiumId: number) {
        const stadium = await this.StadiumModel.findByPk(stadiumId);
        if (!stadium) {
          throw new Error('Stadium not found');
        }
        await stadium.destroy();
        return stadium;
    }
}