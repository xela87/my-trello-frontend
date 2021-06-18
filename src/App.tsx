import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/board">
            <Board />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
