import React from 'react';
import { Route } from 'react-router-dom';
import ChirpsFeed from '../components/main/ChirpsFeed';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: ChirpsFeed,
    linkTo: () => '/'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};