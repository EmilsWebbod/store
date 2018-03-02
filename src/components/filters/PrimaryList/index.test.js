import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {PrimaryList, mapStateToProps, mapDispatchToProps} from './'
import Primary from '../Primary';
import {primaries} from "../../../test/mock/primary.moct";

const handleClick = () => {};

describe('PrimaryList Component', () => {
  it('should create ul', () => {
    const wrapper = shallow(<PrimaryList primaries={primaries} handlePrimaryClick={handleClick}/>);
    expect(wrapper.is('ul')).toBeTruthy();
  });

  it('should create Primary items of array length', () => {
    const wrapper = shallow(<PrimaryList primaries={primaries} handlePrimaryClick={handleClick}/>);
    expect(wrapper.find(Primary).length).toBe(primaries.length);
  });

  // Todo: Find a way to trigger function
  it('should handle on item click', () => {
    const buttonClicked = sinon.spy();
    const wrapper = shallow(<PrimaryList primaries={primaries} handlePrimaryClick={buttonClicked}/>);
  });

  it('should mapStateToProps', () => {
    const state = { filters: { primaries: [] } };
    expect(mapStateToProps(state)).toEqual({primaries: state.filters.primaries});
  });

  it('should mapDispatchToProps', () => {
    expect(mapDispatchToProps(() => {}).handlePrimaryClick).toBeTruthy();
  })
});
