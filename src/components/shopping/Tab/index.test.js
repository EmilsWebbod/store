import React from 'react';
import { shallow } from 'enzyme';
import Tab from './';
import * as sinon from "sinon";
import PropTypes from 'prop-types'

import {secondary} from "../../../test/mock/secondary.mock";
import Chip from "material-ui/Chip/Chip";

const handleClick = () => {};
const Render = (filters = secondary[0].filters[0],
                click = handleClick) => shallow(<Tab {...filters} onClick={click}/>);

describe('Tab', () => {
  it('should render as button', () => {
    expect(Render().is(Chip)).toBeTruthy();
  });

  it('should set proptypes', () => {
    expect(Tab.proptypes).toEqual({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      onDelete: PropTypes.func.isRequired
    });
  });

  it('should render text as content', () => {
    expect(Render().find(secondary[0].filters[0].text)).toBeTruthy();
  });

  it('should handle on click', () => {
    const spy = sinon.spy();
    const wrapper = Render(undefined, spy);
    wrapper.find(Chip).simulate('click');
    expect(spy.callCount).toBe(1);
  });
});
