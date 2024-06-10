import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    _id : String,
    firstName : String,
    lastName : String,
    phoneNumber : String,
    areasOfHelp : Array
})

const Volunteer = mongoose.model("Volunteer", VolunteerSchema, 'volunteer');

export default Volunteer;