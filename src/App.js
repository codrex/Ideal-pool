// @flow
import React, { PureComponent } from 'react';
import SideNav from './components/SideNav';
import TextInput from './components/TextInput';
import Button from './components/Button';
import userPic from './assets/images/User_ProfilePic.png';

import './app.css';

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
        <TextInput name="" />
        <Button text="Button" />
      </div>
    );
  }
}

export default App;
