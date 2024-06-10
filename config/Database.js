import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
configDotenv();

export default async function connect() {
    try {
        await mongoose.connect(process.env.CONN_STRING);
    }
    catch (e) {
        console.log(e);
    }

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
}
