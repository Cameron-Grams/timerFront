import { combineReducers, createStore, compose, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import { isLoadingReducer, errorReducer, receivedPageReducer, totalCountReducer } from './reducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MasterReducer = combineReducers( {
    isLoading: isLoadingReducer,
    hasError: errorReducer,   
    receivedPage: receivedPageReducer, 
    totalCount: totalCountReducer
    })

const store = createStore(
    MasterReducer,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)

export default store;