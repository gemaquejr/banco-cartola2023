import { Request, Response } from 'express';
import RoundService from '../services/roundService';

export default class RoundController {
    constructor(private roundService = new RoundService()) {}

    async getAllRounds(_req: Request, res: Response) {
        try {
            const rounds = await this.roundService.getAllRounds();
            return res.status(200).json(rounds);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving rounds' });
        }
    }
}