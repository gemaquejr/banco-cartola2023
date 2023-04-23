import { Request, Response } from 'express';
import PlayerService from '../services/playerService';

export default class PlayerController {
    constructor(private playerService = new PlayerService()) {}

    async getAllTeams(_req: Request, res: Response) {
        try {
            const players = await this.playerService.getAllPlayers();
            return res.status(200).json(players);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving players' });
        }
    }
}