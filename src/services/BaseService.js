class BaseService{
    constructor(repo){
        this.repo = repo;
    }

    async getAll(filters){
        return await this.repo.getAll(filters);
    }

    async getById(id){
        return await this.repo.getById(id);
    }
}
export default BaseService;