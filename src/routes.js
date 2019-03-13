import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  LOGIN: {
    path: '/login',
    Component: LogIn,
    linkTo: () => '/login'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
