import { WebAuth } from 'auth0-js';
  
const auth0 = new WebAuth({
  clientID: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH_DOMAIN,
  redirectUri: process.envAUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  return auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, result) => {
      if(result && result.accessToken & result.idToken) {
        auth0.client.userInfo(result.accessToken, (err, info) => {
          if(err) return reject(err);
          console.log(info);
          return resolve({
          });

        });
      }
    });
  });
};
