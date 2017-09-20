import axios from 'axios';
import * as constants from '../constants';

export function getPerson(person_id){
    const request = axios.get(`${constants.API_URL}/persons/${person_id}`);
    return {
      type: constants.PERSON_PAGE,
      payload: request
    }
}

export function getPersonMovieCredits(person_id){
    const request = axios.get(`${constants.API_URL}/persons/${person_id}/movie_credits`);
    return {
      type: constants.PERSON_MOVIE_CREDITS,
      payload: request
    }
}

export function getMovie(movie_id){
    const request = axios.get(`${constants.API_URL}/movies/${movie_id}`);
    return {
      type: constants.MOVIE_PAGE,
      payload: request
    }
}

export function getMovieCredits(movie_id){
    const request = axios.get(`${constants.API_URL}/movies/${movie_id}/credits`);
    return {
      type: constants.MOVIE_CREDITS,
      payload: request
    }
}


export function getMovies(page=1){
    const request = axios.get(`${constants.API_URL}/movies?page=${page}`);
    return {
      type: constants.MOVIES_LIST,
      payload: request
    }
}

export function getSearchResults(query = null, page=1){
    const request = axios.get(`${constants.API_URL}/search?page=${page}&query=${query}`);
    return {
      type: constants.SEARCH_RESULTS,
      payload: request
    }
}

export function getNowPlaying(){
    const request = axios.get(`${constants.API_URL}/categories/1/movies`);
    return {
      type: constants.NOW_PLAYING,
      payload: request
    }
}

export function getNewMovies(){
    const request = axios.get(`${constants.API_URL}/categories/3/movies`);
    return {
      type: constants.NEW_MOVIES,
      payload: request
    }
}

export function getComingSoon(){
    const request = axios.get(`${constants.API_URL}/categories/2/movies`);
    return {
      type: constants.COMING_SOON,
      payload: request
    }
}