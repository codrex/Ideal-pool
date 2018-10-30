// @flow
import React, { PureComponent } from 'react';
import IdeaPoolIcon from '../../assets/images/IdeaPool_icon.png';
import Avatar from '../Avatar';
import './side-nav.scss';

type UserInfo = {
  name: string,
  avatarUrl: string,
};

type Props = {
  userInfo: UserInfo,
  isAuthenticated: boolean,
};
class SideNav extends PureComponent<Props> {
  static AppIcon() {
    return (
      <Avatar text="The Idea Pool">
        <img src={IdeaPoolIcon} alt="Idea Pool icon" />
      </Avatar>
    );
  }

  static UserAvatar(props: UserInfo) {
    const { name, avatarUrl } = props;
    return (
      <Avatar text={name} className="side-nav__avatar">
        <img src={avatarUrl} alt="user avatar" />
      </Avatar>
    );
  }

  render() {
    const { userInfo, isAuthenticated } = this.props;
    return (
      <div className="side-nav">
        <SideNav.AppIcon />
        <hr />
        {isAuthenticated && <SideNav.UserAvatar {...userInfo} />}
      </div>
    );
  }
}

export default SideNav;
