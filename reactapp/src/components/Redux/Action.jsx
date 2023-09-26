import {  LOGIN_SUCCESS, LOGOUT_SUCCESS,SIGN_IN,SIGN_OUT } from './ActionTypes';

export const loginSuccess = (user) => ({

    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
  });

  export const signIn = (user) => ({
    type: SIGN_IN,
    payload: user,
  });
  
  export const signOut = () => ({
    type: SIGN_OUT,
  });