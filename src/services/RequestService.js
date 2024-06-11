import repo from '../repositories/RequestRepo.js';
import BaseService from './BaseService.js';

class RequestService extends BaseService{
    constructor(repo){
        super(repo);
    }

    async update(id, data){
        try{
            return await this.repo.update(id, data);
        }
        catch(errors){
            console.log(errors);
        }
    }
}
export default new RequestService(repo);