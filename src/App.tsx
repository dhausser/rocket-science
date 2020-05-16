import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login';
import Form from './components/form';
import Launch from './components/launch';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/form" component={Form} />
      <Route path="/launch/:launchId" component={Launch} />
    </Router>
  );
}

export default App;
