import React from 'react';
import { shallow } from 'enzyme';
import SideNav from '..';

const props = {
  userInfo: {
    name: 'Joyce Lee',
    avatarUrl: '',
  },
  isAuthenticated: true,
};
describe('SideNav', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SideNav {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render UserAvatar when user is authenticated', () => {
    const wrapper = shallow(<SideNav {...props} />);
    expect(wrapper.find('UserAvatar').length).toBe(1);
  });

  it('should not render UserAvatar when user is not authenticated', () => {
    const wrapper = shallow(<SideNav {...props} isAuthenticated={false} />);
    expect(wrapper.find('UserAvatar').length).toBe(0);
  });
});
