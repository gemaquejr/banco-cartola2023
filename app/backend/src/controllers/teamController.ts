import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
    constructor(private teamService = new TeamService()) {}

    async createTeam(req: Request, res: Response) {
        try {
            const teamData = req.body;
            const createdTeam = await this.teamService.createTeam(teamData);
            return res.status(201).json(createdTeam);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error creating team' });
        }
    }

    async getAllTeams(_req: Request, res: Response) {
        try {
            const teams = await this.teamService.getAllTeams();
            return res.status(200).json(teams);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving teams' });
        }
    }

    async getTeamById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const team = await this.teamService.getTeamById(Number(id));
            return res.status(200).json(team);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving team' });
        }
    }

    async updateTeamById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedTeamData = req.body;

            const team = await this.teamService.updateTeamById(Number(id), updatedTeamData);
            return res.status(200).json(team);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating team' });
        }
    }
}