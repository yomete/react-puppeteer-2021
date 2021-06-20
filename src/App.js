import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function Home() {
  return (
    <p className="App-welcome-text">
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

function About() {
  return <p className="App-welcome-text">This is the about page.</p>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <div className="App-link-wrapper">
            <Link className="App-link" id="home-page-link" to="/">
              Home
            </Link>
            <Link className="App-link" id="about-page-link" to="/about">
              About
            </Link>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
