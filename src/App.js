// @flow
import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpUser, loginUser, logoutUser } from './actions/user';
import SideNav from './components/SideNav';
import Ideas from './components/Ideas';
import { LoginForm, SignUpForm } from './components/Forms';
import { routes } from './constant';
import './app.scss';

type Props = {
  userInfo: {
    name: string,
    avatarUrl: string,
  },
  isAuthenticated: true,
  actions: Object,
};

class App extends PureComponent<Props> {
  redirectWhenAuthenticated(Component: Function, componentProps: Object): Function {
    return () => {
      if (this.props.isAuthenticated) {
        return <Redirect to={routes.ideas} />;
      }
      return <Component {...componentProps} />;
    };
  }

  redirectWhenNotAuthenticated(Component: Function, componentProps: Object): Function {
    return () => {
      if (!this.props.isAuthenticated) {
        return <Redirect to={routes.login} />;
      }
      return <Component {...componentProps} />;
    };
  }

  render() {
    const { actions, userInfo, isAuthenticated } = this.props;
    return (
      <div className="app">
        <SideNav
          userInfo={userInfo}
          isAuthenticated={isAuthenticated}
          logoutUser={actions.logoutUser}
        />
        <div className="app__body">
          <Router>
            <Switch>
              <Route
                exact
                path={routes.login}
                render={this.redirectWhenAuthenticated(LoginForm, { loginUser: actions.loginUser })}
              />
              <Route
                exact
                path={routes.home}
                render={this.redirectWhenAuthenticated(LoginForm, { loginUser: actions.loginUser })}
              />
              <Route
                exact
                path={routes.signup}
                render={this.redirectWhenAuthenticated(SignUpForm, {
                  signUpUser: actions.signUpUser,
                })}
              />
              <Route
                exact
                path={routes.ideas}
                render={this.redirectWhenNotAuthenticated(Ideas, {})}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: Object) {
  return {
    userInfo: state.user,
    isAuthenticated: state.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ signUpUser, loginUser, logoutUser }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
