import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Tweets from '../components/tweets/Tweets';
import Profile from '../components/profile/Profile';


export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  
  TWEETS: {
    path: '/tweets',
    Component: Tweets,
    linkTo: () => '/tweets'
  },

  PROFILE: {
    path: '/profile',
    Component: Profile,
    linkTo: () => '/profile'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
