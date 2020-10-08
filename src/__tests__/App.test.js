import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '../App';
import NavBar from '../components/NavBar';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('renders 1 NavBar component', () => {
    expect(wrapper.find(NavBar).length).toEqual(1);
});

it('renders 3 PublicRoute components', () => {
    expect(wrapper.find(PublicRoute).length).toEqual(3);
});

it('renders 1 Route component', () => {
    expect(wrapper.find(Route).length).toEqual(1);
});

it('renders 5 PublicRoute components', () => {
    expect(wrapper.find(PrivateRoute).length).toEqual(5);
});
