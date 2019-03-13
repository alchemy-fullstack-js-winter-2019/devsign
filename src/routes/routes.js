import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  
  SEARCH: {
    path: '/',
    Component: Search,
    linkTo: () => '/search'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
