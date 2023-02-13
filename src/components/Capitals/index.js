/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

const List = props => {
  const {each, condition} = props
  const {id, capitalDisplayText} = each
  return <option value={id}>{capitalDisplayText}</option>
}
class Capitals extends Component {
  state = {CountryId: countryAndCapitalsList[0].id}

  onValue = event => {
    const {CountryId} = this.state
    const Value = event.target.value
    this.setState({CountryId: Value})
  }

  getCountry = () => {
    const {CountryId} = this.state
    const result = countryAndCapitalsList.find(each => each.id === CountryId)
    return result
  }

  render() {
    const {CountryId} = this.state
    const {country} = this.getCountry(CountryId)

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1>Countries And Capitals</h1>
          <div>
            <select
              className="select-container"
              id="cap"
              onChange={this.onValue}
            >
              {countryAndCapitalsList.map(each => (
                <List
                  each={each}
                  key={each.id}
                  condition={each.id === CountryId}
                />
              ))}
            </select>
            <label htmlFor="cap"> is capital of which country?</label>
            <p>{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
