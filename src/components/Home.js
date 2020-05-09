import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import {
  Card,
  Image,
  Message
} from "semantic-ui-react";
import chevron from "../images/chevron.svg"

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <section id="hero">
        <div id="login-request-container">
        {!user && (  
          <Message id="login-request" header="Welcome!" content="Please log in or sign up to access all features of this app." icon="user circle" compact />
        )}
        </div>
        <h1>Hero Header</h1>
        <h4 id="learn-more">Learn More</h4>
        <hr width="140px"/>
        <div id="chevron-container">
          <img id="downward-chevron" src={chevron} height="50px" alt="A downward-facing arrow" />
        </div>
      </section>
      <div className="page-content">
        <div className="card-left-section-container">
          <Card className="homepage-card" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <Card.Content>
              <Card.Header>Always Available</Card.Header>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec posuere ligula. Pellentesque nisl odio, eleifend quis ligula sit amet, sagittis maximus lectus. 
                Phasellus risus quam, sodales et lectus eu, venenatis aliquam tellus. Vestibulum sit amet velit sed quam dapibus ornare sit amet non neque. Aliquam iaculis tellus nec 
                dui cursus sagittis. Praesent sed varius erat. Suspendisse potenti. Nunc maximus fermentum ullamcorper. In porta tellus malesuada tincidunt volutpat. Donec molestie a 
                diam non varius. Quisque dignissim leo et libero tristique convallis. Donec scelerisque luctus mauris vitae porttitor. Duis varius consectetur tortor vitae volutpat. 
                Donec a posuere turpis, nec tempor elit. Pellentesque ac massa dolor. Suspendisse condimentum risus nisi, vel varius turpis molestie vitae. Suspendisse pellentesque 
                consequat tristique. Sed enim sapien, ornare ut volutpat porttitor, tincidunt sit amet magna. Fusce risus felis, porta quis nisi quis, sagittis dapibus tortor.
              </Card.Description>
            </Card.Content>
          </Card>
          <div className="bullets-right">  
            <h2>Features</h2>
            <ul>
              <li>Apps are built to work offline</li>
              <li>SLA 99.999% availability</li>
              <li>Another feature</li>
            </ul>
          </div>
        </div>
        <div className="card-right-section-container">
          <div className="bullets-left">
            <h2>Features</h2>
            <ul>
              <li>Apps meet industry-standard accessiblility requirements</li>
              <li>ADA-compliant</li>
              <li>Get your brand in front of as many potential customers as possible</li>
            </ul>
          </div>
          <Card className="homepage-card" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
            <Card.Content>
              <Card.Header>Always Acessible</Card.Header>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec posuere ligula. Pellentesque nisl odio, eleifend quis ligula sit amet, sagittis maximus lectus. 
                Phasellus risus quam, sodales et lectus eu, venenatis aliquam tellus. Vestibulum sit amet velit sed quam dapibus ornare sit amet non neque. Aliquam iaculis tellus nec 
                dui cursus sagittis. Praesent sed varius erat. Suspendisse potenti. Nunc maximus fermentum ullamcorper. In porta tellus malesuada tincidunt volutpat. Donec molestie a 
                diam non varius. Quisque dignissim leo et libero tristique convallis. Donec scelerisque luctus mauris vitae porttitor. Duis varius consectetur tortor vitae volutpat. 
                Donec a posuere turpis, nec tempor elit. Pellentesque ac massa dolor. Suspendisse condimentum risus nisi, vel varius turpis molestie vitae. Suspendisse pellentesque 
                consequat tristique. Sed enim sapien, ornare ut volutpat porttitor, tincidunt sit amet magna. Fusce risus felis, porta quis nisi quis, sagittis dapibus tortor.
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div className="card-left-section-container">
          <Card className="homepage-card" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <Card.Content>
              <Card.Header>Always Up-To-Date</Card.Header>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec posuere ligula. Pellentesque nisl odio, eleifend quis ligula sit amet, sagittis maximus lectus. 
                Phasellus risus quam, sodales et lectus eu, venenatis aliquam tellus. Vestibulum sit amet velit sed quam dapibus ornare sit amet non neque. Aliquam iaculis tellus nec 
                dui cursus sagittis. Praesent sed varius erat. Suspendisse potenti. Nunc maximus fermentum ullamcorper. In porta tellus malesuada tincidunt volutpat. Donec molestie a 
                diam non varius. Quisque dignissim leo et libero tristique convallis. Donec scelerisque luctus mauris vitae porttitor. Duis varius consectetur tortor vitae volutpat. 
                Donec a posuere turpis, nec tempor elit. Pellentesque ac massa dolor. Suspendisse condimentum risus nisi, vel varius turpis molestie vitae. Suspendisse pellentesque 
                consequat tristique. Sed enim sapien, ornare ut volutpat porttitor, tincidunt sit amet magna. Fusce risus felis, porta quis nisi quis, sagittis dapibus tortor.
              </Card.Description>
            </Card.Content>
          </Card>
          <div className="bullets-right">  
            <h2>Features</h2>
            <ul>
              <li>Apps are built to work offline</li>
              <li>SLA 99.999% availability</li>
              <li>Another feature</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;