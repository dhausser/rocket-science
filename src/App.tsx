import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/login';
import Form from './components/form';
import Launches from './components/launches';
import Launch from './components/launch';

function App() {
  return (
    <Router>
      <div className="layout">
        <div className="sidenav">
          <nav>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/form" className="nav-item">Form</Link>
            <Link to="/launches" className="nav-item">Launches</Link>
          </nav>
        </div>
        <>
          <Route exact path="/" component={Login} />
          <Route path="/form" component={Form} />
          <Route path="/launches" component={Launches} />
          <Route path="/launch/:launchId" component={Launch} />
        </>
      </div>
    </Router>
  );
}

export default App;
