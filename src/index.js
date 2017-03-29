import React from 'react';
import { render } from 'react-dom'

import MainContainer from './maincontainer';
import VisualsPage from './visualspage';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const routes = ((
  <div>
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={VisualsPage}/>
      <Route path='test1' component={VisualsPage}/>
    </Route>
  </Router>
  </div>
));

render(routes, document.getElementById('main-container'));
