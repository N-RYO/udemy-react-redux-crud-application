import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents, increment } from '../actions'

class EventsIndex extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = ({ increment, decrement });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)