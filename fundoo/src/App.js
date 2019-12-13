import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import "./navigation.css";
import appBar from "./components/appBar";
import regst from "./components/regst";
import forgetPassword from "./components/forgetPassword";
import drawer from './components/drawer'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={regst}></Route>
          <Route path="/forget" component={forgetPassword}></Route>
          <Route path="/appBar" component={appBar}></Route>
          <Route path="/drawer" component={drawer}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
