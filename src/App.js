import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { fetchRates } from './actions/ratesAction'


class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchRates())
  }

  render() {
    const { rates } = this.props
    const mappedRates = rates.map((rates) => <li>{rates.rates}</li>)

    console.log(this.props)
    console.log(mappedRates)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Dollar Xchange</h2>
        </div>
        
        <form className="form-group">
          <label>
            <input type="text" name="amount" placeholder="Enter Amount..." className="form-control"/>
          </label>
          <ul>{mappedRates}</ul>
          <select>
            <option selected value="EUR">{rates.base}</option>
            <option value="mango">{mappedRates}</option>
          </select>

          - TO -

          <select>
            <option selected value="EUR">{rates.base}</option>
            <option value="mango">Mango</option>
          </select>

          <input type="submit" value="Convert" className="btn btn-info" />
        </form>

        <p className="App-intro">
          {rates.base}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    base: store.rates.base,
    rates: store.rates.rates,
    ratesFetched: store.rates.fetched
  }
}

export default connect(mapStateToProps)(App);
