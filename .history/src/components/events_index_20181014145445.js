import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
      <div> value: {props.value} </div> <button onClick = {
        props.increment
      } > +1 < /button> <
      button onClick = {
        props.decrement
      } > -1 < /button> 
      <
      /React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  value: state.count.value
})

const mapDispatchToProps = ({
  readEvents
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)