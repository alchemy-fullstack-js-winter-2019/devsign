import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './containers/Profile';
import Home from './containers/Home';
import Settings from './components/settings/Settings';
import Login from './components/login/Login';
import { withSession } from './containers/auth/withSession';
import Callback from './containers/auth/Callback';


export const ROUTES  = {
    HOME: {
        path: '/',
        component: withSession(Home),
        linkTo: () => '/'
    },

    PROFILE: {
        path: '/profile',
        component: Profile,
        linkTo: () => '/profile'
    },
    
    SETTINGS: {
        path: '/Settings',
        component: Settings,
        linkTo: () => '/Settings'
    },
    LOGIN: {
        path: '/login',
        component: Login,
        linkTo: () => '/login'
    },
    CALLBACK: {
        path: '/callback',
        component: Callback,
        linkTo: () => '/callback'
    }
    
};

export const getRoutes = () => {
    return Object.values(ROUTES).map(route => {
        return <Route exact key={route.path} path={route.path} component={route.component} />;
    });
};
