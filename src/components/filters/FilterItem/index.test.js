import React from 'react';
import { shallow, render } from 'enzyme';
import FilterItem from './';
import {filters} from "../../../test/mock/filter.mock";
import * as sinon from "sinon";

const handleClick = () => {};

const Mount = (filter = filters[0], handleClick = handleClick) => {
  return shallow(<FilterItem {...filter} onSelect={handleClick} />);
};

describe('FilterItem', () => {
  it('should render as list', () => {
    const wrapper = Mount();
    expect(wrapper.is('select')).toBeTruthy();
  });

  it('should render option to length of options', () => {
    const wrapper = Mount();
    expect(wrapper.find('option').length).toBe(filters[0].options.length);
  });

  it('should render text of options', () => {
    const wrapper = Mount();
    expect(wrapper.find(filters[0].options[0].text)).toBeTruthy();
  });

  it('should set selected', () => {
    const wrapper = Mount();
    expect(wrapper.find(filters[0].options[0].text)).toBeTruthy();
  });

  it('should trigger on select', (done) => {
    const filter_i = 0;
    const option_i = 0;
    const onSelect = (value) => {
      expect(filters[filter_i].options[option_i].id).toBe(value.target.value);
      done();
    };
    const wrapper = Mount(filters[filter_i], onSelect);
    wrapper.find('select').simulate('change', {target: {value: filters[filter_i].options[option_i].id }});
  })
});
