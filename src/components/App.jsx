import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
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
              <Home content={content} dispatch={dispatch}/>
            </Route>
          </Switch>

        <Footer content={content}/>

      </Router>
  );
}
