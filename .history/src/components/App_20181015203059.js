//import React, { Component } from 'react';

//class App extends Component {
//  render() {
//    return <h1>Hello, World!</h1>;
//  }
//}

//class App extends Component {
//  render() {
//    const dom = <h1>Hi!</h1>
//    return dom;
//  }
//}

//class App extends Component {
//  render() {
//    const greeting = "Ethereum";
//    const dom = <h1 className="foo">{greeting}</h1>;
//    return dom;
//  }
//}

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onChange={() => {console.log("I am clicked!")}} />
//      </React.Fragment>
//    )
//  }
//}

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div >Count {props.value}</div>
        <button onClick={props.increment}>Plus</button>
        <button onClick={props.decrement}>Minus</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)
