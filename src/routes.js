import React from 'react';
import { Route } from 'react-router-dom';
import Signin from './components/Signin';
import Callback from './containers/auth/Callback';
import { withSession } from './containers/auth/withSession';

export const ROUTES = {
  SIGNIN: {
    path: '/',
    Component: withSession(Signin),
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
