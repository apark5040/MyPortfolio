import React, { Component } from 'react';
import './App.scss';
import Main from "./pages/Main";
import About from "./pages/About";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageShell from "./components/PageShell";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <Nav />
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} component={Main}></Route>
            <Route path={process.env.PUBLIC_URL + '/about'} component={PageShell(About)}></Route>
            <Route path={process.env.PUBLIC_URL + '/contact'} component={PageShell(Contact)}></Route>
            <Route path={process.env.PUBLIC_URL + '/portfolio'} component={PageShell(Portfolio)}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
