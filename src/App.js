// @flow
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from './components/SideNav';
import Ideas from './components/Ideas';
import { LoginForm, SignUpForm } from './components/Forms';
import { routes } from './constant';
import userPic from './assets/images/User_ProfilePic.png';

import './app.scss';

const props = {
  userInfo: {
    name: 'Joyce Lee',
    avatarUrl: userPic,
  },
  isAuthenticated: true,
};
class App extends PureComponent<{}> {
  render() {
    return (
      <div className="app">
        <SideNav {...props} />
        <div className="app__body">
          <Router>
            <Switch>
              <Route exact path={routes.login} component={LoginForm} />
              <Route exact path={routes.home} component={LoginForm} />
              <Route exact path={routes.signup} component={SignUpForm} />
              <Route exact path={routes.ideas} component={Ideas} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
