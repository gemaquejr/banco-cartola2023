import { Router } from 'express';
import CoachController from '../controllers/coachController';

const coachRouter = Router();

const coachController = new CoachController();

coachRouter.get('/', (req, res) => coachController.getAllCoaches(req, res));
coachRouter.post('/', (req, res) => coachController.createCoach(req, res));
coachRouter.get('/:id', (req, res) => coachController.getCoachById(req, res));
coachRouter.put('/:id', (req, res) => coachController.updateCoachById(req, res));
coachRouter.delete('/:id', (req, res) => coachController.deleteCoachById(req, res));

export default coachRouter;