import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

// import { postEvents } from '../actions'

class EventsNew extends Component {
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (<div></div>)
  }
  render() {
    return (
      <form>
        <div>
          <div><Field table="Title" name="title" type="text" component={this.renderField} />
        </div>
      </form>
    )
  }
}

// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew)
