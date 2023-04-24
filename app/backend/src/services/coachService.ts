import Coach from '../database/models/coach';

export default class CoachService {
    public coachModel = Coach;

    public async getAllCoaches() {
        const result = await this.coachModel.findAll();
        return result;
    }

    public async createCoach(coachData: any) {
        const coach = await this.coachModel.create(coachData)
        return coach
    }

    public async getCoachById(coachId: number) {
          const coach = await this.coachModel.findByPk(coachId);
          return coach
    }

    public async updateCoachById(coachId: number, coachData: any) {
          const coach = await this.coachModel.findByPk(coachId);
          if (!coach) {
            throw new Error('Coach not found');
        }
          await coach.update(coachData);
          return coach;
        }
    }