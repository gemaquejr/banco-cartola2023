import Match from '../database/models/match';

export default class MatchService {
    public matchModel = Match;

    public async createMatch(matchData: any) {
        const match = await this.matchModel.create(matchData)
        return match
    }

    public async getAllMatches() {
        const matches = await this.matchModel.findAll();
        return matches;
    }

    public async getMatchById(matchId: number) {
        const match = await this.matchModel.findByPk(matchId);
        return match
    }

    public async updateMatchById(matchId: number, matchData: any) {
        const match = await this.matchModel.findByPk(matchId);
        if (!match) {
          throw new Error('Match not found');
        }
        await match.update(matchData);
        return match;
    }
}