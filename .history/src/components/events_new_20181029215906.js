import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

// import { postEvents } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <form>
        <div>
          <Field table="Title" name="title" type="title" />
        </div>
      </form>
    )
  }
}

// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew)
