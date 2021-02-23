import React from 'react'; 
import { afterEach, beforeEach, expect, it } from '@jest/globals'
import { mount } from 'enzyme';

import Application from '../Application';

it("Test Application", () => {
    const wrapper = mount(<Application />);
   
    expect(wrapper.find('#appBar').length).toEqual(1);
})
