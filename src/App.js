import React, {
  Component
} from 'react';

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

class App extends Component {
  render() {
    return ( <
      React.Fragment >
      <
      label htmlFor = "bar" > bar < /label> <
      input type = "text"
      onChange = {
        () => {
          console.log("I am clicked!")
        }
      }
      /> <
      /React.Fragment>  
    )
  }
}

export default App;