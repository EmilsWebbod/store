import React from 'react';
import {shallow} from "enzyme";
import PropTypes from 'prop-types';
import CartItem from './';
import {mock_list} from "../../../test/mock/list.mock";

const item = mock_list[0];
const Render = () => shallow(<CartItem {...item} />);

describe('TEST', () => {
    it('should render as div', () => {
        expect(Render().is('div')).toBeTruthy();
    });

    it('should render text as content', () => {
      expect(Render().contains(item.text)).toBeTruthy();
    });

    it('should set proptypes', () => {
        expect(CartItem.proptypes).toEqual({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        });
    });
});
