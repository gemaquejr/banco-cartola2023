import { Router } from 'express';
import PlayerController from '../controllers/playerController';

const playerRouter = Router();

const playerController = new PlayerController();

playerRouter.get('/', (req, res) => playerController.getAllPlayers(req, res));

export default playerRouter;