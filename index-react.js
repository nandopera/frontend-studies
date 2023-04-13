/* // index-react.js

import React from './node_modules/react/index';
import ReactDOM from './node_modules/react-dom/index';
import { BrowserRouter as Router, Switch, Route, Link } from './node_modules/react-router-dom';
import Home from './home.js';
import About from './about.js';
import Works from './works.js';
import './react-test.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
