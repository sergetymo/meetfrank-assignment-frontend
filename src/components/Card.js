import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    const cardClassName = 'card card--' + (this.props.type === 'stat' ? 'full' : 'half')
    const statClassName = this.prepareStatClassName(this.props.period)
    const primaryCount = this.prepareCount(this.props.quantity, this.props.subject)
    const periodTitle = this.preparePeriodTitle(this.props.period, this.props.isToday)

    return (
      <article className={ cardClassName }>
        <dl className={ statClassName }>
          {
            this.props.type === 'stat' && this.props.period
              ? <dt className="stat__description">{ periodTitle }</dt>
              : null
          }
          <dd className="stat__count">{ primaryCount }</dd>
          {
            this.props.type === 'stat' && this.props.secondary
              ? <dd className="stat__count stat__count--secondary">
                  { this.props.secondary }
                </dd>
              : null
          }
          <dt className="stat__description">{ this.props.description }</dt>
        </dl>
      </article> 
    )
  }

  prepareStatClassName(period) {
    if (period) return `stat stat--period stat--${period}`
    return 'stat stat--overview'
  }

  prepareCount(quantity, subject) {
    if (subject) return `${quantity} ${subject}`
    return quantity
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

Card.propTypes = {
  type: PropTypes.oneOf(['activity', 'stat']).isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  secondary: PropTypes.number,
  subject: PropTypes.string,
  period: PropTypes.oneOf(['day', 'week', 'month', 'tilltoday']),
  isToday: PropTypes.bool,
}

export default Card