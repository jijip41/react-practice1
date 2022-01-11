import React, { BrowserRouter as Router, Route, Switch } from 'react';
import About from './pages/about';
import Profile from './pages/profile';
import UserStore from './store/users';

export default function App() {
  return (
    <UserStore>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </UserStore>
  );
}
