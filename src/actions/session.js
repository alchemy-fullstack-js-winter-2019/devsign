import { createAction } from 'promise-middleware-redux';

import { handleAuth } from '../services/auth';

// export const SET_SESSION = 'SET_SESSION';

// export const setSession = () => ({
//     type: SET_SESSION,
//     payload: handleAuth()
// });

export const [
    setSession,
    SET_SESSION,
    SET_SESSION_PENDING
] = createAction('SET_SESSION', handleAuth);
