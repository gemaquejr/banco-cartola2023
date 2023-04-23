import { Request, Response } from 'express';
import CoachService from '../services/coachService';

export default class CoachController {
    constructor(private coachService = new CoachService()) {}

    async getAllCoaches(_req: Request, res: Response) {
        try {
            const coaches = await this.coachService.getAllCoaches();
            return res.status(200).json(coaches);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving coaches' });
        }
    }
}