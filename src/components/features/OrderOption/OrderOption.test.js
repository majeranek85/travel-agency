import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render correctly', () => {
    const expectedType = 'string';
    const expectedName = 'Hotel';
    const component = shallow(<OrderOption type={expectedType} name={expectedName} />);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct props (name)', () => {
    const expectedName = 'Car';
    const component = shallow(<OrderOption name={expectedName} />);

    component.find('.title').forEach(node => {
      expect(node.text()).toEqual(expectedName);
      console.log(component.debug());
    });

  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        break;
      }
    }
  });
}