import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Callback from './containers/Callback';
import LogIn from './components/login/LogIn';
import User from './components/user/User';
import { withSession } from './containers/withSession';


export const ROUTES = {
  HOME: {
    path: '/',
    Component: withSession(Home),
    linkTo: () => '/'
  },
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  },
  LOGIN: {
    path: '/logIn',
    Component: LogIn,
    linkTo: () => '/logIn'
  },
  USER: {
    path: '/user',
    Component: withSession(User),
    linkTo: () => '/user'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
