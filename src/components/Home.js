import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import {
  Card,
  Message
} from "semantic-ui-react";
import chevron from "../images/chevron.svg"

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return (
      <svg className="loading-wheel-viewbox" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="loading-wheel"cx="50" cy="50" r="45"/>
      </svg>
    );
  }

  return (
    <Fragment>
      
        <section id="hero">
          <div id="hero-overlay">
          </div>
          <div id="login-request-container">
          {!user && (  
            <Message id="login-request" header="Welcome!" content="Please log in or sign up to access all features of this app." icon="user circle" />
          )}
          </div>
          <h1 id="hero-header">Your Brand Here</h1>
          <p id="learn-more">Learn More</p>
          <div id="divider-container">
            <hr id="divider" />
          </div>
          <div id="chevron-container">
            <img id="downward-chevron" src={chevron} height="50px" alt="A downward-facing arrow" />
          </div>
        </section>
    
      <div className="page-content">
        <div className="card-left-section-container">
          <Card className="homepage-card" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
            <Card.Content>
              <Card.Header>Always Available</Card.Header>
              <Card.Meta>Never miss an opportunity</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                The average visit to a web page lasts about 60 seconds. You don't have time to 
                waste delivering your message to potential customers, and potential customers don't have time 
                to waste dealing with buggy interfaces and downtime. 
                <br />
                <br />
                Our apps are built to provide the highest possible level of availability, so you can be confident 
                that you'll be there for your customers when they need you. All apps are built to provide basic 
                functionality even when a user goes offline, and our serverless backend system allows for a 
                consistent, dependable online presence.
              </Card.Description>
            </Card.Content>
          </Card>
          <div className="bullets-right">  
            <h2>Features</h2>
            <ul>
              <li>Apps are built to work offline</li>
              <li>High-performance edge network backend</li>
              <li>Continuous integration allows for new features on the fly</li>
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
          <Card className="homepage-card" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <Card.Content>
              <Card.Header>Always Acessible</Card.Header>
              <Card.Meta>Provide great service to everyone</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                Accessibility is one of the tenets of how we build for the web. And it's not just the right thing 
                to do, it's the law. Title III of the ADA prohibits disability-based discrimination in places of 
                public accomadation, and this extends to your website.
                <br />
                <br />
                Protect yourself from ADA-based lawsuits and avoid alienating your most vulnerable customers. All of 
                our apps undergo an automated 8-point testing process to identify accessibility issues before they 
                become a concern, as well as rigorous manual testing. You can rest easy knowing your presence on the 
                web is accessible to all. 
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div className="card-left-section-container">
          <Card className="homepage-card" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
            <Card.Content>
              <Card.Header>Always Up-To-Date</Card.Header>
              <Card.Meta>Start doing business in real-time</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                Keep in touch with your customers using our blazing-fast communication features. From
                real-time customer support chat to online bill pay and account status, your customers will stay informed 
                and up-to-date. 
                <br />
                <br />
                Making business decisions requires data. The availability, reliability, and accuracy of your data can make 
                or break you. Our real-time data visualization features keep you informed so that you can always have a 
                clear picture of the path ahead.
              </Card.Description>
            </Card.Content>
          </Card>
          <div className="bullets-right">  
            <h2>Features</h2>
            <ul>
              <li>Real-time features to connect you with your market</li>
              <li>Customers stay informed about your latest products and services</li>
              <li>Stay on top of your business needs with data visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;