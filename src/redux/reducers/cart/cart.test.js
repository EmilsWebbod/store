
import cart, {cart_list, DEFAULT_CART_STATE} from "./cart";
import {mock_list} from "../../../test/mock/list.mock";
import * as actions from "../../actions/actions";

describe('CART', () => {
  it('should be default state', () => {
    expect(DEFAULT_CART_STATE).toEqual({
      list: []
    })
  });

  it('should init with default state', () => {
    expect(cart(undefined, {type: null})).toEqual(DEFAULT_CART_STATE)
  });

  it('should add item to cart', () => {
    const item = mock_list[0];
    const action = actions.addItemToCart(item);
    expect(cart_list(undefined, action)).toEqual([item])
  });

  it('should not add duplicates', () => {
    const item = mock_list[0];
    const action = actions.addItemToCart(item);

    let result = cart_list(undefined, action);
    result = cart_list(result, action);

    expect(result).toEqual([item]);
    expect(result[0].total).toBe(1)
  })
});
