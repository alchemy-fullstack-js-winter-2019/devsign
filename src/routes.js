import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Callback from './containers/auth/Callback';
import Home from './components/Home';
import { withSession } from './containers/auth/withSession';
import CreateTweetForm from './components/CreateTweetForm';

export const ROUTES = {
  Landing: {
    path: '/',
    Component: Landing,
    linkTo: () => '/'
  },
  HOME: {
    path: '/home',
    Component: withSession(Home),
    linkTo: () => '/home'
  },
  CREATE: {
    path: '/createtweet',
    Component: withSession(CreateTweetForm),
    linkTo: () => '/createtweet'
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
