import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

const App = props => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={LoginPage} />
  </div>
);

export default App;
