import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import {Switch} from 'react-router'; 
import AppComponent from './src/components/AppComponent';
import Home from './src/components/Home';
ReactDOM.render((<HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/react' component={AppComponent} />
        </Switch>
     </HashRouter>),
  document.getElementById('root'),
);