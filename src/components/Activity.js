import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Activity extends Component {
  render() {
    return (
      <article className="card card--half">
        <dl className="stat stat--overview">
          <dd className="stat__count">{ this.props.quantity }</dd>
          <dt className="stat__description">{ this.props.description }</dt>
        </dl>
      </article>
    )
  }
}

Activity.propTypes = {
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default Activity
