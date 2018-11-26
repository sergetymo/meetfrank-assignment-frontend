import React, { Component } from 'react'
import Activity from './Activity'
import Stat from './Stat'
import PropTypes from 'prop-types'

class Section extends Component {
  render() {
    return (
      <section className="section">
        <h2 className="section__header">{this.props.title}</h2>
        <div className="section__deck">
        {
          Object.keys(this.props.data).map(key => {
            if (this.props.type === 'activity') return (
              <Activity
                key={`${this.props.title}-${key}`}
                quantity={this.props.data[key]}
                description={key}
              />
            )
            return (
              <Stat
                key={`${this.props.title}-${key}`}
                period={key}
                users={this.props.data[key].users}
                purchases={this.props.data[key].purchases}
                isToday={this.props.isToday}
              />
            )
          })
        }
        </div>
      </section>
    )
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['activity', 'stat']).isRequired,
  data: PropTypes.object.isRequired,
  isToday: PropTypes.bool
}

export default Section
