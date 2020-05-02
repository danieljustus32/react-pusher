import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import History from "./utils/History";

const App = () => {
  return (
    <div className="App">
      <Router history={History}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;