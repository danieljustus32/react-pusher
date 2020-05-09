import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const Footer = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <Fragment />
  } else {
    return (
      <Fragment>
        <div id="footer">
          <ul className="footer-list">
            <li className="footer-link">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="footer-link">
              <Link to="/profile">
                My Profile
              </Link>
            </li>
          </ul>
          <div id="copyright">
            <p>&copy; 2020 Daniel Justus</p>
          </div>
          <ul className="footer-list">
            <li className="footer-link">
              <Link to="/tos">
                Terms of Service
              </Link>
            </li>
            <li className="footer-link">
              <Link to="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }
};

export default Footer;