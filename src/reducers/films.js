import * as constants from '../constants';

const INITIAL_STATE = { credits:{}, movie: {}, newmovies: {}, coming: {}, playing: {}, list: [], info: {}, combinations: [], categories: [], results: [] };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
      case constants.MOVIE_PAGE:
        return {...state, movie: action.payload.data };

      case constants.MOVIE_CREDITS:
        return {...state, credits: action.payload.data };

      case constants.MOVIES_LIST:
        return {...state, list: action.payload.data };
      case constants.CATEGORY_PRODUCTS:
        return {...state, list: action.payload.data };
      case constants.PRODUCT_COMBINATIONS:
        return {...state, combinations: action.payload.data };
      case constants.PRODUCT_CATEGORIES:
          return {...state, categories: action.payload.data };
      case constants.NOW_PLAYING:
          return {...state, playing: action.payload.data };
      case constants.COMING_SOON:
          return {...state, coming: action.payload.data };
      case constants.NEW_MOVIES:
          return {...state, newmovies: action.payload.data };
      case constants.SEARCH_RESULTS:
          return {...state, results: action.payload.data };

      default:
        return state;
    }
}
