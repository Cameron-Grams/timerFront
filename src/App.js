import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom'; 
import store from './store'; 
import { endpoint } from './config'; 
import Main from './Main'; 
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={ store } > 
      < BrowserRouter > 
        < Switch > 
            < Route exact path="/" component={ Main } /> 
            < Route exact path="/leave-site" component={ () => window.location = `${ endpoint }` } />
        </Switch>
      </ BrowserRouter >
    </Provider>
    );
  }
}

export default App;
