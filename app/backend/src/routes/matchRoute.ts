import { Router } from 'express';
import MatchController from '../controllers/matchController';

const matchRouter = Router();

const matchController = new MatchController();

matchRouter.get('/', (req, res) => matchController.getAllMatches(req, res));

export default matchRouter;