import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { 
  Button,
  Menu,
} from "semantic-ui-react";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [activeItem, setActiveItem] = useState("home");
  
  return (
    <Menu> 
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={() => setActiveItem("home")}
        >
          
        </Menu.Item>
      {isAuthenticated && (   
        <Menu.Item
          as={Link}
          to="/profile"
          name="profile"
          active={activeItem === "profile"}
          onClick={() => setActiveItem("profile")}
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