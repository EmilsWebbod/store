import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Primary from "./";
import Button from "material-ui/Button/Button";

const handleClick = () => {};

describe('Primary Component', () => {
  const id = '0';
  const text = 'Test';

  it('should render as a button', () => {
    const wrapper = shallow(<Primary id={id} text={text} onClick={handleClick}/>);
    expect(wrapper.is(Button)).toBeTruthy();
  });

  it('should render text', () => {
    const wrapper = shallow(<Primary id={id} text={text} onClick={handleClick}/>);
    expect(wrapper.find(text)).toBeTruthy();
  });

  it('should trigger onClick when clicked', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Primary id={id} text={text} onClick={onButtonClick}/>);
    wrapper.find(Button).simulate('click');
    expect(onButtonClick.callCount).toBe(1);
  });
});
