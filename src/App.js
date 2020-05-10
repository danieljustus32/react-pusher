import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Pusher from "pusher-js";

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

// Pusher
// Initialize Channels client
let channels = new Pusher('65901c15ec569489ac03', {
  cluster: 'us2'
})

// Note: The app key and cluster are exposed on the client and not 
// sensitive. If app secret or app ID are needed, these are exposed
// as `now` environment variables e.g. '@[APP_NAME]-app-id'

// Subscribe to the appropriate channel
let channel = channels.subscribe('channel-name')

// Bind a callback function to an event within the subscribed channel
channel.bind('event-name', function(data) {
  // Do what you wish with the data from the event
})

async function pushData(data) {
  const res = await fetch('/api/channels-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    console.error('failed to push data')
  }
}

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