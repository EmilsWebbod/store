import React from 'react';
import {shallow} from "enzyme";
import PropTypes from 'prop-types';
import {CartList, mapStateToProps, mapDispatchToProps} from './';
import {mock_list2} from "../../../test/mock/list.mock";
import CartItem from "../CartItem/index";
import List from 'material-ui/List';

const items = mock_list2;
const Render = () => shallow(<CartList items={items}/>);

describe('TEST', () => {
    it('should render as ul', () => {
        expect(Render().is(List)).toBeTruthy();
    });

    it('should render items from list', () => {
      expect(Render().find(CartItem).length).toBe(items.length);
    });

    it('should set proptypes', () => {
        expect(CartList.proptypes).toEqual({
          items: PropTypes.array
        });
    });

    it('should mapStateToProps', () => {
        const state = { cart: { list: { items } } };
        expect(mapStateToProps(state)).toEqual({
          items: state.cart.list
        })
    });

    it('should mapDispatchToProps', () => {
        const dispatch = () => {};
        expect(mapDispatchToProps(dispatch)).toBeTruthy()
    })
});
