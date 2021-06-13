import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Contact from "./contact";
import Header from "./Header";

export default function App() {
  return (
      <Router>

        <Header/>
        
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
  );
}
