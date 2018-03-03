import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Item from './'
import PropTypes from 'prop-types';
import {mock_list} from "../../../test/mock/list.mock";
import * as sinon from "sinon";
import Card from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';

const item = mock_list[0];
const handleClick = () => {};
const Render = (click = handleClick) => shallow(<Item {...item} onClick={click} />);

describe('ITEM', () => {
  it('should render as div', () => {
    expect(Render().is(Card)).toBeTruthy();
  });

  it('should set proptypes', () => {
    expect(Item.proptypes).toEqual({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  });

  it('should render with styles', () => {
    //expect(Render().contains('styles')).toBeTruthy();
  });

  it('should handle on click', () => {
    const spy = sinon.spy();
    Render(spy).find(IconButton).first().simulate('click');
    expect(spy.callCount).toBe(1);
  });

  it('should render text as content', () => {
    expect(Render().contains(item.text)).toBeTruthy();
  })
});
