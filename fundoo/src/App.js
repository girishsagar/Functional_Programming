import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import regst from "./components/regst";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>

          <Route path="/register" component={regst}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
