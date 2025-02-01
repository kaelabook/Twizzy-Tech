// /client/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainMenu from "./MainMenu";
import CarCreationPage from "./CarCreationPage";
import GasLogPage from "./GasLogPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={MainMenu} />
        <Route path="/create-car" component={CarCreationPage} />
        <Route path="/log-gas" component={GasLogPage} />
      </Switch>
    </Router>
  );
}

export default App;
