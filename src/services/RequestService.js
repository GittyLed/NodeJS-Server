import repo from '../repositories/RequestRepo.js';
import BaseService from './BaseService.js';

class RequestService extends BaseService{
    constructor(repo){
        super(repo);
    }
    // check 
    async update(id, data){
        try{
            return await this.repo.update(id, data);
        }
        catch(errors){
            console.log(errors);
            // next(errors);
        }
    }
}
export default new RequestService(repo);