import { Router } from 'express';
import StadiumController from '../controllers/stadiumController';

const stadiumRouter = Router();

const stadiumController = new StadiumController();

stadiumRouter.post('/', (req, res) => stadiumController.createStadium(req, res));
stadiumRouter.get('/', (req, res) => stadiumController.getAllStadiums(req, res));
stadiumRouter.get('/:id', (req, res) => stadiumController.getStadiumById(req, res));
stadiumRouter.put('/:id', (req, res) => stadiumController.updateStadiumById(req, res));
stadiumRouter.delete('/:id', (req, res) => stadiumController.deleteStadiumById(req, res));

export default stadiumRouter;