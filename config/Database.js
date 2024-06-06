import mongoose from 'mongoose';
mongoose.set("strictQuery", false);

export default async function connect() {
    try {
        await mongoose.connect("mongodb+srv://GittySari:g&snodeserver@helpinghubdb.6clffz4.mongodb.net/HelpingHubDB");
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
