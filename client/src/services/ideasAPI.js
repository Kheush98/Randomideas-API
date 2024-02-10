const  axios = require('axios');
class IdeasAPI {
    constructor() {
        this._apiUrl = 'http://localhost:5000/api/ideas';
    }

    getIdeas() {
        return axios.get(this._apiUrl);
    }
    
}

export default new IdeasAPI();