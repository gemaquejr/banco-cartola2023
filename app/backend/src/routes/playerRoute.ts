import { Router } from 'express';
import PlayerController from '../controllers/playerController';

const playerRouter = Router();

const playerController = new PlayerController();

playerRouter.post('/', (req, res) => playerController.createPlayer(req, res));
playerRouter.get('/', (req, res) => playerController.getAllPlayers(req, res));
playerRouter.get('/:id', (req, res) => playerController.getPlayerById(req, res));
playerRouter.put('/:id', (req, res) => playerController.updatePlayerById(req, res));
playerRouter.delete('/:id', (req, res) => playerController.deletePlayerById(req, res));

export default playerRouter;