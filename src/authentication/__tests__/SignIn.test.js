import React from 'react';
import { shallow } from 'enzyme';

import SignIn from '../SignIn';

let wrapper;

beforeEach(() => {
    const mockProps = {
        customSignIn: jest.fn()
    }

    wrapper = shallow(<SignIn {...mockProps} />);
});

it ('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});