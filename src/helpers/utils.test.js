
import * as utils from './utils';
import {getIndexFromPropOf2dArray} from "./utils";

describe('UTILS', () => {
  it('should exist', () => {
    expect(utils).toBeTruthy();
  });

  let elements = [{
    id: "1"
  }, {
    id: "2"
  }];

  let element = {
    id: "0"
  };

  describe('Array helpers', () => {
    it('should find by id', () => {
      const element = {id: 0};
      const element2 = {id: 1};
      expect(utils.withId(element.id)(element2)).toBe(false);
      expect(utils.withId(element.id)(element)).toBe(true);
    });

    it('should add element to pure array', () => {
      const arr = utils.arrayAddEl(elements, element);
      expect(arr.length).toBe(elements.length+1);
      const arr2 = utils.arrayAddEl(elements, elements[0]);
      expect(arr2.length).toBe(elements.length);
    });

    it('should remove element from pure array', () => {
      const arr = utils.arrayRemoveEl(elements, elements[0]);
      expect(arr.length).toBe(elements.length-1);
      const arr2 = utils.arrayRemoveEl(elements, element);
      expect(arr2.length).toBe(elements.length)
    });

    it('should find indexes of 2d Array', () => {
      const i = 0;
      const j = 0;
      const arr = [{
        prop: [{ id: '1' }, { id: '2' }]
      }, {
        prop: [{ id: '3' }, { id: '4' }]
      }];
      expect(getIndexFromPropOf2dArray(arr, 'prop', arr[i]['prop'][j].id)).toEqual({i: i, j: j});
    })
  })
});
