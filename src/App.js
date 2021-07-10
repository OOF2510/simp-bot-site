import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import { NotFound } from "./NotFound";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
            <link to="/commands">Commands</link>
          </li>
          <li>
            <link to="/invite">Invite</link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li> */}
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
