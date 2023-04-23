import { Request, Response } from 'express';
import MatchService from '../services/matchService';

export default class MatchController {
    constructor(private matchService = new MatchService()) {}

    async getAllMatches(_req: Request, res: Response) {
        try {
            const matches = await this.matchService.getAllMatches();
            return res.status(200).json(matches);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving matches' });
        }
    }
}