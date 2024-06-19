import Status from '../models/Status.js';
import BaseRepo from './BaseRepo.js'

class StatusRepo extends BaseRepo{
    
    constructor(model){
        super(model);
    }
}
export default new StatusRepo(Status);