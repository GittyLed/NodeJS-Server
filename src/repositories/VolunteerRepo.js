import Volunteer from '../models/Volunteer.js';
import BaseRepo from './BaseRepo.js'

class VolunteerRepo extends BaseRepo{
    
    constructor(model){
        super(model);
    }

    async getById(id) {
        try {
            let vol = await this.model.findById(id);
            return vol;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error('An error occurred while retrieving the volunteer. Please try again later.');
        }
    }

    async add(data){
        try{
            let vol = await this.model.create(data);
            return vol;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error("The action failed, please check your credentials and try again.");
        }
    }
}
export default new VolunteerRepo(Volunteer);