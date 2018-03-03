import React from 'react';
import {shallow} from "enzyme";
import Drift from './';
import PropTypes from 'prop-types';
import {mock_list} from "../../../test/mock/list.mock";
import * as sinon from "sinon";
import Button from 'material-ui/Button';

const item = mock_list[0];
const handleClick = () => {};
const Render = (click = handleClick) => shallow(<Drift {...item} onClick={click} />);

describe('DRIFT COMPONENT', () => {
  it('should render as a div', () => {
    expect(Render().is('div')).toBeTruthy();
  });

  it('should set proptypes', () => {
    expect(Drift.proptype).toEqual({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  });

  it('should render text as content', () => {
    expect(Render().contains(item.text)).toBeTruthy()
  });

  it('should handle onClick', () => {
    const spy = sinon.spy();
    Render(spy).find(Button).first().simulate('click');
    expect(spy.callCount).toBe(1);
  })
});
