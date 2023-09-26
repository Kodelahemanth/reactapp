import { combineReducers } from 'redux';
import { LOGIN_SUCCESS,LOGOUT_SUCCESS,SIGN_IN,SIGN_OUT } from './ActionTypes';



const authReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
const autheReducer = (state = null, action) => {
  switch (action.type) {
    case SIGN_IN:
      return  action.payload ;
    case SIGN_OUT:
      return null ;
    default:
      return state;
  }
};


const Reducer = combineReducers({
  authe: autheReducer,
  user: authReducer,
});

export default Reducer;