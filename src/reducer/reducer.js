import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    isLoading: false,
    hasError: false,
    receivedPage: false, 
    totalCount: 0
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
                receivedPage: true
            }
        default:
            return{ receivedPage: state.receivedPage }
    }
}

export const totalCountReducer = ( state = initialState, action ) => {
    console.log( 'in reducer with count: ', state.totalCount )
    switch ( action.type ){
        case( actionTypes.increaseCount ):
            return{
                totalCount: state.totalCount + 1
            }

        default: 
            return { totalCount: state.totalCount }
    }
}

