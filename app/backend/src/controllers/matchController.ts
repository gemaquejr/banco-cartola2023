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

    async getMatchById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const matches = await this.matchService.getMatchById(Number(id));
            return res.status(200).json(matches);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving matches' });
        }
    }

    async updateMatchById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedMatchData = req.body;

            const match = await this.matchService.updateMatchById(Number(id), updatedMatchData);
            return res.status(200).json(match);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating match' });
        }
    }

    async deleteMatchById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedMatch = await this.matchService.deleteMatchById(Number(id));
            return res.status(200).json(deletedMatch);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error deleting match' });
        }
    }
}