import React from 'react';
import './App.css';
import CountryPicker from './CountryPicker'
import Stat from './Stat'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {country: '', deaths: 0, confirmed:0, recovered:0, date: ''};

    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.fetchData = this.fetchData.bind(this);

  }

  render() {
  return (
    <div className="App">
      <header className="header">
        <p>
          COVID 19
        </p>
      </header>
      <CountryPicker onCountryChange={this.handleCountryChange} />
    <body className = "body">
    <Stat name = 'recovered' number={this.state.recovered}/>
  <Stat name = 'confirmed' number={this.state.confirmed}/>
<Stat name='deaths' number={this.state.deaths}/>

    </body>
    <footer className = "footer">
    Update date: {this.state.date}
  </footer>
    </div>
  );
  }

  async handleCountryChange(country) {
    await this.setState({country: country});
    await this.fetchData()
  }

  async fetchData() {
    const url = 'https://api.covid19api.com/live/country/' + this.state.country;
    console.log(url);
    await fetch(url)
    .then(result => result.json())
    .then(data => data.length ? this.setState(
      { deaths: data[data.length-1].Deaths,
        confirmed: data[data.length-1].Confirmed,
        recovered: data[data.length-1].Recovered,
        date: data[data.length-1].Date
      }) : this.setState({ deaths: 0, confirmed: 0, recovered: 0, date:''}))
  }

}



export default App;
