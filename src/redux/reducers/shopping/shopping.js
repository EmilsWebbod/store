
import {
  SHOPPING_ADD_DRIFT,
  SHOPPING_CLEAR_DRIFT, SHOPPING_CLEAR_LIST, SHOPPING_PUSH_LIST, SHOPPING_REMOVE_DRIFT, SHOPPING_SET_DRIFT,
  SHOPPING_SET_LIST
} from "../../actions/actions";
import {arrayRemove, getIndexFrom2dArray} from "../../../helpers/utils";

export const DEFAULT_SHOPPING_STATE = {
  list: [],
  drift: {
    updated: 0, // To force render. Will not update when array change.
    filter: [], // String
    list: [] // 2D Array
  }
};

export default function shopping(state = DEFAULT_SHOPPING_STATE, action) {
  return {
    list: list(state.list, action),
    drift: drift(state.drift, action)
  };
}

export function list(state = DEFAULT_SHOPPING_STATE.list, action) {
  switch (action.type) {
    case SHOPPING_SET_LIST:
      return action.list;
    case SHOPPING_PUSH_LIST:
      return state.concat(action.list);
    case SHOPPING_CLEAR_LIST:
      return DEFAULT_SHOPPING_STATE.list;
    default:
      return state;
  }
}

export function drift(state = DEFAULT_SHOPPING_STATE.drift, action) {
  let newState;
  switch (action.type) {
    case SHOPPING_SET_DRIFT:
      return action.drift;
    case SHOPPING_CLEAR_DRIFT:
      return DEFAULT_SHOPPING_STATE.drift;
    case SHOPPING_ADD_DRIFT:
      newState = {...state};
      newState.updated += 1;
      const found = getIndexFrom2dArray(state.list, action.item.id);
      if (found.i !== -1) {
        console.info('Item already added with id: ', action.item.id);
        return state;
      }
      return driftAdd(newState, action);
      break;
    case SHOPPING_REMOVE_DRIFT:
      const {i, j} = getIndexFrom2dArray(state.list, action.item_id);
      if (i === -1) {
        console.warn('Could not find Item in drift with id: ', action.item_id);
        return state;
      }

      newState = {...state};
      newState.list[i] = arrayRemove(newState.list[i], j);

      if(newState.list[i].length === 0) {
        newState.list = arrayRemove(newState.list, i);
        newState.filter = arrayRemove(newState.filter, i);
      }

      return newState;
      break;
    default: return state;
  }
}
// handle 3D array by searching with 3 headers
function driftAdd(state, action) {
  let i = findItem(state, action);
  //console.log(p, s, f)
  if (i === -1) {
    state.filter.push(action.filter);
    state.list.push([]);
    i = state.filter.length-1;
  }

  state.list[i].push(action.item);
  return state;
}

function driftRemove(state, action) {

}

function findItem(state, action) {
  return state.filter.findIndex(x => x === action.filter);
}
