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

    public async getRoundById(roundId: number) {
        const round = await this.roundModel.findByPk(roundId);
        return round
    }

    public async updateRoundById(roundId: number, roundData: any) {
        const round = await this.roundModel.findByPk(roundId);
        if (!round) {
          throw new Error('Round not found');
        }
        await round.update(roundData);
        return round;
    }
}