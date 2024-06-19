import repo from '../repositories/StatusRepo.js';
import BaseService from './BaseService.js';

class StatusService extends BaseService{
    constructor(repo){
        super(repo);
    }
}
export default new StatusService(repo);