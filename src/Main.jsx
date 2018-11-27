import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { respond } from './actions/timerActions'; 
import { endpoint } from './config'; 
import './App.css';

class Main extends Component {
  constructor( props ){
    super( props );
    this.sendResponse = this.sendResponse.bind( this );
    this.endCount = this.endCount.bind( this ); 
    this.state = {
        timerDisplay: 1
    }; 
  }
  
  updateCount(){
      this.setState( { timerDisplay: this.state.timerDisplay + 1 } )
  }

  sendResponse(){
        this.timerId = setInterval( this.updateCount.bind( this ), 1000 ); 
        return this.props.respond( endpoint ); 
  }

  endCount(){
      clearInterval( this.timerId );
  }

  render() {

    let countDisplay = ( this.props.isLoading ) ? 
        <div>  
        { this.state.timerDisplay }
        <p>Retrieving resources, if count reaches 50 please refresh.</p>
        </div>:
        null;  

    if ( this.props.receivedPage ){  
        console.log( "In Main, returned message: ", this.props.returnedMessage.message ); 
        this.props.history.push( '/leave-site' ); 
    }

    let styles = {
        "fontWeight": 700,
        "color": "#234b8c"
    };

    return (

      <div className="App">
        <header className="App-header">
            { countDisplay }
           <p>Press <span style={ styles }>Start</span> to begin retrieving resources.</p>     
           <button className="generalButton" onClick={ () => this.sendResponse() } >Start</button>
           <button className="generalButton" onClick={ () => this.endCount() } >End Count</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
    ...state,
    isLoading: state.isLoading.isLoading,
    receivedPage: state.receivedPage.receivedPage,
    returnedMessage: state.receivedPage.returnedMessage
});

const mapDispatchToProps = ( dispatch ) => ( {
    respond: ( endpoint ) => dispatch( respond( endpoint ) ),
})

export default connect( mapStateToProps, mapDispatchToProps )( Main );
