import Player from '../database/models/player';

export default class PlayerService {
    public playerModel = Player;

    public async getAllPlayers() {
        const result = await this.playerModel.findAll();
        return result;
    }
}