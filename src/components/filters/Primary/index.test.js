import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types'
import sinon from 'sinon';
import Primary from "./";
import Button from "material-ui/Button/Button";
import {primary} from "../../../test/mock/primary.moct";

const handleClick = () => {};
const Render = (prim = primary, spy = handleClick) => shallow(<Primary {...prim} onClick={spy}/>);

describe('Primary Component', () => {

  it('should render as a button', () => {
    expect(Render().is(Button)).toBeTruthy();
  });

  it('should render text', () => {
    expect(Render().contains(primary.text)).toBeTruthy();
  });

  it('should trigger onClick when clicked', () => {
    const spy = sinon.spy();
    const wrapper = Render(undefined, spy);
    wrapper.find(Button).simulate('click');
    expect(spy.callCount).toBe(1);
  });

  it('should set proptypes', () => {
    expect(Primary.proptype).toEqual({
      active: PropTypes.bool,
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  });

  it('should set style active to button if active', () => {
    expect(Render({...primary, active: true}).find('.active').length).toBe(1);
    expect(Render({...primary, active: false}).find('.active').length).toBe(0);
  })
});
