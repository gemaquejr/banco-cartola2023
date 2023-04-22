import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class UserController {
    constructor(private teamService = new TeamService()) { }

    async getTeams(_req: Request, res: Response) {
        try {
            const teams = await this.teamService.getTeams();
            return res.status(200).json(teams);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving teams' });
        }
    }
}