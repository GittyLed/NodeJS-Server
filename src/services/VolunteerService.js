import repo from '../repositories/VolunteerRepo.js';
import BaseService from './BaseService.js';

class VolunteerService extends BaseService{
    constructor(repo){
        super(repo);
    }
    // check 
    async add(data){
        try{
            let a = await this.repo.add(data);
            console.log(a);
            return a;
        }
        catch(errors){
            console.log(errors);
        }
    }
}
export default new VolunteerService(repo);