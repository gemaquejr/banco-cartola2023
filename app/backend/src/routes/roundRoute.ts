import { Router } from 'express';
import RoundController from '../controllers/roundController';

const roundRouter = Router();

const roundController = new RoundController();

roundRouter.post('/', (req, res) => roundController.createRound(req, res));
roundRouter.get('/', (req, res) => roundController.getAllRounds(req, res));
roundRouter.get('/:id', (req, res) => roundController.getRoundById(req, res));
roundRouter.put('/:id', (req, res) => roundController.updateRoundById(req, res));
roundRouter.delete('/:id', (req, res) => roundController.deleteRoundById(req, res));

export default roundRouter;