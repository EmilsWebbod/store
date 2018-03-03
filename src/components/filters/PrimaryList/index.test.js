import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {PrimaryList, mapStateToProps, mapDispatchToProps} from './'
import Primary from '../Primary';
import {primaries} from "../../../test/mock/primary.moct";
import {Ul} from "../../global/list";
import {DEFAULT_STORE} from "../../../redux/store/index.test";
import Button from "material-ui/Button/Button";

const handleClick = () => {};
const Render = (spy = handleClick) => shallow(
  <PrimaryList primaries={primaries} handlePrimaryClick={spy}/>
);


describe('PrimaryList Component', () => {
  it('should create ul', () => {
    expect(Render().is(Ul)).toBeTruthy();
  });

  it('should create Primary items of array length', () => {
    expect(Render().find(Primary).length).toBe(primaries.length);
  });

  it('should handle on item click', () => {
    const spy = sinon.spy();
    Render(spy).find(Primary).forEach(el => el.shallow().find(Button).first().simulate('click'));
    expect(spy.callCount).toBe(primaries.length);
  });

  it('should mapStateToProps', () => {
    const state = DEFAULT_STORE;
    expect(mapStateToProps(state)).toEqual({
      primaries: state.filters.primaries,
      active: state.filters.active.primary
    });
  });

  it('should mapDispatchToProps', () => {
    expect(mapDispatchToProps(() => {}).handlePrimaryClick).toBeTruthy();
  })
});
