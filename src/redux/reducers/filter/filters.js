
import {
  FILTER_CLEAR_FILTERS, FILTER_CLEAR_PRIMARY, FILTER_CLEAR_SECONDARY,
  FILTER_SET_FILTERS, FILTER_SET_LIST_TO_FILTER, FILTER_SET_PRIMARY,
  FILTER_SET_SECONDARY, FILTER_SET_SECONDARY_TO_PRIMARY, FILTER_TOGGLE_FILTERS,
  FILTER_TOGGLE_SECONDARY_FILTER, ACTIVE_CLEAR_CATEGORY,
  ACTIVE_SET_CATEGORY, ACTIVE_SET_FILTER, ACTIVE_CLEAR_FILTER, SHOPPING_SET_LIST, SHOPPING_CLEAR_LIST, ACTIVE_SET_ITEM,
  ACTIVE_SET_PRIMARY, FILTER_TOGGLE_SECONDARY
} from "../../actions/actions";

import {getIndexFromPropOf2dArray, withId} from "../../../helpers/utils";

export const DEFAULT_FILTER_STATE = {
  primaries: [],
  secondaries: [],
  filters: [],
  active: {
    category: null,
    primary: null,
    filter: null,
    item: null
  }
};

export default function filter(state = DEFAULT_FILTER_STATE, action) {
  return {
    primaries: primaries(state.primaries, action),
    secondaries: secondaries(state.secondaries, action),
    filters: filters(state.filters, action),
    active: active(state.active, action)
  };
}

export function active(state = DEFAULT_FILTER_STATE.active, action) {
  return {
    category: active_category(state.category, action),
    filter: active_filter(state.filter, action),
    item: active_item(state.item, action),
    primary: active_primary(state.primary, action)
  }
}

export function active_category(state = DEFAULT_FILTER_STATE.active.category, action) {
  switch (action.type) {
    case ACTIVE_SET_CATEGORY: return action.category;
    case ACTIVE_CLEAR_CATEGORY: return null;
    default: return state
  }
}

export function active_primary(state = DEFAULT_FILTER_STATE.active.primary, action) {
  switch (action.type) {
    case ACTIVE_SET_PRIMARY: return action.primary;
    default: return state;
  }
}

export function active_filter(state = DEFAULT_FILTER_STATE.active.filter, action) {
  switch (action.type) {
    case ACTIVE_SET_FILTER:
    case SHOPPING_SET_LIST:
      if (!action.filter) {
        console.warn('Set list but no filter defined');
        return state;
      } else {
        return action.filter;
      }
      break;
    case SHOPPING_CLEAR_LIST:
    case ACTIVE_CLEAR_FILTER: return null;
    default: return state
  }
}

export function active_item(state = DEFAULT_FILTER_STATE.active.item, action) {
  switch (action.type) {
    case ACTIVE_SET_ITEM:
      return action.item;
    default: return state;
  }
}

const DEFAULT_PRIMARIES = [];

export function primaries(state = DEFAULT_PRIMARIES, action) {
  switch (action.type) {
    case FILTER_SET_PRIMARY:
      return action.primaries;
    case FILTER_SET_SECONDARY_TO_PRIMARY:
      let arr = [...state];
      const i = arr.findIndex(withId(action.primary_id));
      if (i === -1) { console.error('No primary with id: ', action.primary_id); return state; }
      if (arr[i].secondary) { console.warn('Secondary already exist to primary', action.primary_id)}
      arr[i].secondary = action.secondary;
      return arr;
    case FILTER_CLEAR_PRIMARY:
      return [];
    default: return state;
  }
}

const DEFAULT_SECONDARIES = [];

export function secondaries(state = DEFAULT_SECONDARIES, action) {
  switch (action.type) {
    case FILTER_TOGGLE_SECONDARY:
      const s_i = state.findIndex(x => x.id === action.secondary_id);
      if (s_i === -1) {
        console.warn('Could not find secondary with id: ', action.secondary_id);
        return state;
      }
      return state.map(secondary => {
        if (secondary.id === action.secondary_id) {
          return {
            ...secondary,
            active: !secondary || !secondary.active
          }
        }
        return secondary;
      });
    case FILTER_TOGGLE_SECONDARY_FILTER:
      const s = action.secondary_i;
      const f = action.filter_i;
      if (!state[s] || !state[s].filters[f]) {
        console.error('Could not find active_filter connected to secondary i active_filter f: ', s, f);
        return state;
      }
      const arr = [ ...state ];
      arr[s].filters[f].active = !arr[s].filters[f].active;
      return arr;
    case FILTER_SET_SECONDARY:
      return action.secondaries;
    case FILTER_SET_LIST_TO_FILTER:
      const {i, j} = getIndexFromPropOf2dArray(state, 'filters', action.filter_id);
      if (i === -1) {
        console.warn('Could not find secondary with id', action.filter_id);
        return state;
      }
      const newState = [...state];
      newState[i].filters[j].list = action.list;
      return newState;
    case FILTER_CLEAR_SECONDARY:
      return [];
    default: return state;
  }
}

const DEFAULT_FILTERS = [];

export function filters(state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case FILTER_SET_FILTERS:
      return action.filters;
    case FILTER_CLEAR_FILTERS:
      return [];
    case FILTER_TOGGLE_FILTERS:
      return state.map(filter => {
        return {
          ...filter,
          options: filter.options.map(option => {
            if (option.id === action.option_id) {
              option.selected = true;
            } else if (option.selected) {
              option.selected = false;
            }
            return option;
          })
        }
      });
    default: return state;
  }
}
