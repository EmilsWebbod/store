import React from 'react';
import PropTypes from 'prop-types';
import {shallow} from "enzyme";
import Carousel from './';
import Grid from 'material-ui/Grid';
import {mock_list} from "../../../../test/mock/list.mock";

const item = mock_list[0];

const Render = () => shallow(<Carousel images={item.images}/>);

describe('TEST', () => {
    it('should render as div', () => {
        expect(Render().is(Grid)).toBeTruthy();
    });

    it('should set proptypes', () => {
        expect(Carousel.proptypes).toBeTruthy();
    });
});
