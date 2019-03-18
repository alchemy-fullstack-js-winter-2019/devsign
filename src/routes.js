import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Posts from './components/Posts';
import Callback from './containers/auth/Callback';
import { withSession } from './containers/auth/withSession';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  },
  LOGIN: {
    path: '/login',
    Component: withSession(Login),
    linkTo: () => '/login'
  },
  ABOUT: {
    path: '/about',
    Component: About,
    linkTo: () => '/about'
  },
  POSTS: {
    path: '/posts',
    Component: Posts,
    linkTo: () => '/posts'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
