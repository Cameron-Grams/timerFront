import * as actionTypes from './actionTypes'; 



export function respond(){
    console.log( 'in function respond' ); 
    return{
        type: actionTypes.One
    }
}


export function incrementTimer(){
    console.log( 'in timer actions, function increment time.');

    return{
        type: actionTypes.increaseCount
    }
}