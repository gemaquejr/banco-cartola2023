import { Request, Response } from 'express';
import StadiumService from '../services/stadiumService';

export default class StadiumController {
    constructor(private stadiumService = new StadiumService()) { }

    async createStadium(req: Request, res: Response) {
        try {
            const stadiumData = req.body;
            const createdStadium = await this.stadiumService.createStadium(stadiumData);
            return res.status(201).json(createdStadium);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error creating stadium' });
        }
    }

    async getAllStadiums(_req: Request, res: Response) {
        try {
            const stadiums = await this.stadiumService.getAllStadiums();
            return res.status(200).json(stadiums);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving stadiums' });
        }
    }

    async getStadiumById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const stadium = await this.stadiumService.getStadiumById(Number(id));
            return res.status(200).json(stadium);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving stadium' });
        }
    }

    async updateStadiumById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedStadiumData = req.body;

            const stadium = await this.stadiumService.updateStadiumById(Number(id), updatedStadiumData);
            return res.status(200).json(stadium);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating stadium' });
        }
    }

    async deleteStadiumById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedStadium = await this.stadiumService.deleteStadiumById(Number(id));
            return res.status(200).json(deletedStadium);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error deleting stadium' });
        }
    }
}