import autoBind from "auto-bind";

class BaseController{
    constructor(service){
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next){
        try {
            const response = await this.service.getAll(req.query);
            return res.status(response.statusCode)
            //.json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async getById(req, res, next){
        const { id } = req.params;
        try {
            const response = await this.service.getById(id);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
//service...
export default BaseController;