import { Request, Response } from 'express';
import PlayerService from '../services/playerService';

export default class PlayerController {
    constructor(private playerService = new PlayerService()) {}

    async createPlayer(req: Request, res: Response) {
        try {
            const playerData = req.body;
            const createdPlayer = await this.playerService.createPlayer(playerData);
            return res.status(201).json(createdPlayer);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error creating player' });
        }
    }
    
    async getAllPlayers(_req: Request, res: Response) {
        try {
            const players = await this.playerService.getAllPlayers();
            return res.status(200).json(players);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving players' });
        }
    }

    async getPlayerById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const player = await this.playerService.getPlayerById(Number(id));
            return res.status(200).json(player);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving player' });
        }
    }

    async updatePlayerById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedPlayerData = req.body;

            const player = await this.playerService.updatePlayerById(Number(id), updatedPlayerData);
            return res.status(200).json(player);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating player' });
        }
    }
}