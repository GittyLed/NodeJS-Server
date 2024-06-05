import repo from '../repositories/RequestRepo.js';
import BaseService from './BaseService.js';

class RequestService extends BaseService{
    constructor(repo){
        super(repo);
    }
    // check 
    async update(id, data){
        //const {id} = req.params;
        try{
            const response = await this.repo.update(id, data);
            return res.status(response.statusCode).json(response);
        }
        catch(errors){
            next(errors);
        }
    }
}
export default new RequestService(repo);