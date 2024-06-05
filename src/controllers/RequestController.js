import BaseController from './BaseController.js';
import service from '../services/RequestService.js';

class RequestController extends BaseController{
    constructor(service){
        super(service);
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
//service...
export default new RequestController(service);