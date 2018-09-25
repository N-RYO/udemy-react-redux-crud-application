//import React, { Component } from 'react';
import React from 'react';

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

const App = () => {
  const profiles = [{
      name: "Taro",
      age: 10
    },
    {
      name: "Hanako",
      age: 5
    },
    {
      name: "NoName"
    }
  ]
  return ( <
    div > {
      profiles.map((profile, index) => {
        return <User name = {
          profile.name
        }
        age = {
          profile.age
        }
        key = {
          index
        }
        />
      })
    } <
    /div>
  )
}

const User = (props) => {
  return <div > Hi, I am {
    props.name
  }, and {
    props.age
  }
  yeard old! < /div>
}

User.defaultProps = {
  age: 1
}

export default App;