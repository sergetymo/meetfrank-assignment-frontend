import React, { Component } from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

class Section extends Component {
  render() {
    return (
      <section className="section">
        <h2 className="section__header">{this.props.title}</h2>
        <div className="section__deck">
        {
          Object.keys(this.props.data).map(key => (
            // TODO: Separate Stat and Activity cards
            <Card
              key={`${this.props.title.toLowerCase()}-${key}`}
              type={this.props.cardType}
              quantity={
                this.props.cardType === 'stat'
                  ? this.props.data[key].users
                  : this.props.data[key]
              }
              description={
                this.props.cardType === 'stat'
                  ? 'Purchases total'
                  : key
              }
              secondary={
                this.props.cardType === 'stat'
                  ? this.props.data[key].purchases
                  : null
              }
              subject={
                this.props.cardType === 'stat'
                  ? 'people'
                  : null
              }
              period={
                this.props.cardType === 'stat'
                  ? key
                  : null
              }
              isToday={this.props.isToday}
            />
          ))
        }
        </div>
      </section>
    )
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  cardType: PropTypes.oneOf(['activity', 'stat']).isRequired,
  data: PropTypes.object.isRequired,
  isToday: PropTypes.bool
}

export default Section