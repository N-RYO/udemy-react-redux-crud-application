import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvents } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = ({ readEvents })

export default connect(, mapDispatchToProps)(EventsNew)
