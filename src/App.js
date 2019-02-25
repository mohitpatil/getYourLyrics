import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import { Provider } from './context';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);


class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment >
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/"  component={Index} />
            </Switch>  
          </div>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
