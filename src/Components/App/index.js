//importing page components
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import RadioactiveRhonda from "../../pages/Rhonda";
import BlueStreak from "../../pages/BlueStreak";
import BikiniBottom from "../../pages/BikiniBottom";
import LasVagueness from "../../pages/LasVagueness";
import OperationPlumbob from "../../pages/OperationPlumbob";
import Contact from "../../pages/Contact";
import MrOwl from "../../pages/MrOwl";
import AtomicKitten from "../../pages/AtomicKitten";
//creating routes for site
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/radioactiverhonda" component={RadioactiveRhonda} />
      <Route path="/bluestreak" component={BlueStreak} />
      <Route path="/bikinibottom" component={BikiniBottom} />
      <Route path="/lasvagueness" component={LasVagueness} />
      <Route path="/operationplumbob" component={OperationPlumbob} />
      <Route path="/contact" component={Contact} />
      <Route path="/mrowlatedownmymetalworm" component={MrOwl} />
      <Route path="/atomickitten" component={AtomicKitten} />
    </Switch>
  </main>
);

export default App;
