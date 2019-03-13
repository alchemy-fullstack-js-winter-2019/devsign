import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Tweets from '../components/Tweets';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  
  TWEETS: {
    path: '/',
    Component: Tweets,
    linkTo: () => '/tweets'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
