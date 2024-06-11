import connect from '../../config/Database.js';
import Volunteer from '../models/Volunteer.js';

class VolunteerRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        let vol = await this.model.find({}).exec();
        console.log(vol);
        return vol;
    }

    async getById(id) {
        try {
            let vol = await this.model.findById(id);
            if (!vol) {
                let error = new Error('Volunteer does not exist.');
                error.statusCode = 404;
                throw error;
            }
            return vol;
        }
        catch(errors){
            console.log(errors.message);
            throw errors;
        }
    }

    async add(data){
        try{
            let vol = await this.model.create(data);
            if(vol){
                return vol;
            }
            else{
                throw new Error('The action failed, please check your credentials and try again.');
            }
        }
        catch(errors){
            console.log(errors.message);
            throw errors;
        }
    }
}
export default new VolunteerRepo(Volunteer);