import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate a link to a correct url', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]}/>);

    const generatedUrl = component.find('.link').prop('to');
    expect(generatedUrl).toEqual(`/trip/${expectedId}`);
  });

  it('should render <img> that has correct src and alt', () => {
    const expectedSrc = 'img.jpg';
    const expectedAlt = 'alternative text';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render props (name, cost and days) correctly', () => {
    const expectedName = 'togo';
    const expectedCost = '$2,000';
    const expectedDiscount = 20;
    const expectedDays = 7;
    const expectedPromoPrice = '$1,600';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} discount={expectedDiscount} days={expectedDays}  tags={[]}/>);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span:first-child').text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details .promo').text()).toEqual(`Happy Hour price from: ${expectedPromoPrice}`);
    expect(component.find('.details .standard').text()).toEqual(`Standard price: ${expectedCost}`);
    //console.log(component.debug());
  });

  it('should throw error if any of the props is missing', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render <span> for every tag in tags array',() => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags}/>);

    for(let tagId in expectedTags) {
      expect(component.find('.tag').at(tagId).text()).toEqual(expectedTags[tagId]);
    }
  });

  it('should not render a div if tags array is empty', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags').exists()).toBeFalsy();
    //console.log(component.debug());
  });

});