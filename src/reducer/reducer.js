import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    receivedPage: false, 
    totalCount: 0
}


const Reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.One ):
        {
            return {
                ...state,
                receivedPage: !state.receivedPage
            }
        }

        case( actionTypes.increaseCount ):
        {
            return{
                ...state,
                totalCount: state.totalCount + 1
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default Reducer; 