import connect from '../../config/Database.js';
import Request from '../models/Request.js';
import buildPipeline from '../utils/RequestPipeline.js';
import { byParams, byId } from '../utils/Filters.js';

class RequestRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll(filters) {
        const smallPipe = byParams(filters);
        const pipeline = buildPipeline(smallPipe);
        let allRequests = await this.model.aggregate(pipeline).exec();
        return allRequests;
    }

    async getById(id) {
        try {
            const smallPipe = byId(id);
            const pipeline = buildPipeline(smallPipe);
            let request = await this.model.aggregate(pipeline).exec();
            if (!request) {
                let error = new Error('Could not find the request.');
                error.statusCode = 404;
                throw error;
            }
            return request;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error('An error occurred while retrieving the request. Please try again later');
        }
    }

    async update(id, data){
        try{
            let request = await this.model.findByIdAndUpdate(id, data, {new : true});
            return request;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }
}
export default new RequestRepo(Request);