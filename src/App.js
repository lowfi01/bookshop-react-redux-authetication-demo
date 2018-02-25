import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

const App = props => (
  <div className="ui container">
    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={LoginPage} />
    <div>hello</div>
  </div>
);

export default App;
