import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = ({  })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)