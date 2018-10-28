import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}></button>
        <button onClick={props.decrement}>Minus</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
