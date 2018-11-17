import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    isLoading: false,
    hasError: false,
    receivedPage: false,
    returnedMessage: ""
}

export const isLoadingReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.responseIsLoading ):
            return{
                isLoading: action.isLoading
            }
        default:
            return { isLoading: state.isLoading }
    }
}

export const errorReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.responseError ):
            return{
                hasError: action.hasError
            }
        default:
            return { hasError: state.hasError }
    }
}

export const receivedPageReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case ( actionTypes.receivedPage ):
            return{
                receivedPage: true,
                returnedMessage: action.data
            }
        default:
            return{ receivedPage: state.receivedPage }
    }
}
