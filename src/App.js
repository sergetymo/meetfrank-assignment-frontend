import React, { Component } from 'react'
import Section from './components/Section'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: {}
    }
  }

  update(date = undefined) {
    this.setState({isLoading: true})
    const q = date ? '?date='+date : ''
    fetch('http://kenneth.local:3002/api/stats' + q)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          data: json.data
        })
      })
  }

  componentDidMount() {
    this.update()
  }

  onDateChange(event) {
    this.update(event.target.value)
  }

  render() {
    if (this.state.isLoading) return <p>Loading...</p>

    return (
      <div className="root">
        <header className="header">
          <input type="date" className="header__text"
            defaultValue={this.state.data.dates.current || '2017-12-15'}
            min={this.state.data.dates.min}
            max={this.state.data.dates.max}
            onBlur={this.onDateChange.bind(this)}
          />
        </header>
        <main>
          <Section
            title="Users"
            cardType="activity"
            data={this.state.data.activities}
            isToday={this.state.data.dates.today === this.state.data.dates.current}
          />
          <Section
            title="Purchases"
            cardType="stat"
            data={this.state.data.stats}
            isToday={this.state.data.dates.today === this.state.data.dates.current}
          />
        </main>
      </div>
    );
  }
}

export default App;
