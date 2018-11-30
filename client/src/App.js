import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Register from './components/Register'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/register' component={Register}/>
      </div>
    );
  }
}

export default App;
