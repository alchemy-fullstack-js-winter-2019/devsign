import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Callback from './containers/auth/Callback';
import { withAuth } from './containers/auth/withAuth';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: withAuth(Home),
    linkTo: () => '/'
  },
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
