class BaseService{
    constructor(repo){
        this.repo = repo;
    }

    async getAll(){
        return await this.repo.getAll();
    }

    async getById(id){
        return await this.repo.getById(id);
    }
}
export default BaseService;