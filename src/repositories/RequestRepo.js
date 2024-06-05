import connect from '../../config/Database.js';
import Request from '../models/Request.js';

class RequestRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        let res = await this.model.find().exec();
        return res;
        //return new HttpResponse(res);
    }

    async getById(id) {
        try {
            let request = await this.model.findById(id);
            if (!request) {
                let error = new Error('Could not find the request.');
                error.statusCode = 404;
                throw error;
            }
            return new HttpResponse(request);
        }
        catch(errors){
            console.log(errors.message);
            throw errors;
        }
    }

    async update(id, data){
        try{
            let request = await this.model.findByIdAndUpdate(id, data, {new : true});
            return new HttpResponse(request);
        }
        catch(errors){
            console.log(errors.message);
            throw errors;
        }
    }
}
export default new RequestRepo(Request);