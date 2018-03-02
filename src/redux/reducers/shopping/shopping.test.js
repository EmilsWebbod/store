
import shopping, {DEFAULT_SHOPPING_STATE, list, drift} from './shopping';
import {
  addShoppingDrift,
  clearShoppingDrift, clearShoppingList, pushShoppingList, removeShoppingDrift, setShoppingDrift,
  setShoppingList
} from "../../actions/actions";
import {mock_list, mock_list2} from "../../../test/mock/list.mock";

describe('SHOPPING', () => {
  it('should set default state', () => {
    expect(DEFAULT_SHOPPING_STATE).toEqual({
      list: [],
      drift: {
        updated: 0,
        filter: [], // String
        list: [] // 2D
      }
    })
  });

  it('should return correct on init', () => {
    expect(shopping(undefined, {type: null})).toEqual(DEFAULT_SHOPPING_STATE);
  });

  describe('LIST', () => {
    it('should set item to list', () => {
      const action = setShoppingList(mock_list);
      const result = list(undefined, action);
      expect(result).toEqual(mock_list)
    });

    it('should push item to list', () => {
      const action = pushShoppingList(mock_list2);
      const result = list(mock_list, action);
      expect(result.length).toBe(mock_list.length + mock_list2.length);
    });

    it('should clear items from list', () => {
      const action = clearShoppingList();
      const result = list(mock_list, action);
      expect(result).toEqual([]);
    });
  });

  describe('DRIFT', () => {
    const _drifts = [[],[]];

    it('should set list to drift', () => {
      const action = setShoppingDrift(_drifts);
      const result = drift(undefined, action);
      expect(result).toEqual(_drifts)
    });

    it('should clear drift', () => {
      const action = clearShoppingDrift();
      const result = drift(_drifts, action);
      expect(result).toEqual(DEFAULT_SHOPPING_STATE.drift);
    });

    // First use the add items to create drift list.
    // Then we can edit it after
    let state = undefined;
    it('should add item to drift', () => {
      const item = (id) => ({id: id, text: 'Test'});
      const filter_sections = [1,2,3,4,2,1,3,4,2].map(x => 'Filter_' + x);
      const actions = filter_sections.map((x, i) => addShoppingDrift(x, item(i)));

      actions.forEach(action => {
        state = drift(state, action);
      });

      filter_sections.forEach((x, i) => {
        const filter_i = x.slice(-1) - 1;
        const res = state.list[filter_i].findIndex(x => x.id === i);
        expect(res).toBeGreaterThan(-1);
      });
    });

    it('should remove item from drift', () => {
      const filter_i = 0;
      const item_i = 0;
      const id = state.list[filter_i][item_i].id;
      const action = removeShoppingDrift(id);
      const result = drift(state, action);
      // Arrays may be empty after removing drift item
      if (!result.list[filter_i] || !result.list[filter_i][item_i]) {
        expect(0).toBe(0);
      } else {
        expect(result.list[filter_i][item_i].id).not.toBe(id);
      }
    })
  });
});
