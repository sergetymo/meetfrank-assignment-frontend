import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Stat extends Component {
  render() {
    const periodTitle = this.preparePeriodTitle(this.props.period, this.props.isToday)
    return (
      <article className="card card--full">
        <dl className={`stat stat--period stat--${this.props.period}`}>
          <dt className="stat__description">{ periodTitle }</dt>
          <dd className="stat__count">{`${this.props.users} people`}</dd>
          <dt className="stat__description">Purchases total</dt>
          <dd className="stat__count stat__count--secondary">{ this.props.purchases }</dd>
        </dl>
      </article>
    )
  }

  preparePeriodTitle(period, isToday) {
    switch (period) {
      case 'day':
        return isToday ? 'Today' : 'That day'
      case 'month':
      case 'week':
        return isToday
          ? 'This ' + period
          : 'That ' + period
      case 'tilltoday':
        return 'That day till today'
      default:
        return 'No period'
    }
  }
}

Stat.propTypes = {
  period: PropTypes.string.isRequired,
  users: PropTypes.number.isRequired,
  purchases: PropTypes.number.isRequired,
  isToday: PropTypes.bool
}

export default Stat
