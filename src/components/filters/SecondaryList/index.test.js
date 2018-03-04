import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {SecondaryList, mapStateToProp, mapDispatchToProp} from "./";
import {secondaries} from "../../../test/mock/secondary.mock";
import Secondary from "../Secondary";

const onClick = () => {};

describe('SecondaryList', () => {
  it('should render as ul', () => {
    const wrapper = shallow(<SecondaryList secondaries={secondaries} handleFilterClick={onClick}/>);
    expect(wrapper.is('div')).toBeTruthy();
  });

  it('should render Head on secondaries', () => {
    const wrapper = shallow(<SecondaryList secondaries={secondaries} handleFilterClick={onClick}/>);
    expect(wrapper.find('<h4>Secondaries</h4>')).toBeTruthy();
  });

  it('should render Head on no secondaries', () => {
    const wrapper = shallow(<SecondaryList secondaries={[]} handleFilterClick={onClick}/>);
    expect(wrapper.find('<h4>Please select a active_filter</h4>')).toBeTruthy();
  });

  it('should render as Secondary as secondaries length', () => {
    const wrapper = shallow(<SecondaryList secondaries={secondaries} handleFilterClick={onClick}/>);
    expect(wrapper.find(Secondary).length).toBe(secondaries.length);
  });

  it('should mapStateToProp', () => {
    const state = { filters: { secondaries: [] } };
    expect(mapStateToProp(state)).toEqual({secondaries: state.filters.secondaries});
  });

  it('should mapDispatchToProp', () => {
    const dispatch = () => {};
    expect(mapDispatchToProp(dispatch)).toHaveProperty('handleFilterClick');
    expect(mapDispatchToProp(dispatch)).toHaveProperty('handleSecondaryToggle');
  })
});
