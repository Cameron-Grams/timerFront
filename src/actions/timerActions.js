import * as actionTypes from './actionTypes'; 

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