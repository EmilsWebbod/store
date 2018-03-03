import filter, * as reducers from './filters';
import * as actions from '../../actions/actions';
import {primaries, primary} from "../../../test/mock/primary.moct";
import {secondaries, secondary} from "../../../test/mock/secondary.mock";
import {filters} from "../../../test/mock/filter.mock";
import {mock_list} from "../../../test/mock/list.mock";

describe('REDUCERS', () => {
  it('should exist', () => {
    expect(reducers).toBeTruthy()
  });

  it('should init active_filter state', () => {
    expect(filter(reducers.DEFAULT_FILTER_STATE, {type: null})).toEqual({
      primaries: reducers.DEFAULT_FILTER_STATE.primaries,
      secondaries: reducers.DEFAULT_FILTER_STATE.secondaries,
      filters: reducers.DEFAULT_FILTER_STATE.filters,
      active: reducers.DEFAULT_FILTER_STATE.active
    })
  });

  describe('ACTIVE', () => {
    it('should set active_category', () => {
      const category = 'Women';
      const category2 = 'Men';
      const action = actions.setActiveCategory(category);
      const action2 = actions.setActiveCategory(category2);

      const result = reducers.active_category(null, action);
      const result2 = reducers.active_category(action, action2);

      expect(result).toBe(category);
      expect(result2).toBe(category2);
    });

    it('should clear active_category', () => {
      const category = 'Children';
      const action = actions.clearActiveCategory();
      const result = reducers.active_category(category, action);
      expect(result).toBe(null);
    });

    it('should set active filter', () => {
      const filter = 'Filter';
      const action = actions.setActiveFilter(filter);
      const result = reducers.active_filter('', action);
      expect(result).toBe(filter);
    });

    it('should set active filter on sett list', () => {
      const filter = 'Filter2';
      const action = actions.setShoppingList([], filter);
      const result = reducers.active_filter('', action);
      expect(result).toEqual(filter);
    });

    it('should clear active filter', () => {
      const action = actions.clearActiveFilter();
      const result = reducers.active_filter('', action);
      expect(result).toBe(null);
    });

    it('should clear filter on clear list', () => {
      const filter = 'Filter2';
      const action = actions.clearShoppingList();
      const result = reducers.active_filter(filter, action);
      expect(result).toEqual(null);
    });

    it('should set active item', () => {
      const item = {id: '1', text: 'test'};
      const action = actions.setActiveItem(item);
      const result = reducers.active_item(undefined, action);
      expect(result).toEqual(item);
    });

    it('should set active primary', () => {
      const primary = {id: '1', text: 'Primary 1'};
      const action = actions.setActivePrimary(primary);
      const result = reducers.active_primary(undefined, action);
      expect(result).toEqual(primary);
    })
  });

  describe('FILTERS', () => {

    describe('PRIMARY', () => {
      it('should set filters to primary', () => {
        const action = actions.setFilterPrimary(primaries);
        const action_empty = actions.setFilterPrimary([]);
        const result = reducers.primaries(null, action);
        const result2 = reducers.primaries(result, action_empty);

        expect(result).toEqual(primaries);
        expect(result2).toEqual([]);
      });

      it('should set secondary to primaries', () => {
        const i = 1;
        const action = actions.setFilterSecondaryToPrimary(primaries[i], secondary);
        let result = reducers.primaries(primaries, action);
        reducers.primaries(primaries, action);
        expect(result[i].secondary).toEqual(secondary)
      });

      it('should clear active_filter from primaries', () => {
        const action = actions.clearFilterPrimary();
        const result = reducers.primaries(primaries, action);
        expect(result).toEqual([]);
        expect(result.length).toBe(0);
      })
    });

    describe('SECONDARY', () => {
      it('should set active_filter to secondaries', () => {
        const action = actions.setFilterSecondary(secondaries);
        const result = reducers.secondaries([], action);
        expect(result).toEqual(secondaries);
      });

      it('should clear secondaries when given primary', () => {
        const action = actions.clearFilterSecondary();
        const result = reducers.secondaries(secondaries, action);
        expect(result).toEqual([]);
      });

      it('should toggle active_filter in secondaries', () => {
        const s = 0;
        const f = 0;
        const action = actions.toggleFilterSecondary(s, f);
        const result = reducers.secondaries(secondaries[s].secondary, action);
        expect(result[s].filters[f].active).toBe(true);
      });

      it('should set list to secondaries active_filter', () => {
        const p = 1; // primary
        const s = 0; // Secondary
        const f = 0; // active_filter
        const id = secondaries[p].secondary[s].filters[f].id;
        const action = actions.setShoppingListToFilter(id, mock_list);
        const result = reducers.secondaries(secondaries[p].secondary, action);
        expect(result[s].filters[f].list).toEqual(mock_list);
      });

      it('should toggle secondary tab', () => {
        const secondary = secondaries[0].secondary[0];
        const action = actions.toggleSecondary(secondary.id);
        let result = reducers.secondaries(secondaries[0].secondary, action);
        expect(result[0].active).toBe(true);
        expect(result[1].active).toBe(undefined);
        result = reducers.secondaries(result, action);
        expect(result[0].active).toBe(false);
      })
    });

    describe('FILTERS', () => {
      it('should set filters to active_filter', () => {
        const action = actions.setFilterFilter(filters);
        const result = reducers.filters([], action);
        expect(result).toEqual(filters);
      });

      it('should clear filters of filters', () => {
        const action = actions.clearFilterFilter();
        const result = reducers.filters(filters, action);
        expect(result).toEqual([]);
      });

      it('should toggle active_filter', () => {
        const f_i = 0;
        const o_i = 0;
        const option_id = filters[f_i].options[o_i].id;
        const action = actions.toggleFilterFilter(option_id);
        const result = reducers.filters(filters, action);
        expect(result[f_i].options[o_i].selected).toBe(true);
      });
    })
  });
});
