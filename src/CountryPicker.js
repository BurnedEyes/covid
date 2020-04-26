import React from 'react';
import './CountryPicker.css';

class CountryPicker extends React.Component {
constructor(props) {
  super(props);
  this.state = {
        countries: []
  }
  this.handleChange = this.handleChange.bind(this);
}

  render() {
    return (
  <form>
    <label>
      <select className="select" onChange={this.handleChange}>
        { this.state.countries.map((country) => <option className="option" key={country} value={country}>{country} </option>) }
        </select>
  </label>
</form>
);
}

handleChange(e) {
  this.props.onCountryChange(e.target.value);
}

async componentDidMount() {
    const url = 'https://api.covid19api.com/countries';
    await fetch(url)
    .then(result => result.json())
    .then(data => this.setState({countries: data.map(obj => obj.Country).sort()}))
  }

}

export default CountryPicker;
