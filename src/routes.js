import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import User from './components/User';

export const ROUTES = {
  HOME: {
    path: '/home',
    Component: Home,
    linkTo: () => '/home'
  },
  LOGIN: {
    path: '/',
    Component: LogIn,
    linkTo: () => '/'
  },
  USER: {
    path: '/user',
    Component: User,
    linkTo: () => '/user'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
