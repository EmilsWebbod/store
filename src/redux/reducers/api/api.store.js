import {primaries} from "../../../test/mock/primary.moct";
import {secondaries} from "../../../test/mock/secondary.mock";
import {
  clearShoppingList,
  pushShoppingList,
  setFilterFilter, setFilterPrimary, setFilterSecondary,
  setFilterSecondaryToPrimary, setShoppingList
} from "../../actions/actions";


export const API_GET = 'api/active_filter/PRIMARY';
export const API_GET_PROMISE = 'api/active_filter/PRIMARY_PROMISE';
export const API_GET_PROMISE_PENDING = 'api/active_filter/PRIMARY_PROMISE_PENDING';
export const API_GET_PROMISE_FULFILLED = 'api/active_filter/PRIMARY_PROMISE_FULFILLED';
export const API_GET_PROMISE_FAILED = 'api/active_filter/PRIMARY_PROMISE_FAILED';

export const initialState = {
  apiCalls: 0,
  apiPending: false,
  errorCount: 0,
  result: null,
  error: null
};

export default function api(state = initialState, action) {
  let newState = {
    ...state
  };
  switch (action.type) {
    case API_GET_PROMISE:

      break;
    case API_GET_PROMISE_PENDING:
      const { apiCalls } = state;
      newState.apiPending = true;
      newState.apiCalls = apiCalls + 1;
      return newState;
      break;
    case API_GET_PROMISE_FULFILLED:
      newState.apiPending = false;
      newState.result = action.result;
      newState.error = null;
      break;
    case API_GET_PROMISE_FAILED:
      const { errorCount } = state;
      newState.errorCount = errorCount + 1;
      newState.apiPending = false;
      newState.error = action.error;
      break;
  }

  return newState;
}

export function apiGetPrimaries() {
  return (dispatch, getState) => {
    dispatch({
      type: API_GET_PROMISE,
      promise: new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(setFilterPrimary(primaries));
          resolve(primaries);
        }, 1000)
      })
    })
  }
}

export const getSecondaries = (id) => () => {
  return (dispatch, getState) => {
    dispatch({
      type: API_GET_PROMISE,
      promise: new Promise((resolve, reject) => {
        const { primaries } = getState().filters;

        const pri_i = primaries.findIndex(x => x.id === id);
        const {secondary} = primaries[pri_i];
        if (pri_i !== -1 && secondary) {
          console.log('Do not get secondaries. Already exist :)')
          dispatch(setFilterSecondary(secondary));
          return resolve(secondary)
        }

        setTimeout(() => {
          const sec_i = secondaries.findIndex(x => x.id === id);
          if (sec_i === -1) {
            reject('Could not find secondary connected to Primary: ' + id);
          } else {
            const { secondary } = secondaries[sec_i];
            dispatch(setFilterSecondaryToPrimary(id, secondary));
            dispatch(setFilterSecondary(secondary));
            return resolve(secondary);
          }
        }, 100)
      })
    })
  }
};

export const apiGetFilters = () => {
  return (dispatch, getState) => {
    dispatch({
      type: API_GET_PROMISE,
      promise: new Promise((resolve, reject) => {
        const { filters } = getState().filters;
        if ( filters.length > 0 ) { return resolve(filters); }
        setTimeout(() => {
          const { filters } = require("../../../test/mock/filter.mock");
          dispatch(setFilterFilter(filters));
          return resolve(filters);
        }, 100)
      })
    });
  }
};

// TODO: Should get query string in. Or should create query string from state.
export const apiGetList = filter => {
  return (dispatch, getState) => {
    dispatch({
      type: API_GET_PROMISE,
      promise: new Promise((resolve, reject) => {
        setTimeout(() => {
          const {id, text} = filter;
          const {mock_super_list} = require("../../../test/mock/list.mock");
          const i = mock_super_list.findIndex(x => x.id === id);
          if (i === -1) {
            console.log('Could not find list with id: ', id);
            dispatch(clearShoppingList());
            return reject();
          }
          dispatch(setShoppingList(mock_super_list[i].data, text));
          return resolve(mock_super_list[i].data);
        }, 100)
      })
    })
  }
};
