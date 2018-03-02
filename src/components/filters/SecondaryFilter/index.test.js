import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Secondary from "./";
import {secondary} from "../../../test/mock/secondary.mock";

const handleClick = () => {};

describe('SecondaryFilter', () => {
  it('should render as span', () => {
    const wrapper = shallow(<Secondary {...secondary[0]} onClick={handleClick}/>);
    expect(wrapper.is('span')).toBeTruthy();
  });

  it('should render with text', () => {
    const wrapper = shallow(<Secondary {...secondary[0]} onClick={handleClick}/>);
    expect(wrapper.find(secondary[0].text)).toBeTruthy();
  });

  it('should handle click', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Secondary {...secondary[0]} onClick={onClick}/>);
    wrapper.find('span').simulate('click');
    expect(onClick.callCount).toBe(1);
  })
});
