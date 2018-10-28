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
        <div>Count App {props.value}</div>
        <button class="plus" onClick={props.increment}>Plus</button>
        <button class="minus" onClick={props.decrement}>Minus</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
