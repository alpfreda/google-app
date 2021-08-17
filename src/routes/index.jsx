import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../containers/home/'

export default function App() {
  return <Switch>
    {
      routes.map(route => <Route {...route} />)
    }
  </Switch>
}

const routes = [
  {
    key: 'home',
    path: '/',
    component: Home
  },
  // {
  //   key: 'not-found',
  //   component: NotFound,
  // }
]