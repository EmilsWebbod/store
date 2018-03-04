import React from 'react';
import { shallow } from 'enzyme';
import { TabList } from './';
import {secondaries} from "../../../test/mock/secondary.mock";
import {mapDispatchToProps, mapStateToProps} from "./index";

const secondary = secondaries[0].secondary;
const Render = () => shallow(<TabList secondaries={secondary} />);

describe('TabList', () => {
  it('should render as ul', () => {
    expect(Render().is('div')).toBeTruthy();
  });

  it('should mapStateToProps', () => {
    const state = { filters: { secondaries: []} };
    expect(mapStateToProps(state)).toEqual({
      secondaries: state.filters.secondaries
    })
  });

  it('should mapDispatchToProps', () => {
    const state = { filters: { secondaries: []} };
    expect(mapDispatchToProps(state)).toHaveProperty('handleTabClick');
    expect(mapDispatchToProps(state)).toHaveProperty('handleTabDelete');
  });

  it('should render items from list', () => {
    secondary[0].filters[0].active = true;

    const activeFilters = secondary.reduce((n, o) => {
      return o.filters.reduce((r, obj) => obj.active ? r+1 : r, 0) + n
    }, 0);
    expect(Render().find('Tab').length).toBe(activeFilters);
  });


});
