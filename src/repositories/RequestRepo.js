import connect from '../../config/Database.js';
import Request from '../models/Request.js';

class RequestRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll(filters) {
        //build the query object based on the filters.
        let query = {};

        if (filters.status) {
            query.status = new RegExp(filters.status, 'i');
        }

        let locationFilter = [];
        if (filters.location) {
            locationFilter = [
                { 'street': new RegExp(filters.location, 'i') },
                { 'city': new RegExp(filters.location, 'i') }
            ]
        }
        console.log('Location filter', locationFilter);
        console.log('Query:', query);
        const pipeline = [
          {
            '$lookup': {
              'from': 'location', 
              'localField': 'location', 
              'foreignField': '_id', 
              'as': 'location_info'
            }
          }, {
            '$lookup': {
              'from': 'status', 
              'localField': 'status', 
              'foreignField': '_id', 
              'as': 'status_info'
            }
          }, {
            '$lookup': {
              'from': 'priority', 
              'localField': 'importance', 
              'foreignField': '_id', 
              'as': 'priority_info'
            }
          }, {
            '$unwind': {
              'path': '$location_info'
            }
          }, {
            '$unwind': {
              'path': '$status_info'
            }
          }, {
            '$unwind': {
              'path': '$priority_info'
            }
          }, {
            '$addFields': {
              'city': '$location_info.city', 
              'street': '$location_info.street', 
              'importance': '$priority_info.description', 
              'status': '$status_info.description'
            }
          }, {
            '$project': {
              'location': 0, 
              'location_info': 0, 
              'status_info': 0, 
              'priority_info': 0
            }
          },
          {
            '$match' : query
        }
        ]

        if(locationFilter.length > 0){
          pipeline.push({ '$match': { '$or': locationFilter } });
        }

        let res = await this.model.aggregate(pipeline).exec();
        return res;
    }

    async getById(id) {
        try {
            let request = await this.model.findById(id);
            if (!request) {
                let error = new Error('Could not find the request.');
                error.statusCode = 404;
                throw error;
            }
            return request;
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