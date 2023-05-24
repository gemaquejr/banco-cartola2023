import { Request, Response } from 'express';
import CoachService from '../services/coachService';

export default class CoachController {
    constructor(private coachService = new CoachService()) { }

    async createCoach(req: Request, res: Response) {
        const coachData = req.body;
        try {
            const createdCoach = await this.coachService.createCoach(coachData);
            return res.status(201).json(createdCoach);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error creating coach' });
        }
    }

    async getAllCoaches(_req: Request, res: Response) {
        try {
            const coaches = await this.coachService.getAllCoaches();
            return res.status(200).json(coaches);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving coaches' });
        }
    }

    async getCoachById(req: Request, res: Response) {
        const { id } = req.params;
        try {            
            const coach = await this.coachService.getCoachById(Number(id));
            return res.status(200).json(coach);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving coach' });
        }
    }

    async updateCoachById(req: Request, res: Response) {
        const { id } = req.params;
        const updatedCoachData = req.body;
        try {
            const coach = await this.coachService.updateCoachById(Number(id), updatedCoachData);
            return res.status(200).json(coach);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating coach' });
        }
    }

    async deleteCoachById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedCoach = await this.coachService.deleteCoachById(Number(id));
            return res.status(200).json(deletedCoach);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error deleting coach' });
        }
    }
}