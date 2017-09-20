import * as constants from '../constants';

const INITIAL_STATE = { list: [], info: {}, movies: [] };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case constants.CATEGORIES:
            return {...state, list: action.payload.data };
        case constants.CATEGORY:
            return {...state, info: action.payload.data };
        case constants.CATEGORY_FILMS:
            return {...state, movies: action.payload.data };
        default:
          return state;
    }
}
