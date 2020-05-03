import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import {
  Message
} from "semantic-ui-react";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {!user && (
        <Message className="login-request" info compact>
          <Message.Header>Welcome!</Message.Header>
          <p>Please log in or sign up to access all features of this app.</p>
        </Message>
      )}
      <h1>Coming Soon...</h1>
    </Fragment>
  );
};

export default Home;