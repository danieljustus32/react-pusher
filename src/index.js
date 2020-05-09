import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import History from "./utils/History";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css";

// Installed fonts
require("typeface-montserrat");

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  History.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

// Animate-on-scroll library
AOS.init();

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();