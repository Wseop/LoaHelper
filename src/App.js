import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import ContentRaid from './components/ContentRaid.js';
import Profile from './components/Profile.js';
import Exchange from './components/Exchange.js';

function App() {
  console.log(process.env.REACT_APP_URL_BASE);

  return (
    <div className="container">
      <div className="App">
          <Navigation />

        <BrowserRouter basename={process.env.REACT_APP_URL_BASE}>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route path='/exchange' component={Exchange} />
            <Route path="/raid/0">
              <ContentRaid id={Number(0)} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;