import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
// eslint-disable-next-line
console.error = message => {
  throw new Error(message);
};
