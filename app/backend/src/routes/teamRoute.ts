import { Router } from 'express';
import TeamController from '../controllers/teamController';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.post('/', (req, res) => teamController.createTeam(req, res));
teamRouter.get('/', (req, res) => teamController.getAllTeams(req, res));
teamRouter.get('/:id', (req, res) => teamController.getTeamById(req, res));
teamRouter.put('/:id', (req, res) => teamController.updateTeamById(req, res));
teamRouter.delete('/:id', (req, res) => teamController.deleteTeamById(req, res));

export default teamRouter;