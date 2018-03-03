import React from 'react';
import { shallow } from 'enzyme';
import App from './';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

it('should render the App container as a div element', () => {
  const wrapper = shallow(<App>Test</App>);
  expect(wrapper.is(MuiThemeProvider)).toBeTruthy();
});
