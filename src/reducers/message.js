

const INITIAL_STATE = { message: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return { ...state, error: '', message: '', authenticated: true };
    
    default:
       return state;

  }

}
