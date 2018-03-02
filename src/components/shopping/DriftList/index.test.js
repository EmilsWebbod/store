import React from 'react';
import {shallow, render} from "enzyme";
import {DriftList, mapStateToProps, mapDispatchToProps} from './';
import PropTypes from 'prop-types';
import {mock_list, mock_list2, mock_list3} from "../../../test/mock/list.mock";
import * as sinon from "sinon";
import Drift from "../Drift/index";

const headers = [
  'Hats',
  'Shirts',
  'Pants'
];

const items = [
  mock_list,
  mock_list2,
  mock_list3
];

const handleClick = () => {};
const items_length = items.reduce((n, o) => o.length + n, 0);

const Render = (click = handleClick) =>
  shallow(<DriftList drift_headers={headers} drift_list={items} handleDriftClick={click} />);

describe('DRIFT LIST COMPONENT', () => {
  it('should render as ul', () => {
    expect(Render().is('ul')).toBeTruthy();
  });

  it('should render items from array', () => {
    expect(Render().find(Drift).length).toBe(items_length);
  });

  it('should render and handle click', () => {
    const spy = sinon.spy();
    Render(spy).find('Drift').forEach(x => x.shallow().find('button').simulate('click'));
    expect(spy.callCount).toBe(items_length);
  });

  it('should set proptypes', () => {
    expect(DriftList.proptypes).toEqual({
      drift_headers: PropTypes.array,
      drift_list: PropTypes.array
    })
  });

  it('should mapStateToProps', () => {
    const state = {
      shopping: {
        drift: {
          filter: [{id: 1}],
          list: [{id: 2}]
        }
      }
    };
    expect(mapStateToProps(state)).toEqual({
      drift_headers: state.shopping.drift.filter,
      drift_list: state.shopping.drift.list
    })
  });

  it('should mapDispatchToProps', () => {
    expect(mapDispatchToProps(() => {})).toHaveProperty('handleDriftClick');
  })
});
