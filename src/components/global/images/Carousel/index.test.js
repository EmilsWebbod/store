import React from 'react';
import PropTypes from 'prop-types';
import {shallow} from "enzyme";
import Carousel from './';

const Render = () => shallow(<Carousel/>);

describe('TEST', () => {
    it('should render as div', () => {
        expect(Render().is('div')).toBeTruthy();
    });

    it('should set proptypes', () => {
        expect(Carousel.proptypes).toBeTruthy();
    });
});
