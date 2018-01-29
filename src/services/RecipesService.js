import config from '../config';
import axios from 'axios'

class RecipesService {
  getRecipes() {
    return axios.get(`${config.serverUrl}/recipes`)
  }
}

const service = new RecipesService()
export default service
