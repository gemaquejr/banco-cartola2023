import express from 'express';
import 'dotenv/config';
import routes from './routes';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use('/teams', routes.teamRouter);
app.use('/players', routes.playerRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})

export default app;