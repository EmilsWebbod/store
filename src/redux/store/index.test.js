import { initialState as initialCounterState } from '../reducers/modules/counter';

const DEFAULT_STORE = {
  routing: { locationBeforeTransitions: null },
  counter: initialCounterState,
  filters: {
    primaries: [],
    secondaries: [],
    filters: [],
    active: {
      category: null,
      filter: null,
      item: null
    }
  },
  shopping: {
    list: [],
    drift: {
      filter: [],
      list: [],
      updated: 0
    }
  },
  api: {
    apiCalls: 0,
    apiPending: false,
    errorCount: 0,
    result: null,
    error: null
  },
  cart: {
    list: []
  }
};

describe('store', () => {
  it('should initialize a store on the production environment', () => {
    // Change process environemnt so we can test different environments
    process.env.NODE_ENV = 'production';

    const configureStore = require('./').default; // eslint-disable-line global-require
    const actual = configureStore().getState();
    const expected = { ...DEFAULT_STORE };

    expect(actual).toEqual(expected);
  });

  it('should initialize a store on the develop environment', () => {
    // Change process environemnt so we can test different environments
    process.env.NODE_ENV = 'develop';

    const configureStore = require('./').default; // eslint-disable-line global-require
    const actual = configureStore().getState();
    const expected = { ...DEFAULT_STORE };

    expect(actual).toEqual(expected);
  });
});
