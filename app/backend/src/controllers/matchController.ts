import { Request, Response } from 'express';
import MatchService from '../services/matchService';

export default class MatchController {
    constructor(private matchService = new MatchService()) {}

    async createMatch(req: Request, res: Response) {
        try {
            const matchData = req.body;
            const createdMatch = await this.matchService.createMatch(matchData);
            return res.status(201).json(createdMatch);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error creating match' });
        }
    }

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