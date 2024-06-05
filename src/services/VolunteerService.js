import repo from '../repositories/VolunteerRepo.js';
import BaseService from './BaseService.js';

class VolunteerService extends BaseService{
    constructor(repo){
        super(repo);
    }
    // check 
    async add(data){
        try{
            const response = await this.repo.add(req.body);
            return res.status(response.statusCode).json(response);
        }
        catch(errors){
            next(errors);
        }
    }
}
export default new VolunteerService(repo);