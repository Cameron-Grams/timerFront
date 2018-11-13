import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { respond } from './actions/timerActions'; 
import './App.css';

class Main extends Component {
  constructor( props ){
    super( props );
    this.sendResponse = this.sendResponse.bind( this );
  }

  sendResponse(){
     return this.props.respond(); 
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
           <p>Inside the App</p>     
           <button onClick={ () => this.sendResponse() } >Test Button</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
    ...state
})

export default connect( mapStateToProps, { respond } )( Main );
