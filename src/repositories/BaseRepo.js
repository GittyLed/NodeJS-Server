import connect from '../../config/Database.js';
class BaseRepo{
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        let vol = await this.model.find({}).exec();
        console.log(vol);
        return vol;
    }
}
export default BaseRepo;