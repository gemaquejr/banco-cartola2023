import Match from '../database/models/match';

export default class MatchService {
    public matchModel = Match;

    public async getAllMatches() {
        const result = await this.matchModel.findAll();
        return result;
    }
}