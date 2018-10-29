import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvents } from '../actions'

class EventsNew extends Component {
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    t
  }

  render() {
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <div><Field table="Title" name="title" type="text" component={this.renderField} /></div>
          <div><Field table="Body" name="body" type="text" component={this.renderField} /></div>

          <div>
            <input type="submit" value="Submit" disabled={false} />
            <Link to="/" >Cancel</Link>
          </div>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}
// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(
  reduxForm({ validate, form: 'eventNewform' })(EventsNew)
)
