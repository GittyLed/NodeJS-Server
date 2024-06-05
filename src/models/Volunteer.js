import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    id : String,
    firstName : String,
    lastName : String,
    phoneNumber : String,
    areasOfHelp : Array
})

const Volunteer = mongoose.model("volunteers", VolunteerSchema);

export default Volunteer;