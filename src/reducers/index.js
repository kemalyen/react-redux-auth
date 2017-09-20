import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import films from './films';
import categories from './categories';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  films,
  categories
});

export default rootReducer;
