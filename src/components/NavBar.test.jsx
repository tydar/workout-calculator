import { createShallow } from '@material-ui/core/test-utils';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should give us an AppBar component', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });
});
