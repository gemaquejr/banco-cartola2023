import { Op } from 'sequelize';
import Match from '../database/models/match';
import Round from '../database/models/round';
import Stadium from '../database/models/stadium';

export default class MatchService {
  public matchModel = Match;

  public async createMatch(matchData: any) {
    const match = await this.matchModel.create(matchData)
    return match
  }

  public async getAllMatches() {
    const matches = await this.matchModel.findAll({
      include: [Round, Stadium],
      order: [['round_id', 'ASC']],
    });
    return matches;
  }

  public async getMatchById(matchId: number) {
    const match = await this.matchModel.findByPk(matchId, {
      include: [Round, Stadium],
    });
    return match
  }

  public async getMatchesByRound(roundId: number, stadiumId: number) {
    const matches = await this.matchModel.findAll({
      where: {
        roundId: {
          [Op.eq]: roundId, stadiumId,
        },
      },
      include: [Round, Stadium],
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