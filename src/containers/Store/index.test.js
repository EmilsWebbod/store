import React from 'react';
import { shallow } from 'enzyme';
import { Store, mapDispatchToProps } from './';
import PrimaryList from '../../components/filters/PrimaryList/index';
import SecondaryList from '../../components/filters/SecondaryList/index';

describe('Store Container', () => {
  it('should render as a section element', () => {
    const wrapper = shallow(<Store/>);
    expect(wrapper.is('section')).toBeTruthy();
  });

  it('should render as a PrimaryList element', () => {
    const wrapper = shallow(<Store/>);
    expect(wrapper.find(PrimaryList)).toBeTruthy();
  });

  it('should render as a SecondaryList element', () => {
    const wrapper = shallow(<Store/>);
    expect(wrapper.find(SecondaryList)).toBeTruthy();
  });

  it('should mapDispatchToProps', () => {
    const dispatch = () => {};
    expect(mapDispatchToProps(dispatch).getPrimaries).toBeTruthy();
    expect(mapDispatchToProps(dispatch).getFilters).toBeTruthy();
  });

  // TODO: Should check if component did mount
  it('should trigger componentDidMount()', () => {
    const wrapper = shallow(<Store/>);
  })
});
