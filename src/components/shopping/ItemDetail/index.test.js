import React from 'react';
import {shallow} from "enzyme";
import PropTypes from 'prop-types';
import {ItemDetail, mapStateToProps, mapDispatchToProps} from './';
import {mock_list} from "../../../test/mock/list.mock";
import * as sinon from "sinon";

const item = mock_list[0];
const handleClick = () => {};
const Render = (click = handleClick) => shallow(<ItemDetail {...item} handleItemClick={click} />);

describe('ITEM DETAIL', () => {
  it('should render as div', () => {
    expect(Render().is('div')).toBeTruthy();
  });

  it('should render text as content', () => {
    expect(Render().contains(item.text)).toBeTruthy();
  });

  it('should handle itemClick', () => {
    const spy = sinon.spy();
    Render(spy).find('button').simulate('click');
    expect(spy.callCount).toBe(1);
  });

  it('should set proptypes', () => {
    expect(ItemDetail.proptypes).toEqual({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      images: PropTypes.array
    })
  });

  it('should mapStateToProps', () => {
    const state = { filters: { active: { item: {id: 'test', text: 'text' } } } };
    expect(mapStateToProps(state)).toEqual({
      id: state.filters.active.item.id,
      text: state.filters.active.item.text
    })
  });

  it('should mapDispatchToProps', () => {
    const dispatch = () => {};
    expect(mapDispatchToProps(dispatch)).toHaveProperty('handleItemClick')
  })
});
