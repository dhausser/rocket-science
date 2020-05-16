import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/login';
import Form from './components/form';
import Launches from './components/launches';
import Launch from './components/launch';

function App() {
  return (
    <Router>
      {/* <div style={{ display: "flex" }}> */}
      <div style={{ display: "flex" }}>
        <div className="sidenav">
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/launches">Launches</Link>
            </li>
          </ul>
        </div>
        {/* <div style={{ flex: 1, padding: "10px" }}> */}
        <div className="container" style={{ flex: 1, padding: "10px" }}>
          <Route exact path="/" component={Login} />
          <Route path="/form" component={Form} />
          <Route path="/launches" component={Launches} />
          <Route path="/launch/:launchId" component={Launch} />
        </div>
      </div>
    </Router>
  );
}

export default App;
