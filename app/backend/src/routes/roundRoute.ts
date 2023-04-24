import { Router } from 'express';
import RoundController from '../controllers/roundController';

const roundRouter = Router();

const roundController = new RoundController();

roundRouter.post('/', (req, res) => roundController.createRound(req, res));
roundRouter.get('/', (req, res) => roundController.getAllRounds(req, res));

export default roundRouter;