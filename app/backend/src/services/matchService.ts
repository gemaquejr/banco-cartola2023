import { Op } from 'sequelize';
import Match from '../database/models/match';
import Round from '../database/models/round';

export default class MatchService {
  public matchModel = Match;

  public async createMatch(matchData: any) {
    const match = await this.matchModel.create(matchData)
    return match
  }

  public async getAllMatches() {
    const matches = await this.matchModel.findAll({
      include: [Round],
      order: [['date', 'ASC']],
    });
    return matches;
  }

  public async getMatchById(matchId: number) {
    const match = await this.matchModel.findByPk(matchId, {
      include: [Round],
    });
    return match
  }

  public async getMatchesByRound(roundId: number) {
    const matches = await this.matchModel.findAll({
      where: {
        roundId: {
          [Op.eq]: roundId,
        },
      },
      include: [Round],
    });
    return matches;
  }

  public async updateMatchById(matchId: number, matchData: any) {
    const match = await this.matchModel.findByPk(matchId);
    if (!match) {
      throw new Error('Match not found');
    }
    await match.update(matchData);
    return match;
  }

  public async deleteMatchById(matchId: number) {
    const match = await this.matchModel.findByPk(matchId);
    if (!match) {
      throw new Error('Match not found');
    }
    await match.destroy();
    return match;
  }
};