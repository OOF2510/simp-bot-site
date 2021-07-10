import "./styles/App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./elements/Navigation";

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
