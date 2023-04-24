import { Router } from 'express';
import PlayerController from '../controllers/playerController';

const playerRouter = Router();

const playerController = new PlayerController();

playerRouter.post('/', (req, res) => playerController.createPlayer(req, res));
playerRouter.get('/', (req, res) => playerController.getAllPlayers(req, res));

export default playerRouter;