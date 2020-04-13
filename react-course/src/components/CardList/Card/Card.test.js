import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';
import CardBody from './CardBody/CardBody';
import CardList from '../CardList';

configure({adapter: new Adapter()});

describe('<Card />', () => {
    it('it should', () => {
        const wrapper = shallow(<Card />);
        console.log(wrapper.children().length);
        expect(wrapper.find(<div/>)).toHaveLength(1);
    });

    it('it should', () => {
        const wrapper = shallow(<Card />).dive();
        expect(wrapper.find(CardList)).toHaveLength(1);
    });
});