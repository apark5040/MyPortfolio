import React, { Component } from 'react';
import './App.css';
import Main from "./pages/Main";
import Character from "./pages/Character";
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
            <Route exact path="/character/:id" component={PageShell(Character)}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
