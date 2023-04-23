import Round from '../database/models/round';

export default class RoundService {
    public roundModel = Round;

    public async getAllRounds() {
        const result = await this.roundModel.findAll();
        return result;
    }
}