import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login'
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/form" component={Form} />
    </Router>
  );
}

export default App;
