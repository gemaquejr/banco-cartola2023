import Coach from '../database/models/coach';

export default class CoachService {
    public coachModel = Coach;

    public async getAllCoaches() {
        const result = await this.coachModel.findAll();
        return result;
    }
}