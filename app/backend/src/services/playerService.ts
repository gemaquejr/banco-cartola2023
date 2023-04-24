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
}