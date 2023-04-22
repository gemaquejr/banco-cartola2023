import { Router } from 'express';
import TeamController from '../controllers/teamController';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.get('/', (req, res) => teamController.getTeams(req, res));

export default teamRouter;