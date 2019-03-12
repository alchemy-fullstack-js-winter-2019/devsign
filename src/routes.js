import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Settings from './components/settings/Settings';
import Login from './components/login/Login';

export const ROUTES  = {
    HOME: {
        path: '/',
        component: Home,
        linkTo: () => '/'
    },

    PROFILE: {
        path: '/profile',
        component: Profile,
        linkTo: () => '/profile'
    },
    
    Settings: {
        path: '/Settings',
        component: Settings,
        linkTo: () => '/Settings'
    },
    Login: {
        path: '/login',
        component: Login,
        linkTo: () => '/login'
    }
    
};

export const getRoutes = () => {
    return Object.values(ROUTES).map(route => {
        return <Route exact key={route.path} path={route.path} component={route.component} />;
    });
};
