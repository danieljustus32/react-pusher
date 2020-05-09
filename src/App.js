import React from "react";
// Main Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import { Router, Route, Switch } from "react-router-dom";
// Pages
import Home from "./components/Home"
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
          <Route path="/" component={Home} exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;