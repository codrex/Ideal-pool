// @flow
import React, { PureComponent } from 'react';
import SideNav from './components/SideNav';
import Ideas from './components/Ideas';
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
          <Ideas />
        </div>
      </div>
    );
  }
}

export default App;
