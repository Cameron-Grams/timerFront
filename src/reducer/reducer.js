import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    isLoading: false,
    hasError: false,
    receivedPage: true, 
    totalCount: 0
}

export const isLoadingReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.responseIsLoading ):
            return{
                ...state,
                isLoading: action.isLoading
            }
        default:
            return { ...state }
    }
}

export const errorReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.responseError ):
            return{
                ...state,
                hasError: action.hasError
            }
        default:
            return { ...state }
    }
}

export const receivedPageReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case ( actionTypes.receivedPage ):
            return{
                ...state,
                receivedPage: true
            }
        default:
            return{ ...state }
    }
}

export const totalCountReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case( actionTypes.increaseCount ):
            return{
                ...state,
                totalCount: state.totalCount + 1
            }

        default: 
            return { ...state }
    }
}

