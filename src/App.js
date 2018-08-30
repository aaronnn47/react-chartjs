import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          'Boston',
          'Worcester',
          'Birmingham',
          'Montgomery',
          'Sylacauga',
          'Deatsville'
        ],
        datasets: [
          {
            label: 'Population',
            data: [418044, 423452, 653622, 212415, 969600, 141414],
            backgroundColor: [
              'rgba(12, 0, 20, 0.6)',
              'rgba(0, 173, 156, 0.6)',
              'rgba(106, 0, 173, 0.6)',
              'rgba(112, 0, 16, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(35, 05, 0, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart legendPosition="bottom" chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
