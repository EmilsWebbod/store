import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Secondary from "./";
import {secondary} from "../../../test/mock/secondary.mock";
import SecondaryFilter from '../SecondaryFilter'
import List, {
  ListItem
} from 'material-ui/List';
import PropTypes from 'prop-types';

const handleClick = () => {};
const Render = (onClick = handleClick, onToggle = handleClick) =>
  shallow(<Secondary filters={secondary[0].filters} onClick={onClick} onToggle={onToggle} />);

describe('Secondary', () => {
  it('should render as List', () => {
    expect(Render().is(List)).toBeTruthy();
  });

  it('should render SecondaryFilter matching filters', () => {
    expect(Render().find(SecondaryFilter).length).toBe(secondary[0].filters.length);
  });

  it('should set proptypes', () => {
    expect(Secondary.proptype).toEqual({
      filters: PropTypes.array.isRequired,
      onClick: PropTypes.func.isRequired,
      onToggle: PropTypes.func.isRequired
    })
  });

  it('should trigger onClick', () => {
    const spy = sinon.spy();
    expect(Render(spy).find(ListItem).simulate('click'));
    expect(spy.callCount).toBe(secondary[0].filters.length);
  });

  it('should trigger onToggle', () => {
    const spy = sinon.spy();
    expect(Render(undefined, spy).find(ListItem).simulate('click'));
    expect(spy.callCount).toBe(1);
  });
});
