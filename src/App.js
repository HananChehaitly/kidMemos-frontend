import React from 'react';
import { useState } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BASE_API_URL from './BaseUrl';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <Router>
      <div className="App">   
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Login/>
            </Route>

            <ProtectedRoute path="/home" component={Home} />
            <ProtectedRoute exact path="/create-memory" component={Create} />
  
          </Switch>
        </div>
      </div>
    </Router>
  
  );
}

export default App;
