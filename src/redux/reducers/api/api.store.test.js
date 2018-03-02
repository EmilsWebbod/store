
import * as sinon from "sinon";
import {filters} from "../../../test/mock/filter.mock";
import {apiGetFilters, apiGetList} from "./api.store";

describe('API', () => {
  it('should get filters and dispatch setFilters', (done) => {
    const spy = sinon.spy();
    const state = () => ({ filters: { filters: [] } });
    const result = apiGetFilters()(spy, state);
    setTimeout(() => {
      sinon.assert.callCount(spy, 2);
      done();
    }, 110)
  });

  it('should not get filters if set', (done) => {
    const spy = sinon.spy();
    const state = () => ({ filters: { filters: filters } });
    const result = apiGetFilters()(spy, state);
    setTimeout(() => {
      sinon.assert.callCount(spy, 1);
      done();
    }, 110)
  });


  describe('SHOPPING API', () => {
    it('should apiGetList', () => {
      const spy = sinon.spy();
      const state = () => ({ shopping: { list: [] } });
      const result = apiGetList()(spy, state);
      // TODO FIX TEST: FAILING ON SET TIMEOUT
    });
  })
});
