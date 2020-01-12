// 引入react-router
import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, HashRouter, Switch, Route, Link} from 'react-router-dom';

const Home = lazy(() => import('../pages/home.js'));

const About = lazy(() => import('../pages/about.js'));

const User = lazy(() => import('../pages/user.js'));

export default function App() {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/user" component={User}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
}
