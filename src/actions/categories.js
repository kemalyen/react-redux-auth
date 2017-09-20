import axios from 'axios';
import * as constants from '../constants';

export function getFilmsByCategory(category_id = 1, page=1){
    const request = axios.get(`${constants.API_URL}/categories/${category_id}/movies?page=${page}`);
    return {
      type: constants.CATEGORY_FILMS,
      payload: request
    }
}

export function getCategory(category_id = 1){
    const request = axios.get(`${constants.API_URL}/categories/${category_id}`);
    return {
      type: constants.CATEGORY,
      payload: request
    }
}

export function getCategories(){
    const request = axios.get(`${constants.API_URL}/categories`);
    return {
      type: constants.CATEGORIES,
      payload: request
    }
}