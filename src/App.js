import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="root">
        <header className="header">
          <h1 className="header__text">15 December 2017</h1>
        </header>
        <main>
          <section className="section">
            <h2 className="section__header">Overview</h2>
            <div className="section__deck">
              <article className="card card--half">
                <dl className="stat stat--overview">
                  <dd className="stat__count">101</dd>
                  <dt className="stat__description">active buyers</dt>
                </dl>
              </article>
              <article className="card card--half">
                <dl className="stat stat--overview">
                  <dd className="stat__count">48</dd>
                  <dt className="stat__description">inactive</dt>
                </dl>
              </article>
            </div>
          </section>
          <section className="section">
            <h2 className="section__header">Purchases</h2>
            <div className="section__deck">
              <article className="card card--full">
                <dl className="stat stat--period stat--today">
                  <dt className="stat__description">Today</dt>
                  <dd className="stat__count">18 people</dd>
                  <dd className="stat__count stat__count--secondary">48</dd>
                  <dt className="stat__description">Purchases total</dt>
                </dl>
              </article>
              <article className="card card--full">
                <dl className="stat stat--period stat--week">
                  <dt className="stat__description">This week</dt>
                  <dd className="stat__count">58 people</dd>
                  <dd className="stat__count stat__count--secondary">312</dd>
                  <dt className="stat__description">Purchases total</dt>
                </dl>
              </article>
              <article className="card card--full">
                <dl className="stat stat--period stat--month">
                  <dt className="stat__description">This month</dt>
                  <dd className="stat__count">320 people</dd>
                  <dd className="stat__count stat__count--secondary">882</dd>
                  <dt className="stat__description">Purchases total</dt>
                </dl>
              </article>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
