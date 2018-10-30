// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '..';

describe('Avatar', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Avatar>
        <img src="" alt="" />
      </Avatar>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
