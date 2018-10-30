// @flow
import React, { PureComponent } from 'react';
import SideNav from './components/SideNav';
import userPic from './assets/images/User_ProfilePic.png';

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
      <div className="App">
        <SideNav {...props} />
      </div>
    );
  }
}

export default App;
