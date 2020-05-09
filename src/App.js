import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// Main Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from "./components/Home";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

// Browser History
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
          <Route component={NotFound} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;