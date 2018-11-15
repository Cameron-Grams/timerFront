import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { respond, incrementTimer } from './actions/timerActions'; 
import { endpoint } from './config'; 
import './App.css';

class Main extends Component {
  constructor( props ){
    super( props );
    this.sendResponse = this.sendResponse.bind( this );
    this.endCount = this.endCount.bind( this ); 
    this.timerId = "";
    this.timerDisplay = this.props.totalCount; 
  }

  sendResponse(){
      this.timerId = setInterval( () => this.props.incrementTimer(), 1000 ); 
      return this.props.respond( endpoint ); 
  }

  endCount(){
      clearInterval( this.timerId );
  }

  render() {

    let countDisplay = ( this.props.isLoading ) ? 
        <div>  
        { this.timerDisplay }
        <p>Retrieving resources, if count reaches 50 please refresh.</p>
        </div>:
        null;  

    return (

      <div className="App">
        <header className="App-header">
            { countDisplay }
           <p>Inside the App</p>     
           <button onClick={ () => this.sendResponse() } >Start Button</button>
           <button onClick={ () => this.endCount() } >End Button</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
    ...state,
    isLoading: state.isLoading.isLoading,
    receivedPage: state.receivedPage.receivedPage, 
    totalCount: state.totalCount.totalCount
});

const mapDispatchToProps = ( dispatch ) => ( {
    respond: ( endpoint ) => dispatch( respond( endpoint ) ),
    incrementTimer: incrementTimer
})

export default connect( mapStateToProps, mapDispatchToProps )( Main );
