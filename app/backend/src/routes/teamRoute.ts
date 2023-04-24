import { Router } from 'express';
import TeamController from '../controllers/teamController';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.post('/', (req, res) => teamController.createTeam(req, res));
teamRouter.get('/', (req, res) => teamController.getAllTeams(req, res));
teamRouter.get('/:id', (req, res) => teamController.getTeamById(req, res));

export default teamRouter;