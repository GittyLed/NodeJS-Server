import BaseController from './BaseController.js';
import service from '../services/VolunteerService.js';

class VolunteerController extends BaseController{
    constructor(service){
        super(service);
    }

    async add(req, res, next) {
        try {
            const response = await this.service.add(req.body);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
//service...
export default new VolunteerController(service);