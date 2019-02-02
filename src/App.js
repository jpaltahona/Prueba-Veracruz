import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}

export default App;
