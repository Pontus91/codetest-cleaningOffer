import React from 'react';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exactpath='/home' render={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default App;
