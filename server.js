import { configDotenv } from 'dotenv';
import  express  from 'express';
import volunteerRouter from './src/routers/VolunteerRouter.js';
import requestRouter from './src/routers/RequestRouter.js';
import statusRouter from './src/routers/StatusRouter.js';
configDotenv();
const server = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

server.use(express.json());

server.use('/api/volunteers', volunteerRouter);
server.use('/api/requests', requestRouter);
server.use('/api/statuses', statusRouter);
server.use('/', (req, res) => {
    res.send('welcome to our api');
});

server.listen(port, hostname, () => {
    console.log(`Server running at  http://${hostname}:${port}/`)
})
