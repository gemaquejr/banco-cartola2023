import { Request, Response } from 'express';
import RoundService from '../services/roundService';

export default class RoundController {
    constructor(private roundService = new RoundService()) {}

    async createRound(req: Request, res: Response) {
        try {
            const roundData = req.body;
            const createdRound = await this.roundService.createRound(roundData);
            return res.status(201).json(createdRound);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error creating round' });
        }
    }

    async getAllRounds(_req: Request, res: Response) {
        try {
            const rounds = await this.roundService.getAllRounds();
            return res.status(200).json(rounds);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving rounds' });
        }
    }

    async getRoundById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const round = await this.roundService.getRoundById(Number(id));
            return res.status(200).json(round);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving round' });
        }
    }

    async updateRoundById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedRoundData = req.body;

            const round = await this.roundService.updateRoundById(Number(id), updatedRoundData);
            return res.status(200).json(round);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating round' });
        }
    }

    async deleteRoundById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedRound = await this.roundService.deleteRoundById(Number(id));
            return res.status(200).json(deletedRound);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error deleting round' });
        }
    }
}