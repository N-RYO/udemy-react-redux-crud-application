import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>

      </React.Fragment>
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