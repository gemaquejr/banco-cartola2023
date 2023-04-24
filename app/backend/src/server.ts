import express from 'express';
import 'dotenv/config';
import routes from './routes';
import cors from 'cors';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/teams', routes.teamRouter);
app.use('/players', routes.playerRouter);
app.use('/coaches', routes.coachRouter);
app.use('/matches', routes.matchRouter);
app.use('/rounds', routes.roundRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})

export default app;