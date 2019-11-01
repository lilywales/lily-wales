//importing page components
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import RadioactiveRhonda from "../../pages/Rhonda";
//creating routes for site
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/radioactiverhonda" component={RadioactiveRhonda} />
    </Switch>
  </main>
);

export default App;
