import autoBind from "auto-bind";

class BaseController{
    constructor(service){
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next){
        try {
            const filters = req.query;
            const response = await this.service.getAll(filters);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async getById(req, res, next){
        const { id } = req.params;
        try {
            const response = await this.service.getById(id);
            if(!response || response.length === 0){
                let error = new Error(`${this.name} does not exist.`);
                error.status = 404;
                throw error;
            }
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default BaseController;