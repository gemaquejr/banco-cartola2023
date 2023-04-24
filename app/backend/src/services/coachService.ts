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
}