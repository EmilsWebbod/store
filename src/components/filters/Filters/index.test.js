import React from 'react';
import { shallow } from 'enzyme';
import {mapStateToProps, mapDispatchToProps, Filters} from './';
import {filters} from "../../../test/mock/filter.mock";
import FilterItem from "../FilterItem/index";

const handleSelect = () => {};

const render = () => {
  return shallow( <Filters filters={filters} onFilterSelect={handleSelect} /> );
};

describe('FilterItem', () => {
  it('should render as ul', () => {
    const wrapper = render();
    expect(wrapper.is('ul')).toBeTruthy();
  });

  it('should render a list of items', () => {
    const wrapper = render();
    expect(wrapper.find(FilterItem).length).toBe(filters.length);
  });

  it('should mapStateToProps', () => {
    const state = {filters: { filters: [] } };
    expect(mapStateToProps(state)).toEqual({
      filters: state.filters.filters
    });
  });

  it('should mapDispatchToProps', () => {
    expect(mapDispatchToProps(() => {}).onFilterSelect).toBeTruthy()
  });
});
