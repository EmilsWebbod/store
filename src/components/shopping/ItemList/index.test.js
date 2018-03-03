import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {ItemList, mapStateToProps, mapDispatchToProps} from './'
import PropTypes from 'prop-types';
import {mock_list} from "../../../test/mock/list.mock";
import Item from "../Item/index";
import GridList from 'material-ui/GridList';

const items = mock_list;
const Render = () => shallow(<ItemList items={items} />);

describe('ITEM LIST', () => {
  it('should render as a ul', () => {
    expect(Render().is(GridList)).toBeTruthy();
  });

  it('should set propTypes', () => {
    expect(ItemList.proptype).toEqual({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  });

  it('should mapStateToProps', () => {
    const state = { shopping: { list: [] } };
    expect(mapStateToProps(state)).toEqual({
      items: state.shopping.list
    })
  });

  it('should mapDispatchToProps', () => {
    const dispatch = () => {};
    expect(mapDispatchToProps(dispatch)).toHaveProperty('handleItemClick');
  });

  it('should render set of items', () => {
    expect(Render().find(Item).length).toBe(items.length);
  })
});
