import { Op } from 'sequelize';
import Player from '../database/models/player';
import Team from '../database/models/team';

export default class PlayerService {
    public playerModel = Player;

    public async createPlayer(playerData: any) {
        const player = await this.playerModel.create(playerData)
        return player
    }

    public async getAllPlayers() {
        const result = await this.playerModel.findAll({
            include: [Team],
        });
        return result;
    }

    public async getPlayerById(playerId: number) {
        const player = await this.playerModel.findByPk(playerId, {
            include: [Team],
        });
        return player
    }

    public async getPlayersByTeam(teamId: number) {
        const team = await this.playerModel.findAll({
            where: {
                teamId: {
                  [Op.eq]: teamId,
                },
              },
              include: [Team],
            });
        return team;
    }
    
    public async updatePlayerById(playerId: number, playerData: any) {
        const player = await this.playerModel.findByPk(playerId);
        if (!player) {
          throw new Error('Player not found');
        }
        await player.update(playerData);
        return player;
    }

    public async deletePlayerById(playerId: number) {
        const player = await this.playerModel.findByPk(playerId);
        if (!player) {
          throw new Error('Player not found');
        }
        await player.destroy();
        return player;
    }
}