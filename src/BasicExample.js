import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const sections=['Home', 'Services', 'Portfolio', 'About', 'Contact']
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contacts = () => (
    <div>
      <h2>Contacts</h2>
    </div>
  );
const Services = ({ match }) => (
  <div>
    <h2>Services</h2>
    <ul>
      <li>
        <Link to={`${match.url}/working with react`}>Working with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:serviceId`} component={Portfolio} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a service.</h3>}
    />
  </div>
);

const Portfolio = ({ match }) => (
  <div>
    <h3>{match.params.serviceId}</h3>
    <h4>Projects</h4>
  </div>
);

export default BasicExample;