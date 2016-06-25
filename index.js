// section1
// import React from 'react';
// import ReactDOM from 'react-dom';
// let Hello = () => <span>Hi</span>
// ReactDOM.render(<Hello/>, document.querySelector('#root'));

// section2
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BeerListContainer} from './components';
 
ReactDOM.render(
  <BeerListContainer/>,
  document.querySelector('#root'));
