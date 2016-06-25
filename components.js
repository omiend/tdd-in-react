// section2
// import React, { Component } from 'react';
//  
// export class BeerListContainer extends Component {
//   render() {
//     return <span>Beer!</span>
//   }
// }

// section3
// import React, { Component } from 'react';
//  
// export class BeerListContainer extends Component {
//   render() {
//     return <span>Beer!</span>
//   }
// }
// 
// export class InputArea extends Component {
//   render() {
//     return <input/>
//   }
// }
//  
// export class BeerList extends Component {
//   render() {
//     return <ul/>
//   }
// }

// section4
import React, { Component } from 'react';
 
export class BeerListContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <InputArea/>
          <BeerList/>
        </div>
      </div>
    );
  }
}

export class InputArea extends Component {
  render() {
    return <input/>
  }
}
 
export class BeerList extends Component {
  render() {
    return <ul/>
  }
}
