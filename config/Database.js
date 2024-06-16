import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

configDotenv();

mongoose.set("strictQuery", false);

export default async function connect() {
    try {
        await mongoose.connect(process.env.CONN_STRING);
    }
    catch (e) {
        console.log(e.message);
        throw new Error("unable to connect to mongoDB: ");
    }

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
}
