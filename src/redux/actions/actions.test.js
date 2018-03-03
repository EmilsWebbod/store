import * as action from './actions';
import {primaries, primary} from '../../test/mock/primary.moct';
import {secondaries, secondary} from "../../test/mock/secondary.mock";
import {filters} from "../../test/mock/filter.mock";

describe('ACTIONS', () => {
  it('exist', () => {
    expect(action).toBeTruthy();
  });

  describe('ACTIVE', () => {
    it('should give correct action on setActiveCategory(active_category)', () => {
      const category = 'Women';
      expect(action.setActiveCategory(category)).toEqual({
        type: action.ACTIVE_SET_CATEGORY,
        category: category
      });
    });

    it('should give correct action on clearActiveCategory()', () => {
      expect(action.clearActiveCategory()).toEqual({
        type: action.ACTIVE_CLEAR_CATEGORY
      })
    });

    it('should give correct action on setActiveFilter(active_filter)', () => {
      const filter = 'Filter';
      expect(action.setActiveFilter(filter)).toEqual({
        type: action.ACTIVE_SET_FILTER,
        filter: filter
      })
    });

    it('should give correct action on clearActiveFilter()', () => {
      expect(action.clearActiveFilter()).toEqual({
        type: action.ACTIVE_CLEAR_FILTER
      })
    });

    it('should give correct action on setActiveItem(item)', () => {
      const item = {id: 'test', text: 'text'};
      expect(action.setActiveItem(item)).toEqual({
        type: action.ACTIVE_SET_ITEM,
        item: item
      })
    });

    it('should give correct action on setActivePrimary(primary)', () => {
      const primary = {id: 'test', text: 'text'};
      expect(action.setActivePrimary(primary)).toEqual({
        type: action.ACTIVE_SET_PRIMARY,
        primary: primary
      });
    });
  });

  describe('FILTERS', () => {

    describe('PRIMARY', () => {
      it('should give correct aciton on setFilterPrimary', () => {
        expect(action.setFilterPrimary(primaries)).toEqual({
          type: action.FILTER_SET_PRIMARY,
          primaries: primaries
        })
      });

      it('should give correct action on setSecondaryToPrimary(primary_id, secondary)', () => {
        expect(action.setFilterSecondaryToPrimary(primary.id, secondary)).toEqual({
          type: action.FILTER_SET_SECONDARY_TO_PRIMARY,
          primary_id: primary.id,
          secondary: secondary
        })
      });

      it('should give correct action on clearFilterPrimary()', () => {
        expect(action.clearFilterPrimary()).toEqual({
          type: action.FILTER_CLEAR_PRIMARY
        });
      });
    });

    describe('SECONDARY', () => {
      it('should give correct action on setFilterSecondary(secondaries)', () => {
        expect(action.setFilterSecondary(secondaries)).toEqual({
          type: action.FILTER_SET_SECONDARY,
          secondaries: secondaries
        })
      });

      it('should give correct action on clearFilterSecondary()', () => {
        expect(action.clearFilterSecondary()).toEqual({
          type: action.FILTER_CLEAR_SECONDARY,
        })
      });

      it('should give correct action on toggleFilterSecondary', () => {
        const secondary_i = 0;
        const filter_i = 0;
        expect(action.toggleFilterSecondary(secondary_i, filter_i)).toEqual({
          type: action.FILTER_TOGGLE_SECONDARY_FILTER,
          secondary_i: secondary_i,
          filter_i: filter_i
        })
      });

      it('should give correct action on setShoppingListSecondary(secondaries)', () => {
        const id = '0';
        expect(action.setShoppingListToFilter(id, [])).toEqual({
          type: action.FILTER_SET_LIST_TO_FILTER,
          filter_id: id,
          list: []
        })
      });

      it('should give correct action on toggleSecondary', () => {
        const id = '0';
        expect(action.toggleSecondary(id)).toEqual({
          type: action.FILTER_TOGGLE_SECONDARY,
          secondary_id: id
        })
      })
    });

    describe('FILTERS', () => {
      it('should give correct action on setFilterFilter(filters)', () => {
        expect(action.setFilterFilter(filters)).toEqual({
          type: action.FILTER_SET_FILTERS,
          filters: filters
        })
      });
      it('should give correct action on clearFilterFilter()', () => {
        expect(action.clearFilterFilter()).toEqual({
          type: action.FILTER_CLEAR_FILTERS,
        })
      });
      it('should give correct action on toggleFilterFilter(id)', () => {
        expect(action.toggleFilterFilter(filters[0].options[0].id)).toEqual({
          type: action.FILTER_TOGGLE_FILTERS,
          option_id: filters[0].options[0].id
        })
      });
    });
  });

  describe('SHOPPING', () => {
    describe('LIST', () => {
      it('should give correct action on setShoppingList(list)', () => {
        expect(action.setShoppingList([], '')).toEqual({
          type: action.SHOPPING_SET_LIST,
          list: [],
          filter: ''
        })
      });

      it('should give correct action on pushShoppingList(list)', () => {
        expect(action.pushShoppingList([])).toEqual({
          type: action.SHOPPING_PUSH_LIST,
          list: []
        })
      });

      it('should give correct action on clearShoppingList()', () => {
        expect(action.clearShoppingList()).toEqual({
          type: action.SHOPPING_CLEAR_LIST
        })
      });
    });

    describe('DRIFT', () => {
      it('should give correct action on addShoppingDrift(item)', () => {
        expect(action.addShoppingDrift('Filter', {})).toEqual({
          type: action.SHOPPING_ADD_DRIFT,
          filter: 'Filter',
          item: {}
        });
      });

      it('should give correct action on removeShoppingDrift(id)', () => {
        const id = '0';
        expect(action.removeShoppingDrift(id)).toEqual({
          type: action.SHOPPING_REMOVE_DRIFT,
          item_id: id
        });
      });

      it('should give correct action on setShoppingDrift(drift)', () => {
        expect(action.setShoppingDrift([])).toEqual({
          type: action.SHOPPING_SET_DRIFT,
          drift: []
        });
      });

      it('should give correct action on clearShoppingDrift()', () => {
        expect(action.clearShoppingDrift()).toEqual({
          type: action.SHOPPING_CLEAR_DRIFT
        });
      })
    })
  });

  describe('CART', () => {
    it('should give correct action in addItemToCart(item)', () => {
      const item  = {id: 'test', text: 'text', cost: '100'};
      expect(action.addItemToCart(item)).toEqual({
        type: action.CART_ADD_ITEM,
        item: item
      });
    })
  })
});





