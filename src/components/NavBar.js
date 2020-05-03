import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { 
  Button,
  Menu,
} from "semantic-ui-react";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // TODO: Probably use window.location.pathname here
  const [activeItem, setActiveItem] = useState(window.location.href);
  
  
  return (
    <Menu> 
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === process.env.REACT_APP_URL || activeItem.includes(process.env.REACT_APP_URL + "?code=")}
        onClick={() => setActiveItem(process.env.REACT_APP_URL)}
      >         
      </Menu.Item>
    {isAuthenticated && (   
      <Menu.Item
        as={Link}
        to="/profile"
        name="profile"
        active={activeItem === process.env.REACT_APP_URL + "profile"}
        onClick={() => setActiveItem(process.env.REACT_APP_URL + "profile")}
      >
      </Menu.Item>
    )}  
      <Menu.Item position="right">
      {!isAuthenticated && (
        <Button primary onClick={() => loginWithRedirect({})}>Log in</Button>
      )}
      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
      </Menu.Item>
      </Menu>
  );
};

export default NavBar;