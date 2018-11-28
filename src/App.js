import React, { Component } from 'react';
import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageShell from "./components/PageShell";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={PageShell(Main)}></Route>
            <Route exact path="/about" component={PageShell(About)}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
