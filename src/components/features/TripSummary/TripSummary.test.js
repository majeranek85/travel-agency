import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate a link to a correct url', () => {
    const expectedId = 'abc';
    const component= shallow(<TripSummary id={expectedId} tags={[]}/>);

    const generatedUrl = component.find('.link').prop('to');
    expect(generatedUrl).toEqual(`/trip/${expectedId}`);
  });

  it('<img> should have correct src and alt', () => {
    const expectedSrc = 'img.jpg';
    const expectedAlt = 'alternative text';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render props name, cost and days correctly', () => {
    const expectedName = 'togo';
    const expectedCost = '$ 20000';
    const expectedDays = 7;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span:last-child').text()).toEqual(`from ${expectedCost}`);
    expect(component.find('.details span:first-child').text()).toEqual(`${expectedDays} days`);
  });

  it('should throw error without any of the props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render <span> for every tag i tags array',() => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags}/>);

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
    console.log(component.debug());
  });

});