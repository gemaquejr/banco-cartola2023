import { Op } from 'sequelize';
import Coach from '../database/models/coach';
import Team from '../database/models/team';

export default class CoachService {
    public coachModel = Coach;

    public async createCoach(coachData: any) {
        const coach = await this.coachModel.create(coachData)
        return coach
    }

    public async getAllCoaches() {
        const result = await this.coachModel.findAll({
            include: [Team],
        });
        return result;
    }

    public async getCoachById(coachId: number) {
        const coach = await this.coachModel.findByPk(coachId, {
            include: [Team],
        });
        return coach
    }

    public async getCoachesByTeam(teamId: number) {
        const team = await this.coachModel.findAll({
            where: {
                teamId: {
                  [Op.eq]: teamId,
                },
              },
              include: [Team],
            });
        return team;
    }

    public async updateCoachById(coachId: number, coachData: any) {
        const match = await this.coachModel.findByPk(coachId);
        if (!match) {
          throw new Error('Coach not found');
        }
        await match.update(coachData);
        return match;
      }

    public async deleteCoachById(coachId: number) {
        const coach = await this.coachModel.findByPk(coachId);
        if (!coach) {
          throw new Error('Coach not found');
        }
        await coach.destroy();
        return coach;
    }
}