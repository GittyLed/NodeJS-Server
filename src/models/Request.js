import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    id: Number,
    location : String, 
    description : String,
    importance : String,
    people : Number,
    contactNumber : String,
    status : String,
    volunteerId : String
})

const Request = mongoose.model("helpRequests", RequestSchema);

export default Request;