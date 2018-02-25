import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = props => (
  <div className="ui container">
    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={LoginPage} />
  </div>
);

export default App;
