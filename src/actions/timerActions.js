import * as actionTypes from './actionTypes'; 
import { endpoint } from '../config'; 

export function webResponseError( bool ){
    return{
        type: actionTypes.responseError,
        hasError: bool
    }
}

export function webResponseIsLoading( bool ){
    return{
        type: actionTypes.responseIsLoading,
        isLoading: bool
    }
}

function successResponse( data ){
    return{
        type: actionTypes.receivedPage,
        data: data
    }
}

/* syntax for the fetch: 

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

*/




export function respond( url ){
    return ( dispatch ) => {
        dispatch( webResponseIsLoading( true ) );
        fetch( url )
            .then( ( response ) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch( webResponseIsLoading( false ) );
                return response;
            })
            .then( ( response ) => response.json())
            .then(( items ) => dispatch( successResponse( items ) ) )
            .catch(() => dispatch( webResponseError( true ) ) );
    };
}


export function incrementTimer(){
    console.log( 'in timer actions, function increment time.');

    return{
        type: actionTypes.increaseCount
    }
}