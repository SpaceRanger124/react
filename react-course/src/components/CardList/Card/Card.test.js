import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

configure({adapter: new Adapter()});

describe('<Card />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card className='mt-1' readOnly={false} caption='testCaption' description='testDescription' />);
        jest.useFakeTimers();
    });

    it('it should have Loader component', () => {
        expect(wrapper.find('Loader').length).toEqual(1);
    });

    it('it should have Card component', () => {
        jest.advanceTimersByTime(3000);
        expect(wrapper.find('Card').length).toEqual(1);
    });

    it('it should have CardHeader component', () => {
        jest.advanceTimersByTime(3000);
        let card = wrapper.find('Card').dive();
        expect(card.find('CardHeader').length).toEqual(1);
        expect(card.state('caption')).toEqual('testCaption');
    });

    it('it should have CardBody component', () => {
        jest.advanceTimersByTime(3000);
        let card = wrapper.find('Card').dive();
        expect(card.find('CardBody').length).toEqual(1);
        expect(card.state('description')).toEqual('testDescription');
    });
});