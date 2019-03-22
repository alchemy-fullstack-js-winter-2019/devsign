/* eslint-disable no-undef */
import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  clientId: process.env.Auth0_Client_ID,
  domain: process.env.Auth0_Domain,
  redirectUri: process.env.AUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'openid profile'
});

//webpack config
//
//login in function call this login function on your home page.
//create a session.js in reducers. 
//action
//withSession higher order componenet. 
export const login = () => {
  return auth0.authorize();
};

//ading note
