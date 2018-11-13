import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import store from './store'; 

import Main from './Main'; 
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={ store } > 
      <div className="App">
        <header className="App-header">
            < Main /> 
        </header>
      </div>
    </Provider>
    );
  }
}

export default App;
