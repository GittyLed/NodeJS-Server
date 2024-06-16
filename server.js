import { configDotenv } from 'dotenv';
import  express  from 'express';
import volunteerRouter from './src/routers/VolunteerRouter.js';
import requestRouter from './src/routers/RequestRouter.js';

configDotenv();
const server = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

server.use(express.json());

server.use('/api/volunteers', volunteerRouter);
server.use('/api/requests', requestRouter);

server.listen(port, hostname, () => {
    console.log(`Server running at  http://${hostname}:${port}/`)
})
