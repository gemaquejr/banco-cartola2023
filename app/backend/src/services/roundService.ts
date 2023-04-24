import Round from '../database/models/round';

export default class RoundService {
    public roundModel = Round;

    public async createRound(roundData: any) {
        const round = await this.roundModel.create(roundData)
        return round
    }

    public async getAllRounds() {
        const result = await this.roundModel.findAll();
        return result;
    }
}