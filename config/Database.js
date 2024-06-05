import mongoose from 'mongoose';
mongoose.set("strictQuery", false);

export default async function connect() {
    try {
        await mongoose.connect("mongodb+srv://GittySari:g&snodeserver@helpinghubdb.6clffz4.mongodb.net/");
    }
    catch(e) {
        console.log(e);
    }
}
