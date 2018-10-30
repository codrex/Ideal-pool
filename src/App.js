// @flow
import React, { PureComponent } from 'react';
import SideNav from './components/SideNav';
import IdeaItem from './components/IdeaItem';
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
          <IdeaItem editMode />
        </div>
      </div>
    );
  }
}

export default App;
