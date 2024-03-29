import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './app/style.css'
import Home from './pages/main/home'
import NotFound from './pages/not_found/not-found'
import Market from './pages/market/market'
import Auth from './widget/login/login'
import Item from './pages/itenpage/item'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Auth} exact path="/login" />
        <Route component={Home} exact path="/" />
        <Route component={Market} path="/market" />
        <Route component={Item} path="/product" />
        <Route component={NotFound} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))
