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
    fetch(`/api/stats${q}`)
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
    if (this.state.isLoading) return <p className="loading">Loading...</p>

    return (
      <div className="root">
        <header className="header">
          <input
            type="date"
            className="header__text"
            defaultValue={this.state.data.dates.current}
            min={this.state.data.dates.min}
            max={this.state.data.dates.max}
            onBlur={this.onDateChange.bind(this)}
          />
        </header>
        <main>
          <Section
            title="Users"
            type="activity"
            data={this.state.data.activities}
            isToday={this.state.data.dates.today === this.state.data.dates.current}
          />
          <Section
            title="Purchases"
            type="stat"
            data={this.state.data.stats}
            isToday={this.state.data.dates.today === this.state.data.dates.current}
          />
        </main>
      </div>
    );
  }
}

export default App;
