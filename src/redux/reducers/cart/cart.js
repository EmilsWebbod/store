
import {CART_ADD_ITEM} from "../../actions/actions";

export const DEFAULT_CART_STATE = {
  list: []
};

export default function cart(state = DEFAULT_CART_STATE, action) {
  return {
    list: cart_list(state.list, action)
  }
}

export function cart_list(state = DEFAULT_CART_STATE.list, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const i = state.findIndex(x => x.id === action.item.id);
      if (i !== -1) {
        let newState = [...state];
        newState[i].total = newState[i].total ? newState[i].total + 1 : 1;
        return state;
      }
      return [...state, action.item];
    default: return state;
  }
}
