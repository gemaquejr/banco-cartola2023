import { Router } from 'express';
import CoachController from '../controllers/coachController';

const coachRouter = Router();

const coachController = new CoachController();

coachRouter.get('/', (req, res) => coachController.getAllCoaches(req, res));

export default coachRouter;