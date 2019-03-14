import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Callback from './containers/auth/Callback';
import { withSession } from './containers/auth/withSession';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: withSession(Home),
    linkTo: () => '/'
  },
  ABOUT: {
    path: '/about',
    Component: withSession(About),
    linkTo: () => '/about'
  },
  PROFILE: {
    path: '/profile',
    Component: withSession(Profile),
    linkTo: () => '/profile'
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
