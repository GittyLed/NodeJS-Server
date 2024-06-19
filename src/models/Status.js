import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StatusSchema = new Schema({
    _id : String,
    description : String
}, { versionKey: false });

const Status = mongoose.model("Status", StatusSchema, 'status');

export default Status;