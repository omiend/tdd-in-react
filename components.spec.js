// section1
// import { expect } from 'chai';
//  
// describe('the environment', () => {
//   it('works, hopefully', () => {
//     expect(true).to.be.true;
//   });
// });
// section2
// import React from 'react';
// import { expect } from 'chai';
// import { shallow, mount } from 'enzyme';
// import { BeerListContainer } from './components';
//  
// describe('BeerListContainer', () => {
//   it('should render InputArea and BeerList', () => {
//     const wrapper = shallow(<BeerListContainer/>);
//     expect(wrapper.containsAllMatchingElements([
//       <InputArea/>,
//       <BeerList/>
//     ])).to.equal(true);
//   });
// });

// section3
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer } from './components';
import { InputArea, BeerList } from './components';
 
describe('BeerListContainer', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>
    ])).to.equal(true);
  });
});
