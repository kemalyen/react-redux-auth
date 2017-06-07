import axios from 'axios';
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index';
import cookie from 'react-cookie';
import { STATIC_ERROR, FETCH_USER } from './types';

export function getMessage() {
  return function (dispatch) {
    axios.get(`${API_URL}/customer`, {
      headers: { Authorization: `Bearer ` + cookie.load('token') },
    })
    .then((response) => {
      dispatch({
        type: `GET_MESSAGE`,
        payload: request,
      });
    })
    .catch(response => dispatch(errorHandler(response.data.error)));
  };
}
