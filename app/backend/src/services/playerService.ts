import Player from '../database/models/player';

export default class PlayerService {
    public playerModel = Player;

    public async createPlayer(playerData: any) {
        const player = await this.playerModel.create(playerData)
        return player
    }

    public async getAllPlayers() {
        const result = await this.playerModel.findAll();
        return result;
    }

    public async getPlayerById(playerId: number) {
        const player = await this.playerModel.findByPk(playerId);
        return player
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