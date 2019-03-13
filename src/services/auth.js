import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  clientID: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  return auth0.authorize();
};