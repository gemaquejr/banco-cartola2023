import Match from '../database/models/match';

export default class MatchService {
    public matchModel = Match;

    public async createMatch(matchData: any) {
        const match = await this.matchModel.create(matchData)
        return match
    }

    public async getAllMatches() {
        const result = await this.matchModel.findAll();
        return result;
    }

    public async getMatchById(coachId: number) {
        const match = await this.matchModel.findByPk(coachId);
        return match
    }
}