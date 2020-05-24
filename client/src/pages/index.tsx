import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Launch from "./launch";
import Launches from "./launches";

export default function Pages() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Launches} />
        <Route path="/launch/:id" component={Launch} />
      </Router>
    </div>
  );
}
