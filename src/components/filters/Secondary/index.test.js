import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Secondary from "./";
import {secondary} from "../../../test/mock/secondary.mock";
import SecondaryFilter from '../SecondaryFilter'
import List from 'material-ui/List';

const handleClick = () => {};

describe('Secondary', () => {
  it('should render as ul', () => {
    const wrapper = shallow(<Secondary filters={secondary[0].filters} onClick={handleClick} />);
    expect(wrapper.is(List)).toBeTruthy();
  });

  it('should render SecondaryFilter matching filters', () => {
    const wrapper = shallow(<Secondary filters={secondary[0].filters} onClick={handleClick} />);
    expect(wrapper.find(SecondaryFilter).length).toBe(secondary[0].filters.length);
  });
});
