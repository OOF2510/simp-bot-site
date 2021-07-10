import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/#/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
