import BaseController from './BaseController.js';
import service from '../services/RequestService.js';

class RequestController extends BaseController{
    constructor(service){
        super(service);
        this.name = "request";
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default new RequestController(service);