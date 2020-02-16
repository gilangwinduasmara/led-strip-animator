import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Screens/Screens';
import Timeline from './Componets/Timeline';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      leds: 0,
      data: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello />
          <Timeline />
          <div style={{ position: 'absolute', top: 0, left: 24 }}>
            <button>settings</button>
          </div>
        </header>
      </div>
    );
  }
}

const dummy = [
  {
    id: 0,
    color: 'black',

  }
]