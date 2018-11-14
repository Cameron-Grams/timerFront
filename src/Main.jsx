import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { respond, incrementTimer } from './actions/timerActions'; 
import './App.css';

class Main extends Component {
  constructor( props ){
    super( props );
    this.sendResponse = this.sendResponse.bind( this );
    this.updateCount = this.updateCount.bind( this ); 
  }

  sendResponse(){
    while( !this.props.receivedPage ){
        let timerId = setInterval( () => this.props.incrementTimer(), 1000 ); 
    }
     return this.props.respond(); 
  }

  updateCount(){
  }

  render() {

    let countDisplay = this.props.receivedPage ? null :

        this.props.totalCount;




    return (

      <div className="App">
        <header className="App-header">
            { countDisplay }
           <p>Inside the App</p>     
           <button onClick={ () => this.sendResponse() } >Test Button</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
    ...state,
    receivedPage: state.reducer.receivedPage, 
    totalCount: state.reducer.totalCount
})

export default connect( mapStateToProps, { respond, incrementTimer } )( Main );
